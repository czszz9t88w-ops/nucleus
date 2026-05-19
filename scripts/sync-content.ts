#!/usr/bin/env node
/**
 * Nucleus Content Sync
 * ─────────────────────────────────────────────────────────────
 * Reads your Google Sheet and writes data/generatedContent.ts
 *
 * ONE-TIME SETUP (5 minutes):
 *   1. Go to: https://docs.google.com/spreadsheets
 *   2. Create a new spreadsheet — name it "Nucleus Content"
 *   3. Create 4 tabs named exactly: Notes  Snippets  MCQ  QA
 *   4. Use these column headers (row 1) in each tab:
 *
 *      Notes tab:
 *        chapter_id | heading | body | highlight
 *
 *      Snippets tab:
 *        chapter_id | term | definition | formula | example
 *
 *      MCQ tab:
 *        chapter_id | worksheet | question | option_a | option_b | option_c | option_d | answer | explanation
 *        (answer = A / B / C / D)
 *
 *      QA tab:
 *        chapter_id | worksheet | question | answer | type
 *        (worksheet = 1 or 2 | type = short or long)
 *
 *   5. File → Share → Publish to web → Entire document → CSV → Publish
 *   6. Copy your Sheet ID from the URL bar:
 *        https://docs.google.com/spreadsheets/d/[COPY_THIS]/edit
 *   7. Paste it into .env.local:
 *        CONTENT_SHEET_ID=your_id_here
 *
 * RUNNING THE SYNC:
 *   npm run sync
 *
 * Chapter ID format:   class-subject-chapternumber
 *   Examples: 6-maths-1   6-science-3   7-maths-12   8-science-5
 */

import * as fs from "fs";
import * as path from "path";

// ── Load .env.local ────────────────────────────────────────
const envFile = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf-8").split("\n")) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "").trim();
  }
}

const SHEET_ID = process.env.CONTENT_SHEET_ID;
if (!SHEET_ID) {
  console.error(`
❌  CONTENT_SHEET_ID is not set.

Add this line to your .env.local file:
    CONTENT_SHEET_ID=your_google_sheet_id_here

The Sheet ID is the long string between /d/ and /edit in your sheet URL:
    https://docs.google.com/spreadsheets/d/[THIS_PART]/edit
`);
  process.exit(1);
}

