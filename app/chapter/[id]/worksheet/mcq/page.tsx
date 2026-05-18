"use client";
import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
import { getChapterById } from "@/data/curriculum";
import { getChapterContent, getDefaultContent } from "@/data/content";

export default function MCQPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const content = getChapterContent(id) ?? getDefaultContent(chapter.title);
  const [sheet, setSheet] = useState(0);           // 0 or 1 (worksheet 1 or 2)
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = content.mcq[sheet] ?? [];

  function select(qi: number, oi: number) {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qi]: oi }));
  }

  function submit() {
    if (Object.keys(answers).length < questions.length) return;
    setSubmitted(true);
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  const score = submitted ? questions.filter((q, i) => answers[i] === q.answer).length : 0;
  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="relative min-h-screen pb-20 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      <div className="relative z-10 px-5 pt-10 pb-4 flex items-center gap-3">
        <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-500">MCQ + Assertion–Reason Worksheet</div>
          <h1 className="text-sm font-bold text-white truncate">{chapter.title}</h1>
        </div>
      </div>

      {/* Sheet selector */}
      <div className="relative z-10 px-5 mb-4">
        <div className="flex glass rounded-xl p-1">
          {content.mcq.map((_, i) => (
            <button key={i} onClick={() => { setSheet(i); reset(); }}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
              style={sheet===i ? { background:"linear-gradient(135deg,#7C3AED,#06B6D4)", color:"#fff" } : { color:"#64748B" }}>
              Worksheet {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Score banner (after submit) */}
      {submitted && (
        <div className="relative z-10 px-5 mb-4">
          <div className="rounded-2xl p-4 flex items-center gap-4"
            style={{ background: pct >= 70 ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)", border: `1px solid ${pct >= 70 ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}` }}>
            <div className="text-3xl">{pct >= 70 ? "🏆" : "📚"}</div>
            <div>
              <div className="font-black text-white text-lg">{score}/{questions.length} Correct</div>
              <div className="text-xs" style={{ color: pct >= 70 ? "#4ade80" : "#f87171" }}>
                {pct >= 70 ? "Excellent! Well done." : "Review the explanations below and try again."}
              </div>
            </div>
            <div className="ml-auto text-3xl font-black gradient-text">{pct}%</div>
          </div>
        </div>
      )}

      {/* Questions */}
      <div className="relative z-10 px-5 space-y-4">
        {questions.map((q, qi) => {
          const selected = answers[qi];
          const isCorrect = submitted && selected === q.answer;
          const isWrong   = submitted && selected !== undefined && selected !== q.answer;

          return (
            <div key={qi} className="glass rounded-2xl p-4">
              <div className="flex items-start gap-2 mb-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)", color:"#fff" }}>{qi + 1}</span>
                <p className="text-sm text-slate-200 leading-relaxed">{q.q}</p>
              </div>

              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  let bg = "rgba(255,255,255,0.04)";
                  let border = "rgba(255,255,255,0.08)";
                  let textColor = "#94A3B8";
                  if (selected === oi && !submitted) { bg = "rgba(124,58,237,0.2)"; border = "rgba(124,58,237,0.5)"; textColor = "#E2E8F0"; }
                  if (submitted && oi === q.answer) { bg = "rgba(34,197,94,0.15)"; border = "rgba(34,197,94,0.5)"; textColor = "#4ade80"; }
                  if (submitted && selected === oi && oi !== q.answer) { bg = "rgba(239,68,68,0.15)"; border = "rgba(239,68,68,0.5)"; textColor = "#f87171"; }

                  return (
                    <button key={oi} onClick={() => select(qi, oi)}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all active:scale-98"
                      style={{ background: bg, border: `1px solid ${border}`, color: textColor }}>
                      <span className="font-semibold mr-2">{String.fromCharCode(65+oi)}.</span>{opt}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {submitted && (
                <div className="mt-3 p-3 rounded-xl text-xs"
                  style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
                  <span className="text-yellow-400 font-semibold">Explanation: </span>
                  <span className="text-yellow-200">{q.explanation}</span>
                </div>
              )}
            </div>
          );
        })}

        {/* Submit / Reset button */}
        {!submitted ? (
          <button onClick={submit} disabled={Object.keys(answers).length < questions.length}
            className="w-full py-4 rounded-2xl font-bold text-white disabled:opacity-40 transition-transform active:scale-95"
            style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
            Submit Answers ({Object.keys(answers).length}/{questions.length} answered)
          </button>
        ) : (
          <button onClick={reset}
            className="w-full py-4 rounded-2xl font-bold text-white transition-transform active:scale-95 glass">
            🔄 Try Again
          </button>
        )}
      </div>

      <Chatbot chapterId={id} />
    </div>
  );
}
