/**
 * Generates Google Sheets CSV templates pre-filled with all 78 chapter IDs.
 * Run once: npx tsx scripts/generate-templates.ts
 */

import * as fs from "fs";
import * as path from "path";

// ── Chapter data (copied from curriculum.ts) ──────────────
const chapters = [
  // CLASS 6 MATHS
  { id: "6-maths-1",  title: "Patterns in Mathematics" },
  { id: "6-maths-2",  title: "Lines and Angles" },
  { id: "6-maths-3",  title: "Number Play" },
  { id: "6-maths-4",  title: "Data Handling and Presentation" },
  { id: "6-maths-5",  title: "Prime Time" },
  { id: "6-maths-6",  title: "Perimeter and Area" },
  { id: "6-maths-7",  title: "Fractions" },
  { id: "6-maths-8",  title: "Playing with Constructions" },
  { id: "6-maths-9",  title: "Symmetry" },
  { id: "6-maths-10", title: "The Other Side of Zero" },
  // CLASS 6 SCIENCE
  { id: "6-science-1",  title: "The Wonderful World of Science" },
  { id: "6-science-2",  title: "Diversity in the Living World" },
  { id: "6-science-3",  title: "Mindful Eating: A Path to a Healthy Body" },
  { id: "6-science-4",  title: "Seeing Without Touching" },
  { id: "6-science-5",  title: "A Journey Through States of Matter" },
  { id: "6-science-6",  title: "Nature's Treasure" },
  { id: "6-science-7",  title: "Temperature and its Measurement" },
  { id: "6-science-8",  title: "A Treat for Mosquitoes" },
  { id: "6-science-9",  title: "From Mud to Pot" },
  { id: "6-science-10", title: "Wonders of Light" },
  // CLASS 7 MATHS
  { id: "7-maths-1",  title: "Large Numbers Around Us" },
  { id: "7-maths-2",  title: "Fractions and Decimals" },
  { id: "7-maths-3",  title: "Playing with Numbers" },
  { id: "7-maths-4",  title: "Ratio and Proportion" },
  { id: "7-maths-5",  title: "Simple Equations" },
  { id: "7-maths-6",  title: "Lines and Angles" },
  { id: "7-maths-7",  title: "The Triangle and Its Properties" },
  { id: "7-maths-8",  title: "Congruence of Triangles" },
  { id: "7-maths-9",  title: "Data Handling" },
  { id: "7-maths-10", title: "Perimeter and Area" },
  { id: "7-maths-11", title: "Exponents and Powers" },
  { id: "7-maths-12", title: "Symmetry" },
  { id: "7-maths-13", title: "Visualising Solid Shapes" },
  // CLASS 7 SCIENCE
  { id: "7-science-1",  title: "Nutrition in Plants" },
  { id: "7-science-2",  title: "Nutrition in Animals" },
  { id: "7-science-3",  title: "Fibre to Fabric" },
  { id: "7-science-4",  title: "Heat" },
  { id: "7-science-5",  title: "Acids, Bases and Salts" },
  { id: "7-science-6",  title: "Physical and Chemical Changes" },
  { id: "7-science-7",  title: "Respiration in Organisms" },
  { id: "7-science-8",  title: "Transportation in Animals and Plants" },
  { id: "7-science-9",  title: "Reproduction in Plants" },
  { id: "7-science-10", title: "Motion and Time" },
  { id: "7-science-11", title: "Electric Current and Its Effects" },
  { id: "7-science-12", title: "Light" },
  { id: "7-science-13", title: "Water: A Precious Resource" },
  // CLASS 8 MATHS
  { id: "8-maths-1",  title: "Rational Numbers" },
  { id: "8-maths-2",  title: "Linear Equations in One Variable" },
  { id: "8-maths-3",  title: "Understanding Quadrilaterals" },
  { id: "8-maths-4",  title: "Practical Geometry" },
  { id: "8-maths-5",  title: "Data Handling" },
  { id: "8-maths-6",  title: "Squares and Square Roots" },
  { id: "8-maths-7",  title: "Cubes and Cube Roots" },
  { id: "8-maths-8",  title: "Comparing Quantities" },
  { id: "8-maths-9",  title: "Algebraic Expressions and Identities" },
  { id: "8-maths-10", title: "Visualising Solid Shapes" },
  { id: "8-maths-11", title: "Mensuration" },
  { id: "8-maths-12", title: "Exponents and Powers" },
  { id: "8-maths-13", title: "Direct and Inverse Proportions" },
  { id: "8-maths-14", title: "Factorisation" },
  { id: "8-maths-15", title: "Introduction to Graphs" },
  { id: "8-maths-16", title: "Playing with Numbers" },
  // CLASS 8 SCIENCE
  { id: "8-science-1",  title: "Crop Production and Management" },
  { id: "8-science-2",  title: "Microorganisms: Friend and Foe" },
  { id: "8-science-3",  title: "Synthetic Fibres and Plastics" },
  { id: "8-science-4",  title: "Materials: Metals and Non-Metals" },
  { id: "8-science-5",  title: "Coal and Petroleum" },
  { id: "8-science-6",  title: "Combustion and Flame" },
  { id: "8-science-7",  title: "Conservation of Plants and Animals" },
  { id: "8-science-8",  title: "Cell - Structure and Functions" },
  { id: "8-science-9",  title: "Reproduction in Animals" },
  { id: "8-science-10", title: "Reaching the Age of Adolescence" },
  { id: "8-science-11", title: "Force and Pressure" },
  { id: "8-science-12", title: "Friction" },
  { id: "8-science-13", title: "Sound" },
  { id: "8-science-14", title: "Chemical Effects of Electric Current" },
  { id: "8-science-15", title: "Some Natural Phenomena" },
  { id: "8-science-16", title: "Light" },
];

