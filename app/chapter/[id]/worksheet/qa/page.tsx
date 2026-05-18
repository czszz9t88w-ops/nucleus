"use client";
import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
import { getChapterById } from "@/data/curriculum";
import { getChapterContent, getDefaultContent } from "@/data/content";

export default function QAPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const content = getChapterContent(id) ?? getDefaultContent(chapter.title);
  const [sheet, setSheet] = useState(0);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const questions = content.qa[sheet] ?? [];

  function toggle(i: number) {
    setRevealed((r) => { const n = new Set(r); n.has(i) ? n.delete(i) : n.add(i); return n; });
  }

  return (
    <div className="relative min-h-screen pb-20 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      <div className="relative z-10 px-5 pt-10 pb-4 flex items-center gap-3">
        <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-500">Q&amp;A Worksheet</div>
          <h1 className="text-sm font-bold text-white truncate">{chapter.title}</h1>
        </div>
      </div>

      {/* Sheet selector */}
      <div className="relative z-10 px-5 mb-4">
        <div className="flex glass rounded-xl p-1">
          {content.qa.map((_, i) => (
            <button key={i} onClick={() => { setSheet(i); setRevealed(new Set()); }}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
              style={sheet===i ? { background:"linear-gradient(135deg,#7C3AED,#06B6D4)", color:"#fff" } : { color:"#64748B" }}>
              Worksheet {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 px-5 mb-3 flex items-center justify-between">
        <p className="text-xs text-slate-500">Write your answer first, then reveal</p>
        <button onClick={() => setRevealed(new Set(questions.map((_,i)=>i)))}
          className="text-xs text-purple-400 underline">Show All</button>
      </div>

      <div className="relative z-10 px-5 space-y-4">
        {questions.map((q, i) => (
          <div key={i} className="glass rounded-2xl overflow-hidden">
            {/* Question */}
            <div className="p-4">
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)", color:"#fff" }}>{i+1}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs glass px-2 py-0.5 rounded-full"
                      style={{ color: q.type==="long" ? "#F59E0B" : "#06B6D4" }}>
                      {q.type==="long" ? "Long Answer" : "Short Answer"}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">{q.q}</p>
                </div>
              </div>
            </div>

            {/* Answer toggle */}
            <button onClick={() => toggle(i)}
              className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold transition-colors"
              style={{
                background: revealed.has(i) ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                color: revealed.has(i) ? "#A855F7" : "#64748B",
              }}>
              {revealed.has(i) ? "▲ Hide Answer" : "▼ Reveal Answer"}
            </button>

            {/* Answer */}
            {revealed.has(i) && (
              <div className="px-4 pb-4 pt-3" style={{ borderTop: "1px solid rgba(124,58,237,0.2)" }}>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{q.a}</p>
              </div>
            )}
          </div>
        ))}

        <div className="glass rounded-2xl p-4 flex items-start gap-3">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="text-xs text-slate-400">Write your own answer before revealing. Compare and note any missing points. Use the AI chatbot below for further explanation.</p>
        </div>
      </div>

      <Chatbot chapterId={id} />
    </div>
  );
}