// ── Fetch a tab as CSV ─────────────────────────────────────
async function fetchTab(tab: string): Promise<string> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Could not fetch tab "${tab}" (HTTP ${res.status}).\n` +
      `  Make sure:\n` +
      `  • The sheet is published to web (File → Share → Publish to web)\n` +
      `  • The tab is named exactly "${tab}" (case-sensitive)\n` +
      `  • The Sheet ID is correct in .env.local`
    );
  }
  return res.text();
}

// ── Robust CSV parser (handles quoted fields, newlines in cells) ──
function parseCSV(raw: string): Record<string, string>[] {
  const rows: string[][] = [];
  let pos = 0;
  const n = raw.length;

  while (pos < n) {
    const row: string[] = [];
    let inRow = true;

    while (inRow && pos < n) {
      let field = "";

      if (raw[pos] === '"') {
        // Quoted field — may contain commas and newlines
        pos++;
        while (pos < n) {
          if (raw[pos] === '"') {
            if (pos + 1 < n && raw[pos + 1] === '"') {
              field += '"'; // escaped quote
              pos += 2;
            } else {
              pos++; // closing quote
              break;
            }
          } else {
            field += raw[pos++];
          }
        }
      } else {
        // Unquoted field — ends at comma or newline
        while (pos < n && raw[pos] !== "," && raw[pos] !== "\n" && raw[pos] !== "\r") {
          field += raw[pos++];
        }
      }

      row.push(field.trim());

      if (pos < n && raw[pos] === ",") {
        pos++; // next field
      } else {
        inRow = false;
        if (pos < n && raw[pos] === "\r") pos++;
        if (pos < n && raw[pos] === "\n") pos++;
      }
    }

    if (row.some((f) => f !== "")) rows.push(row);
  }

  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => h.toLowerCase().replace(/\s+/g, "_"));
  return rows.slice(1).map((cols) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => { obj[h] = cols[i] ?? ""; });
    return obj;
  });
}

// ── Content types (mirrors data/content.ts) ───────────────
interface Note        { heading: string; body: string; highlight?: string }
interface Snippet     { term: string; definition: string; formula?: string; example?: string }
interface MCQQuestion { q: string; options: string[]; answer: number; explanation: string }
interface QAQuestion  { q: string; a: string; type: "short" | "long" }
interface Chapter     { notes: Note[]; snippets: Snippet[]; mcq: MCQQuestion[][]; qa: QAQuestion[][] }

// ── Build content map from all tabs ───────────────────────
async function buildContent(): Promise<Record<string, Chapter>> {
  const [notesRaw, snippetsRaw, mcqRaw, qaRaw] = await Promise.all([
    fetchTab("Notes"),
    fetchTab("Snippets"),
    fetchTab("MCQ"),
    fetchTab("QA"),
  ]);

  const content: Record<string, Chapter> = {};

  function ch(id: string): Chapter {
    if (!content[id]) content[id] = { notes: [], snippets: [], mcq: [[], []], qa: [[], []] };
    return content[id];
  }

  // ── Notes ────────────────────────────────────────────────
  let notesCount = 0;
  for (const row of parseCSV(notesRaw)) {
    const id = row.chapter_id?.trim();
    if (!id || !row.heading?.trim()) continue;
    const note: Note = { heading: row.heading.trim(), body: row.body ?? "" };
    if (row.highlight?.trim()) note.highlight = row.highlight.trim();
    ch(id).notes.push(note);
    notesCount++;
  }

  // ── Snippets ─────────────────────────────────────────────
  let snippetsCount = 0;
  for (const row of parseCSV(snippetsRaw)) {
    const id = row.chapter_id?.trim();
    if (!id || !row.term?.trim()) continue;
    const snippet: Snippet = { term: row.term.trim(), definition: row.definition ?? "" };
    if (row.formula?.trim()) snippet.formula = row.formula.trim();
    if (row.example?.trim()) snippet.example = row.example.trim();
    ch(id).snippets.push(snippet);
    snippetsCount++;
  }

  // ── MCQ ──────────────────────────────────────────────────
  let mcqCount = 0;
  for (const row of parseCSV(mcqRaw)) {
    const id = row.chapter_id?.trim();
    if (!id || !row.question?.trim()) continue;

    const wsNum  = parseInt(row.worksheet ?? "1") || 1;
    const wsIdx  = Math.min(Math.max(wsNum - 1, 0), 1); // clamp to 0 or 1

    const letter = (row.answer ?? "A").trim().toUpperCase();
    const ansIdx = ["A", "B", "C", "D"].indexOf(letter);

    const q: MCQQuestion = {
      q:           row.question.trim(),
      options:     [row.option_a ?? "", row.option_b ?? "", row.option_c ?? "", row.option_d ?? ""],
      answer:      ansIdx >= 0 ? ansIdx : 0,
      explanation: row.explanation ?? "",
    };

    while (ch(id).mcq.length <= wsIdx) ch(id).mcq.push([]);
    ch(id).mcq[wsIdx].push(q);
    mcqCount++;
  }

  // ── QA ───────────────────────────────────────────────────
  let qaCount = 0;
  for (const row of parseCSV(qaRaw)) {
    const id = row.chapter_id?.trim();
    if (!id || !row.question?.trim()) continue;

    const wsNum = parseInt(row.worksheet ?? "1") || 1;
    const wsIdx = Math.min(Math.max(wsNum - 1, 0), 1);

    const q: QAQuestion = {
      q:    row.question.trim(),
      a:    row.answer ?? "",
      type: row.type?.toLowerCase() === "long" ? "long" : "short",
    };

    while (ch(id).qa.length <= wsIdx) ch(id).qa.push([]);
    ch(id).qa[wsIdx].push(q);
    qaCount++;
  }

  console.log(`  Notes: ${notesCount} rows  |  Snippets: ${snippetsCount} rows  |  MCQ: ${mcqCount} Qs  |  QA: ${qaCount} Qs`);
  return content;
}

// ── Serialize to TypeScript source ────────────────────────
function ts(value: unknown, depth = 0): string {
  const pad  = "  ".repeat(depth);
  const pad1 = "  ".repeat(depth + 1);

  if (value === null || value === undefined) return "undefined";
  if (typeof value === "number")  return String(value);
  if (typeof value === "boolean") return String(value);
  if (typeof value === "string") {
    const escaped = value
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/\$\{/g, "\\${");
    return "`" + escaped + "`";
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((v) => `${pad1}${ts(v, depth + 1)}`).join(",\n");
    return `[\n${items},\n${pad}]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => `${pad1}${k}: ${ts(v, depth + 1)}`);
    if (entries.length === 0) return "{}";
    return `{\n${entries.join(",\n")},\n${pad}}`;
  }
  return String(value);
}

// ── Write the output file ──────────────────────────────────
async function main() {
  console.log("\n🔄  Nucleus Content Sync\n");

  const content = await buildContent();
  const chapterIds = Object.keys(content);

  if (chapterIds.length === 0) {
    console.warn("\n⚠️   No content found. Check:\n  • Sheet tabs are named: Notes  Snippets  MCQ  QA\n  • Rows have a chapter_id (e.g. 6-maths-1)\n");
    process.exit(1);
  }

  const lines: string[] = [
    `// ─────────────────────────────────────────────────────────`,
    `// AUTO-GENERATED — do not edit this file manually.`,
    `// Run  npm run sync  to regenerate from Google Sheets.`,
    `// Last synced: ${new Date().toISOString()}`,
    `// Chapters in this file: ${chapterIds.length}`,
    `// ─────────────────────────────────────────────────────────`,
    ``,
    `import type { ChapterContent } from "./content";`,
    ``,
    `export const generatedContent: Record<string, ChapterContent> = {`,
  ];

  for (const [id, chapter] of Object.entries(content)) {
    lines.push(`  // ${id}`);
    lines.push(`  ${JSON.stringify(id)}: ${ts(chapter, 1)},`);
    lines.push(``);
  }

  lines.push(`};`);
  lines.push(``);

  const outPath = path.resolve(process.cwd(), "data/generatedContent.ts");
  fs.writeFileSync(outPath, lines.join("\n"), "utf-8");

  console.log(`\n✅  Wrote ${chapterIds.length} chapters → data/generatedContent.ts`);
  console.log(`   Chapters: ${chapterIds.slice(0, 8).join(", ")}${chapterIds.length > 8 ? ` … +${chapterIds.length - 8} more` : ""}`);
  console.log(`\n   Push to GitHub or run  npm run build  to deploy.\n`);
}

main().catch((err: Error) => {
  console.error(`\n❌  ${err.message}\n`);
  process.exit(1);
});