// ── CSV helper ─────────────────────────────────────────────
function q(s: string) {
  // Always quote: simplest safe approach
  return `"${s.replace(/"/g, '""')}"`;
}
function row(...cells: string[]) {
  return cells.map(q).join(",");
}

// ── Output dir ─────────────────────────────────────────────
const outDir = path.resolve(process.cwd(), "templates");
fs.mkdirSync(outDir, { recursive: true });

// ══════════════════════════════════════════════════════════
// 1. NOTES  (4 slots per chapter)
// ══════════════════════════════════════════════════════════
const notesLines = [
  "# NOTES TAB — paste this into the 'Notes' sheet in Google Sheets",
  "# Each chapter needs 3-4 notes. Add heading + body for each.",
  "# The 'highlight' column is optional (short key-point shown in yellow box).",
  "#",
  row("chapter_id", "chapter_name", "heading", "body", "highlight"),
  // Example row (filled)
  row("6-maths-1", "Patterns in Mathematics",
    "What is a Pattern?",
    "A pattern is an arrangement of numbers or shapes that follows a fixed rule. Patterns help us predict what comes next and understand the structure of mathematics. Every pattern has a rule — find the rule, extend the pattern.",
    "Key Idea: Every pattern has a rule. Find the rule, predict the next term."),
  row("6-maths-1", "Patterns in Mathematics",
    "Number Sequences",
    "A number sequence is a list of numbers arranged according to a rule. Examples: 2,4,6,8 (add 2 each time — even numbers); 1,4,9,16,25 (perfect squares: 1²,2²,3²); 1,1,2,3,5,8 (Fibonacci — each term = sum of two before it).",
    "Triangular numbers: 1, 3, 6, 10, 15 … Formula: n(n+1)/2"),
  row("6-maths-1", "Patterns in Mathematics",
    "Shape Patterns",
    "Patterns appear in geometric arrangements. Square numbers can be shown as square dot grids. Triangular numbers form triangle arrangements of dots. Pascal's Triangle has rows where each entry is the sum of the two above.",
    ""),
];

for (const ch of chapters.slice(1)) { // skip 6-maths-1 (already shown as example)
  for (let i = 0; i < 4; i++) {
    notesLines.push(row(ch.id, ch.title, "", "", ""));
  }
}

fs.writeFileSync(path.join(outDir, "1_Notes.csv"), notesLines.join("\n"), "utf-8");

// ══════════════════════════════════════════════════════════
// 2. SNIPPETS  (8 slots per chapter)
// ══════════════════════════════════════════════════════════
const snippetLines = [
  "# SNIPPETS TAB — paste into the 'Snippets' sheet",
  "# Each chapter needs 6-8 flashcard snippets (term + definition).",
  "# 'formula' and 'example' columns are optional.",
  "#",
  row("chapter_id", "chapter_name", "term", "definition", "formula", "example"),
  // Example rows
  row("6-maths-1", "Patterns in Mathematics", "Pattern", "An arrangement that follows a fixed rule and can be extended predictably.", "", "2, 4, 6, 8 — rule: add 2"),
  row("6-maths-1", "Patterns in Mathematics", "Sequence", "An ordered list of numbers or objects following a rule.", "", "1, 4, 9, 16, 25 (perfect squares)"),
  row("6-maths-1", "Patterns in Mathematics", "Triangular Number", "Numbers that can form a triangular dot arrangement.", "Tn = n(n+1)/2", "T4 = 4×5/2 = 10"),
  row("6-maths-1", "Patterns in Mathematics", "Square Number", "The product of a number multiplied by itself.", "n² = n × n", "4² = 16"),
  row("6-maths-1", "Patterns in Mathematics", "Fibonacci Sequence", "A sequence where each term is the sum of the two previous terms starting from 1, 1.", "", "1, 1, 2, 3, 5, 8, 13, 21 …"),
  row("6-maths-1", "Patterns in Mathematics", "Even Numbers", "Numbers divisible by 2.", "2n", "2, 4, 6, 8, 10 …"),
  row("6-maths-1", "Patterns in Mathematics", "Odd Numbers", "Numbers not divisible by 2.", "2n − 1", "1, 3, 5, 7, 9 …"),
  row("6-maths-1", "Patterns in Mathematics", "Pascal's Triangle", "A triangular arrangement where each entry is the sum of the two entries above it.", "", "Row 3: 1, 3, 3, 1"),
];

