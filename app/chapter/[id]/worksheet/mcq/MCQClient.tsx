"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import { getChapterById } from "@/data/curriculum";
import { getChapterContent, getDefaultContent } from "@/data/content";
import { markWorksheetDone } from "@/lib/progress";

export default function MCQClient() {
  const { id } = useParams<{ id: string }>();

  // All hooks before any conditional return
  const [sheet, setSheet] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const content = getChapterContent(id) ?? getDefaultContent(chapter.title);
  const questions = content.mcq[sheet] ?? [];

  function select(qi: number, oi: number) {
    if (submitted) return;
    setAnswers(a => ({ ...a, [qi]: oi }));
  }

  function submit() {
    if (Object.keys(answers).length < questions.length) return;
    setSubmitted(true);
    const correct = questions.filter((q, i) => answers[i] === q.answer).length;
    markWorksheetDone(id, "mcq", sheet, correct);
  }

  function reset() { setAnswers({}); setSubmitted(false); }

  const score = submitted ? questions.filter((q, i) => answers[i] === q.answer).length : 0;
  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden"
      style={{ background:"radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center gap-3 px-8 py-4 sticky top-0 z-30"
          style={{ background:"rgba(6,7,15,0.85)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <Link href={`/chapter/${id}`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            Ch {chapter.num}: {chapter.title}
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-white text-sm font-semibold">MCQ Worksheet</span>
          {submitted && (
            <div className="ml-auto glass px-3 py-1 rounded-full text-xs font-bold"
              style={{ color: pct >= 70 ? "#4ade80" : "#f87171" }}>
              {score}/{questions.length} · {pct}%
            </div>
          )}
        </div>

        <div className="px-5 pt-10 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-slate-500">MCQ + Assertion–Reason Worksheet</div>
              <h1 className="text-sm font-bold text-white truncate">{chapter.title}</h1>
            </div>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:block mb-6">
            <h1 className="text-2xl font-black text-white">{chapter.emoji} {chapter.title}</h1>
            <p className="text-slate-500 mt-1 text-sm">MCQ + Assertion–Reason Worksheet</p>
          </div>

          {/* Sheet selector */}
          <div className="flex glass rounded-xl p-1 mb-5 md:max-w-xs">
            {content.mcq.map((_, i) => (
              <button key={i} onClick={() => { setSheet(i); reset(); }}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                style={sheet===i ? { background:"linear-gradient(135deg,#7C3AED,#06B6D4)", color:"#fff" } : { color:"#64748B" }}>
                Worksheet {i + 1}
              </button>
            ))}
          </div>

          {/* Score banner */}
          {submitted && (
            <div className="rounded-2xl p-4 flex items-center gap-4 mb-5 md:max-w-3xl"
              style={{ background: pct>=70 ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)", border:`1px solid ${pct>=70 ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}` }}>
              <div className="text-4xl">{pct >= 70 ? "🏆" : "📚"}</div>
              <div>
                <div className="font-black text-white text-xl">{score}/{questions.length} Correct</div>
                <div className="text-sm" style={{ color: pct>=70 ? "#4ade80" : "#f87171" }}>
                  {pct >= 70 ? "Excellent! Well done." : "Review the explanations and try again."}
                </div>
              </div>
              <div className="ml-auto text-4xl font-black gradient-text">{pct}%</div>
            </div>
          )}

          {/* Questions */}
          <div className="md:max-w-3xl space-y-4">
            {questions.map((q, qi) => {
              const selected = answers[qi];
              return (
                <div key={qi} className="glass rounded-2xl p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)", color:"#fff" }}>{qi+1}</span>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">{q.q}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {q.options.map((opt, oi) => {
                      let bg = "rgba(255,255,255,0.04)", border = "rgba(255,255,255,0.08)", col = "#94A3B8";
                      if (selected===oi && !submitted) { bg="rgba(124,58,237,0.2)"; border="rgba(124,58,237,0.5)"; col="#E2E8F0"; }
                      if (submitted && oi===q.answer) { bg="rgba(34,197,94,0.15)"; border="rgba(34,197,94,0.5)"; col="#4ade80"; }
                      if (submitted && selected===oi && oi!==q.answer) { bg="rgba(239,68,68,0.15)"; border="rgba(239,68,68,0.5)"; col="#f87171"; }
                      return (
                        <button key={oi} onClick={() => select(qi, oi)}
                          className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all hover:opacity-90"
                          style={{ background:bg, border:`1px solid ${border}`, color:col }}>
                          <span className="font-semibold mr-2">{String.fromCharCode(65+oi)}.</span>{opt}
                        </button>
                      );
                    })}
                  </div>
                  {submitted && (
                    <div className="mt-4 p-3 rounded-xl text-sm"
                      style={{ background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.2)" }}>
                      <span className="text-yellow-400 font-semibold">Explanation: </span>
                      <span className="text-yellow-200">{q.explanation}</span>
                    </div>
                  )}
                </div>
              );
            })}

            {!submitted ? (
              <button onClick={submit} disabled={Object.keys(answers).length < questions.length}
                className="w-full py-4 rounded-2xl font-bold text-white disabled:opacity-40 transition-all active:scale-95 hover:opacity-90"
                style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                Submit Answers ({Object.keys(answers).length}/{questions.length} answered)
              </button>
            ) : (
              <button onClick={reset} className="w-full py-4 rounded-2xl font-bold text-white transition-all active:scale-95 glass hover:border-slate-500/50">
                🔄 Try Again
              </button>
            )}
          </div>
        </div>
      </div>

      <Chatbot chapterId={id} />
      <BottomNav />
    </div>
  );
}
