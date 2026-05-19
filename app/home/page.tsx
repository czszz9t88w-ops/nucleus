"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import Chatbot from "@/components/Chatbot";
import { getProgress, ProgressData } from "@/lib/progress";
import { getChapterById } from "@/data/curriculum";

const planets = [
  { num: 6, color: "#7C3AED", icon: "🪐", label: "Class VI",   total: 20, sub: "10 Maths · 10 Science" },
  { num: 7, color: "#06B6D4", icon: "🌍", label: "Class VII",  total: 26, sub: "13 Maths · 13 Science" },
  { num: 8, color: "#F59E0B", icon: "🌟", label: "Class VIII", total: 32, sub: "16 Maths · 16 Science" },
];

const tips = [
  "Attempt the MCQ worksheet first — it shows you gaps before you study.",
  "Flashcard snippets are perfect for 5-minute revision before class.",
  "Read the Q&A model answers carefully — examiners look for exact keywords.",
  "A 25-minute focused session beats 2 hours of distracted study.",
  "Complete both worksheets per chapter for maximum exam confidence.",
];

export default function HomePage() {
  const [profile, setProfile] = useState<{ name?: string; class?: number }>({});
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [tip] = useState(() => tips[Math.floor(Math.random() * tips.length)]);

  useEffect(() => {
    try {
      const p = localStorage.getItem("nucleus_profile");
      if (p) setProfile(JSON.parse(p));
    } catch {}
    setProgress(getProgress());
  }, []);

  const visited = progress?.chaptersVisited ?? [];
  const lastChapterId = visited[visited.length - 1];
  const lastChapter = lastChapterId ? getChapterById(lastChapterId) : null;
  const subjectColor = lastChapter?.subject === "science" ? "#06B6D4" : "#7C3AED";

  const stats = [
    { label: "Chapters",   val: String(visited.length), icon: "📖", color: "#7C3AED" },
    { label: "Streak",     val: `${progress?.streak ?? 0}d`, icon: "🔥", color: "#F59E0B" },
    { label: "Worksheets", val: String(progress?.worksheetsDone.length ?? 0), icon: "✅", color: "#06B6D4" },
    { label: "Q Solved",   val: String(progress?.questionsAnswered ?? 0), icon: "🎯", color: "#10B981" },
  ];

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center justify-between px-8 py-4 sticky top-0 z-30"
          style={{ background: "rgba(6,7,15,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <p className="text-slate-500 text-xs">Dashboard</p>
            <h1 className="text-lg font-black text-white">Welcome back, {profile.name || "Explorer"} 👋</h1>
          </div>
          <div className="flex items-center gap-3">
            {(progress?.streak ?? 0) > 0 && (
              <div className="glass px-3 py-1.5 rounded-xl text-sm font-bold text-amber-400">🔥 {progress?.streak}-day streak</div>
            )}
            <div className="glass px-4 py-2 rounded-xl text-xs text-slate-400">NCERT 2026 · Maths &amp; Science</div>
          </div>
        </div>

        <div className="px-5 pt-12 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden mb-5">
            <p className="text-slate-400 text-sm">Hello,</p>
            <h1 className="text-2xl font-black text-white">{profile.name || "Explorer"} 👋</h1>
            {(progress?.streak ?? 0) > 0 && (
              <div className="inline-flex items-center gap-1.5 mt-2 glass px-3 py-1 rounded-full">
                <span className="text-sm">🔥</span>
                <span className="text-xs font-bold text-amber-400">{progress?.streak}-day streak!</span>
              </div>
            )}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-5">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-3 md:p-4 text-center">
                <div className="text-lg md:text-2xl mb-0.5">{s.icon}</div>
                <div className="text-base md:text-xl font-black text-white">{s.val}</div>
                <div className="text-xs text-slate-600 mt-0.5 hidden md:block">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Continue Learning card */}
          {lastChapter && (
            <div className="mb-5">
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Continue Learning</h2>
              <Link href={`/chapter/${lastChapter.id}`}
                className="glass rounded-2xl p-5 flex items-center gap-4 transition-all active:scale-95 hover:border-purple-500/30 group block"
                style={{ borderColor: `${subjectColor}33` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${subjectColor}22`, border: `1px solid ${subjectColor}44` }}>
                  {lastChapter.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold mb-0.5" style={{ color: subjectColor }}>
                    Class {lastChapter.classNum} · {lastChapter.subject === "maths" ? "Mathematics" : "Science"} · Chapter {lastChapter.num}
                  </div>
                  <div className="font-black text-white text-sm md:text-base truncate">{lastChapter.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Tap to continue →</div>
                </div>
                <div className="text-2xl text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0">›</div>
              </Link>
            </div>
          )}

          {/* Class cards */}
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            {lastChapter ? "All Classes" : "Start Learning"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            {planets.map((p) => {
              const classVisited = visited.filter((id) => id.startsWith(`${p.num}-`)).length;
              const pct = Math.round((classVisited / p.total) * 100);
              return (
                <Link key={p.num} href={`/class/${p.num}`}
                  className="glass flex md:flex-col items-center md:items-start gap-4 md:gap-4 p-4 md:p-5 rounded-2xl transition-all active:scale-95 hover:border-purple-500/30 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
                    style={{ background:`radial-gradient(circle at 35% 35%,${p.color}cc,${p.color}44)`, boxShadow:`0 0 20px ${p.color}33` }}>
                    {p.icon}
                  </div>
                  <div className="flex-1 md:flex-none md:w-full">
                    <div className="font-black text-base md:text-lg text-white">{p.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{p.sub}</div>
                    <div className="mt-2 h-1 bg-slate-800 rounded-full">
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${pct}%`, background: `linear-gradient(90deg,${p.color},${p.color}88)` }} />
                    </div>
                    <div className="text-xs text-slate-600 mt-1">{classVisited}/{p.total} chapters</div>
                  </div>
                  <div className="text-slate-600 text-xl md:hidden">›</div>
                </Link>
              );
            })}
          </div>

          {/* Daily tip */}
          <div className="glass rounded-2xl p-4 flex items-start gap-3">
            <span className="text-xl flex-shrink-0">💡</span>
            <div>
              <div className="text-xs font-semibold text-slate-300 mb-0.5">Study Tip</div>
              <p className="text-xs text-slate-400 leading-relaxed">{tip}</p>
            </div>
          </div>
        </div>
      </div>

      <Chatbot />
      <BottomNav />
    </div>
  );
}