for (const ch of chapters.slice(1)) {
  for (let i = 0; i < 8; i++) {
    snippetLines.push(row(ch.id, ch.title, "", "", "", ""));
  }
}

fs.writeFileSync(path.join(outDir, "2_Snippets.csv"), snippetLines.join("\n"), "utf-8");

// ══════════════════════════════════════════════════════════
// 3. MCQ  (10 per worksheet × 2 worksheets = 20 per chapter)
// ══════════════════════════════════════════════════════════
const mcqLines = [
  "# MCQ TAB — paste into the 'MCQ' sheet",
  "# Each chapter has 2 worksheets × 10 questions = 20 rows.",
  "# worksheet = 1 or 2",
  "# answer = A, B, C, or D  (the correct option letter)",
  "# Worksheet 1: regular MCQ.  Worksheet 2: Assertion-Reason MCQ.",
  "#",
  row("chapter_id", "chapter_name", "worksheet", "question", "option_a", "option_b", "option_c", "option_d", "answer", "explanation"),
  // Example rows — worksheet 1 (regular MCQ)
  row("6-maths-1", "Patterns in Mathematics", "1", "What is the next number in the sequence: 1, 4, 9, 16, __?", "20", "25", "24", "21", "B", "This is the sequence of perfect squares: 1², 2², 3², 4², 5² = 25"),
  row("6-maths-1", "Patterns in Mathematics", "1", "The 5th triangular number is:", "10", "12", "15", "8", "C", "T5 = 5×6/2 = 15. Triangular numbers: 1, 3, 6, 10, 15"),
  row("6-maths-1", "Patterns in Mathematics", "1", "Which of these is a Fibonacci number?", "14", "13", "11", "16", "B", "Fibonacci: 1,1,2,3,5,8,13,21… 13 is a Fibonacci number"),
  row("6-maths-1", "Patterns in Mathematics", "1", "What is the 4th triangular number?", "6", "8", "10", "12", "C", "T4 = 4×5/2 = 10"),
  row("6-maths-1", "Patterns in Mathematics", "1", "In the Fibonacci sequence 1, 1, 2, 3, 5, 8 — what comes next?", "12", "11", "13", "14", "C", "8 + 5 = 13"),
  row("6-maths-1", "Patterns in Mathematics", "1", "Square numbers are also called:", "Triangular numbers", "Perfect squares", "Prime numbers", "Fibonacci numbers", "B", "Numbers like 1, 4, 9, 16 formed by n×n are called perfect squares"),
  row("6-maths-1", "Patterns in Mathematics", "1", "What is 2n − 1 when n = 5?", "8", "9", "10", "11", "B", "2(5)−1 = 9. This gives the 5th odd number."),
  row("6-maths-1", "Patterns in Mathematics", "1", "How many dots are in a triangular arrangement with 4 rows?", "8", "10", "12", "6", "B", "Row 1+2+3+4 = 10 dots = T4"),
  row("6-maths-1", "Patterns in Mathematics", "1", "Which sequence represents square numbers?", "1,2,3,4,5", "1,3,6,10,15", "1,4,9,16,25", "2,4,6,8,10", "C", "1²=1, 2²=4, 3²=9, 4²=16, 5²=25 are perfect squares"),
  row("6-maths-1", "Patterns in Mathematics", "1", "What pattern do multiples of 9 follow in their digit sums?", "Always equal 9", "Always divisible by 9", "Always odd", "Always even", "B", "Sum of digits of any multiple of 9 is always divisible by 9"),
  // Example rows — worksheet 2 (Assertion-Reason)
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: 36 is a perfect square. Reason: 36 = 6 × 6.", "Both A and R true, R explains A", "Both true, R does not explain A", "A true, R false", "A false, R true", "A", "36 = 6² is correct and the reason correctly explains it"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: Sum of first n odd numbers = n². Reason: 1+3+5 = 9 = 3².", "Both A and R true, R explains A", "Both true, R does not explain A", "A true, R false", "A false, R true", "A", "Pattern holds: sum of first n odd numbers is always n²"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: Every even number is a triangular number. Reason: 2, 4, 6 are even.", "A true, R false", "Both true", "A false, R true", "Both false", "C", "Not every even number is triangular. Triangular: 1,3,6,10,15…"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: Fibonacci numbers grow exponentially. Reason: Each term is the product of the two before it.", "A true, R false", "Both true, R explains A", "Both false", "A false, R true", "A", "Fibonacci grows roughly exponentially but reason is wrong — each term is the SUM, not product"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: The number 0 is even. Reason: 0 = 2 × 0.", "Both A and R true, R explains A", "A true, R false", "A false, R true", "Both false", "A", "0 is even because divisible by 2, and 0 = 2×0 correctly shows this"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: Pascal's triangle rows sum to powers of 2. Reason: Row 3 sums to 8 = 2³.", "Both A and R true, R explains A", "A false, R true", "Both false", "A true, R false", "A", "Row sums: 1,2,4,8,16… = 2⁰,2¹,2²,2³… Row 3 (1+3+3+1)=8=2³"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: Triangular numbers are always odd. Reason: T3 = 6 which is even.", "A false, R true", "Both true", "A true, R false", "Both false", "A", "Triangular numbers are NOT always odd (T3=6 is even), so assertion is false"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: Adding two odd numbers always gives an even number. Reason: 3 + 5 = 8.", "Both A and R true, R explains A", "A false, R true", "Both false", "A true, R false", "A", "Odd + Odd = Even always. 3+5=8 correctly supports this"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: 100 is both a perfect square and even. Reason: 100 = 10 × 10 and ends in 0.", "Both A and R true, R explains A", "Both true, R does not explain A", "A true, R false", "A false", "B", "Both true but ending in 0 only partially explains evenness"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Assertion: The sequence 2,4,8,16 is a Fibonacci sequence. Reason: Each term doubles.", "A false, R true", "Both true", "A true, R false", "Both false", "A", "This is a geometric sequence (×2), not Fibonacci. Reason about doubling is correct but it is not Fibonacci"),
];

