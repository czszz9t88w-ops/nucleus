"use client";
import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import { getChapterById } from "@/data/curriculum";
import { getChapterContent, getDefaultContent } from "@/data/content";
import { markWorksheetDone } from "@/lib/progress";

export default function QAClient() {
  const { id } = useParams<{ id: string }>();

  // All hooks before any conditional return
  const [sheet, setSheet] = useState(0);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const content = getChapterContent(id) ?? getDefaultContent(chapter.title);
  const questions = content.qa[sheet] ?? [];

  function toggle(i: number) {
    setRevealed((r) => { const n = new Set(r); n.has(i) ? n.delete(i) : n.add(i); return n; });
  }

  function showAll() {
    setRevealed(new Set(questions.map((_, i) => i)));
    markWorksheetDone(id, "qa", sheet, questions.length);
  }

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center gap-3 px-8 py-4 sticky top-0 z-30"
          style={{ background: "rgba(6,7,15,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href={`/chapter/${id}`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            Ch {chapter.num}: {chapter.title}
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-white text-sm font-semibold">Q&amp;A Worksheet</span>
          <div className="ml-auto glass px-3 py-1 rounded-full text-xs text-slate-400">{questions.length} questions</div>
        </div>

        <div className="px-5 pt-10 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-slate-500">Q&amp;A Worksheet</div>
              <h1 className="text-sm font-bold text-white truncate">{chapter.title}</h1>
            </div>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:block mb-6">
            <h1 className="text-2xl font-black text-white">{chapter.emoji} {chapter.title}</h1>
            <p className="text-slate-500 mt-1 text-sm">Q&amp;A Worksheet · Write your answer first, then reveal</p>
          </div>

          {/* Sheet selector */}
          <div className="flex glass rounded-xl p-1 mb-5 md:max-w-xs">
            {content.qa.map((_, i) => (
              <button key={i} onClick={() => { setSheet(i); setRevealed(new Set()); }}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                style={sheet === i ? { background: "linear-gradient(135deg,#7C3AED,#06B6D4)", color: "#fff" } : { color: "#64748B" }}>
                Worksheet {i + 1}
              </button>
            ))}
          </div>

          {/* Empty state */}
          {questions.length === 0 && (
            <div className="md:max-w-3xl glass rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="font-black text-white text-base mb-2">Worksheet coming soon</h3>
              <p className="text-slate-500 text-sm">Questions for this worksheet are being prepared. Check back soon!</p>
            </div>
          )}

          <div className="md:max-w-3xl">
            {/* Show all controls */}
            {questions.length > 0 && (
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-slate-500">Write your answer first, then reveal</p>
                <button onClick={showAll} className="text-xs text-purple-400 hover:text-purple-300 transition-colors underline">
                  Show All
                </button>
              </div>
            )}

            {/* Questions */}
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)", color: "#fff" }}>{i + 1}</span>
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
                      color: revealed.has(i) ? "#A855F7" : "#64748B",
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

              <div className="glass rounded-2xl p-5 flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">💡</span>
                <p className="text-sm text-slate-400 leading-relaxed">Write your own answer before revealing. Compare and note any missing points. Use the AI chatbot for further explanation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chatbot chapterId={id} />
      <BottomNav />
    </div>
  );
}
