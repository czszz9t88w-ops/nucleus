"use client";
import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Stars from "@/components/Stars";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import { getChapterById, getNextChapterId } from "@/data/curriculum";
import { getChapterContent, getDefaultContent } from "@/data/content";
import { markWorksheetDone } from "@/lib/progress";

export default function QAClient() {
  const { id } = useParams<{ id: string }>();

  const [sheet, setSheet] = useState(0);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const content = getChapterContent(id) ?? getDefaultContent(chapter.title);
  const questions = content.qa[sheet] ?? [];
  const nextId = getNextChapterId(id);

  function toggle(i: number) {
    setRevealed((r) => { const n = new Set(r); n.has(i) ? n.delete(i) : n.add(i); return n; });
  }

  function showAll() {
    setRevealed(new Set(questions.map((_, i) => i)));
    markWorksheetDone(id, "qa", sheet, questions.length);
  }

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden page-bg">
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center gap-3 px-8 py-4 topbar">
          <Link href={`/chapter/${id}`} className="text-sm transition-colors hover:text-slate-300" style={{ color: "var(--text-muted)" }}>
            Ch {chapter.num}: {chapter.title}
          </Link>
          <span style={{ color: "var(--text-dimmer)" }}>/</span>
          <span className="text-white text-sm font-semibold">Q&amp;A Worksheet</span>
          <div className="ml-auto glass px-3 py-1 rounded-full text-xs" style={{ color: "var(--text-muted)" }}>
            {questions.length} questions
          </div>
        </div>

        <div className="px-5 pt-10 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
            <div className="flex-1 min-w-0">
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Q&amp;A Worksheet</div>
              <h1 className="text-sm font-bold text-white truncate">{chapter.title}</h1>
            </div>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:block mb-6">
            <h1 className="text-2xl font-black text-white">{chapter.emoji} {chapter.title}</h1>
            <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>Q&amp;A Worksheet · Write your answer first, then reveal</p>
          </div>

          {/* Sheet selector */}
          <div className="flex glass rounded-xl p-1 mb-5 md:max-w-xs">
            {(["Elementary", "Advanced"] as const).map((label, i) => (
              <button key={i} onClick={() => { setSheet(i); setRevealed(new Set()); }}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                style={sheet === i ? { background: "var(--gradient-primary)", color: "#fff" } : { color: "var(--text-muted)" }}>
                {label}
              </button>
            ))}
          </div>

          {/* Empty state */}
          {questions.length === 0 && (
            <div className="md:max-w-3xl glass rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="font-black text-white text-base mb-2">Worksheet coming soon</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Questions for this worksheet are being prepared. Check back soon!
              </p>
            </div>
          )}

          <div className="md:max-w-3xl">
            {/* Show all controls */}
            {questions.length > 0 && (
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>Write your answer first, then reveal</p>
                <button onClick={showAll} className="text-xs text-purple-400 hover:text-purple-300 transition-colors underline">
                  Show All
                </button>
              </div>
            )}

            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 gradient-bg text-white">{i + 1}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs glass px-2 py-0.5 rounded-full"
                            style={{ color: q.type === "long" ? "#F59E0B" : "#06B6D4" }}>
                            {q.type === "long" ? "Long Answer" : "Short Answer"}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-slate-200 leading-relaxed">{q.q}</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => toggle(i)}
                    className="w-full px-5 py-3 flex items-center justify-between text-xs font-semibold transition-colors"
                    style={{
                      background: revealed.has(i) ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      color: revealed.has(i) ? "#A855F7" : "var(--text-muted)",
                    }}>
                    <span>{revealed.has(i) ? "▲ Hide Answer" : "▼ Reveal Answer"}</span>
                  </button>
                  {revealed.has(i) && (
                    <div className="px-5 pb-5 pt-4" style={{ borderTop: "1px solid rgba(124,58,237,0.2)" }}>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed whitespace-pre-line">{q.a}</p>
                    </div>
                  )}
                </div>
              ))}

              {questions.length > 0 && (
                <div className="glass rounded-2xl p-5 flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">💡</span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Write your own answer before revealing. Compare and note any missing points.
                  </p>
                </div>
              )}

              {/* Always-visible navigation */}
              <div className="flex gap-3">
                <Link href={`/chapter/${id}`}
                  className="flex-1 py-3.5 rounded-2xl font-semibold text-sm text-center glass text-slate-400 hover:text-slate-200 transition-colors">
                  ← Back to Chapter
                </Link>
                {nextId && (
                  <Link href={`/chapter/${nextId}`}
                    className="flex-1 py-3.5 rounded-2xl font-bold text-sm text-center text-white btn-primary">
                    Next Chapter →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