for (const ch of chapters.slice(1)) {
  for (let ws = 1; ws <= 2; ws++) {
    for (let q = 1; q <= 10; q++) {
      mcqLines.push(row(ch.id, ch.title, String(ws), "", "", "", "", "", "", ""));
    }
  }
}

fs.writeFileSync(path.join(outDir, "3_MCQ.csv"), mcqLines.join("\n"), "utf-8");

// ══════════════════════════════════════════════════════════
// 4. QA  (5 per worksheet × 2 worksheets = 10 per chapter)
// ══════════════════════════════════════════════════════════
const qaLines = [
  "# QA TAB — paste into the 'QA' sheet",
  "# Each chapter has 2 worksheets × 5 questions = 10 rows.",
  "# worksheet = 1 or 2",
  "# type = short  (1-3 sentences)  OR  long  (paragraph answer)",
  "#",
  row("chapter_id", "chapter_name", "worksheet", "question", "answer", "type"),
  // Example rows — worksheet 1
  row("6-maths-1", "Patterns in Mathematics", "1", "What is a pattern? Give two examples from daily life.", "A pattern is an arrangement that follows a fixed rule and can be extended. Examples: (1) Days of the week repeat in the pattern Mon, Tue, Wed… (2) Traffic lights follow: Red → Green → Yellow → Red.", "short"),
  row("6-maths-1", "Patterns in Mathematics", "1", "Write the first 6 triangular numbers and show how they are formed.", "Triangular numbers: 1, 3, 6, 10, 15, 21.\nFormed by: T1=1, T2=1+2=3, T3=1+2+3=6, T4=10, T5=15, T6=21.\nFormula: Tn = n(n+1)/2.", "short"),
  row("6-maths-1", "Patterns in Mathematics", "1", "What is the Fibonacci sequence? Write its first 10 terms.", "The Fibonacci sequence starts with 1, 1 and each next term is the sum of the two previous terms.\nFirst 10 terms: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.", "short"),
  row("6-maths-1", "Patterns in Mathematics", "1", "Find the sum of the first 5 odd numbers. What pattern do you notice?", "First 5 odd numbers: 1, 3, 5, 7, 9.\nSum = 1+3+5+7+9 = 25 = 5².\nPattern: Sum of first n odd numbers = n².", "short"),
  row("6-maths-1", "Patterns in Mathematics", "1", "Complete the pattern and state the rule: 3, 6, 12, 24, __, __", "Next terms: 48, 96.\nRule: Each term is multiplied by 2 (geometric sequence, ratio = 2).\n3×2=6, 6×2=12, 12×2=24, 24×2=48, 48×2=96.", "short"),
  // Example rows — worksheet 2
  row("6-maths-1", "Patterns in Mathematics", "2", "Explain with an example how patterns help in multiplication tables.", "Patterns make multiplication easier. For the 9× table: 9, 18, 27, 36, 45…\n(1) Tens digit increases by 1 each time.\n(2) Units digit decreases by 1.\n(3) Sum of digits always = 9.\nThese patterns help us verify without memorising every fact.", "long"),
  row("6-maths-1", "Patterns in Mathematics", "2", "The square numbers are 1, 4, 9, 16, 25. Find the differences between consecutive square numbers. What pattern do you see?", "Differences: 4−1=3, 9−4=5, 16−9=7, 25−16=9.\nDifferences: 3, 5, 7, 9 (consecutive odd numbers).\nExplanation: (n+1)² − n² = 2n+1, which is always odd.\nSo differences between consecutive perfect squares are always consecutive odd numbers.", "long"),
  row("6-maths-1", "Patterns in Mathematics", "2", "What is Pascal's Triangle? Draw the first 5 rows and list 2 patterns.", "Pascal's Triangle: each number = sum of two numbers above it.\nRow 0: 1\nRow 1: 1 1\nRow 2: 1 2 1\nRow 3: 1 3 3 1\nRow 4: 1 4 6 4 1\nPatterns: (1) Each row sums to a power of 2. (2) Triangular numbers appear in the 3rd diagonal.", "long"),
  row("6-maths-1", "Patterns in Mathematics", "2", "Identify and describe two mathematical patterns you observe in nature.", "Pattern 1 — Fibonacci in Flowers: Sunflower seeds spiral in patterns. Counting clockwise and anticlockwise gives consecutive Fibonacci numbers (e.g. 21 and 34). Same in pine cones.\nPattern 2 — Symmetry in Snowflakes: Every snowflake has 6-fold symmetry — rotating by 60° gives the same shape, because of the hexagonal crystal structure of ice.", "long"),
  row("6-maths-1", "Patterns in Mathematics", "2", "How does understanding patterns help in real-life problem solving? Give two examples.", "Example 1 — EMI calculation: If sales are ₹500, ₹1000, ₹1500 (arithmetic, +₹500), we can calculate any month without listing all months.\nExample 2 — Population growth: If population doubles every 10 years (1000, 2000, 4000…), the geometric pattern helps predict future population and plan infrastructure.\nPatterns save time, reduce errors, and allow generalising from specific observations.", "long"),
];

for (const ch of chapters.slice(1)) {
  for (let ws = 1; ws <= 2; ws++) {
    for (let q = 1; q <= 5; q++) {
      qaLines.push(row(ch.id, ch.title, String(ws), "", "", "short"));
    }
  }
}

fs.writeFileSync(path.join(outDir, "4_QA.csv"), qaLines.join("\n"), "utf-8");

// ══════════════════════════════════════════════════════════
// Summary
// ══════════════════════════════════════════════════════════
const noteRows    = chapters.length * 4;
const snippetRows = chapters.length * 8;
const mcqRows     = chapters.length * 20;
const qaRows      = chapters.length * 10;

console.log(`
✅  Templates generated in /templates/

  1_Notes.csv    — ${noteRows} rows    (4 notes per chapter)
  2_Snippets.csv — ${snippetRows} rows   (8 snippets per chapter)
  3_MCQ.csv      — ${mcqRows} rows  (20 MCQ per chapter: 10 per worksheet)
  4_QA.csv       — ${qaRows} rows   (10 Q&A per chapter: 5 per worksheet)

Next steps:
  1. Open Google Sheets → Create new spreadsheet → name it "Nucleus Content"
  2. Create 4 tabs: Notes  Snippets  MCQ  QA
  3. In each tab: File → Import → Upload the matching CSV → Replace current sheet
  4. File → Share → Publish to web → Entire document → CSV → Publish
  5. Copy the Sheet ID from the URL, add to .env.local:
       CONTENT_SHEET_ID=your_id_here
  6. Fill in your content (rows 2 onwards — row 1 is headers)
  7. Run: npm run sync
`);
