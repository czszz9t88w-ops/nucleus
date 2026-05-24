"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import { getProgress, ProgressData } from "@/lib/progress";
import { getChapterById } from "@/data/curriculum";

const classes = [
  { num: 6, color: "#7C3AED", icon: "🪐", label: "Class VI",   total: 20, sub: "10 Maths · 10 Science" },
  { num: 7, color: "#06B6D4", icon: "🌍", label: "Class VII",  total: 26, sub: "13 Maths · 13 Science" },
  { num: 8, color: "#F59E0B", icon: "🌟", label: "Class VIII", total: 32, sub: "16 Maths · 16 Science" },
];

const tips = [
  "Attempt the MCQ worksheet first — it shows you gaps before you study.",
  "After each worksheet, review wrong answers — understanding mistakes is the fastest way to improve.",
  "Read the Q&A model answers carefully — examiners look for exact keywords.",
  "A 25-minute focused session beats 2 hours of distracted study.",
  "Complete both worksheets per chapter for maximum exam confidence.",
  "Review your weakest chapters first — targeted study beats re-reading everything.",
];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

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
    { label: "Worksheets", val: String(progress?.worksheetsDone.length ?? 0), icon: "✅", color: "#10B981" },
    { label: "Q Solved",   val: String(progress?.questionsAnswered ?? 0), icon: "🎯", color: "#06B6D4" },
  ];

  const isFirstTime = visited.length === 0 && !lastChapter;

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden page-bg">
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center justify-between px-8 py-3.5 topbar">
          <div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>{getGreeting()},</p>
            <h1 className="text-base font-black text-white">{profile.name || "Explorer"} 👋</h1>
          </div>
          <div className="flex items-center gap-2.5">
            {(progress?.streak ?? 0) > 0 && (
              <div className="glass px-3 py-1.5 rounded-xl text-sm font-bold text-amber-400">
                🔥 {progress?.streak}-day streak
              </div>
            )}
            <div className="glass px-3 py-1.5 rounded-xl text-xs" style={{ color: "var(--text-muted)" }}>NCERT 2026</div>
            <Link href="/setup"
              className="w-8 h-8 glass rounded-xl flex items-center justify-center text-sm transition-colors"
              style={{ color: "var(--text-muted)" }}>
              ⚙️
            </Link>
          </div>
        </div>

        <div className="px-5 pt-10 md:px-8 md:pt-8 max-w-5xl">

          {/* Mobile header */}
          <div className="md:hidden mb-5">
            <p className="text-slate-500 text-sm">{getGreeting()},</p>
            <h1 className="text-2xl font-black text-white">{profile.name || "Explorer"} 👋</h1>
            {(progress?.streak ?? 0) > 0 && (
              <div className="inline-flex items-center gap-1.5 mt-2 glass px-3 py-1 rounded-full">
                <span className="text-sm">🔥</span>
                <span className="text-xs font-bold text-amber-400">{progress?.streak}-day streak!</span>
              </div>
            )}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="glass-card p-3 md:p-4 text-center rounded-2xl">
                <div className="text-lg md:text-xl mb-0.5">{s.icon}</div>
                <div className="text-lg md:text-2xl font-black text-white">{s.val}</div>
                <div className="text-[10px] mt-0.5 hidden md:block" style={{ color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Continue Learning card */}
          {lastChapter && (
            <div className="mb-6">
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                Continue Learning
              </h2>
              <Link href={`/chapter/${lastChapter.id}`}
                className="glass-card p-5 flex items-center gap-4 transition-all active:scale-[0.98] group block rounded-2xl"
                style={{ borderColor: `${subjectColor}44` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${subjectColor}18`, border: `1px solid ${subjectColor}44` }}>
                  {lastChapter.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold mb-0.5 uppercase tracking-wide" style={{ color: subjectColor }}>
                    Class {lastChapter.classNum} · {lastChapter.subject === "maths" ? "Mathematics" : "Science"} · Ch {lastChapter.num}
                  </div>
                  <div className="font-black text-white text-sm md:text-base truncate">{lastChapter.title}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Tap to continue →</div>
                </div>
                <div className="text-2xl flex-shrink-0 transition-colors group-hover:text-slate-400" style={{ color: "var(--text-muted)" }}>›</div>
              </Link>
            </div>
          )}

          {/* First-time empty state */}
          {isFirstTime && (
            <div className="mb-6 glass-card rounded-2xl p-6 text-center"
              style={{ borderColor: "rgba(124,58,237,0.25)" }}>
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-black text-white text-base mb-1.5">Ready to start?</h3>
              <p className="text-sm mb-4 max-w-xs mx-auto" style={{ color: "var(--text-muted)" }}>
                Pick a class below and open your first chapter. Your progress is saved automatically.
              </p>
              <Link href="/class/6" className="btn-primary inline-block px-6 py-2.5 rounded-xl text-sm">
                Start with Class 6 →
              </Link>
            </div>
          )}

          {/* Class cards */}
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
            {lastChapter ? "All Classes" : "Choose a Class"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {classes.map((c) => {
              const classVisited = visited.filter((id) => id.startsWith(`${c.num}-`)).length;
              const pct = Math.round((classVisited / c.total) * 100);
              return (
                <Link key={c.num} href={`/class/${c.num}`}
                  className="glass-card flex md:flex-col items-center md:items-start gap-4 p-4 md:p-5 rounded-2xl transition-all active:scale-[0.98] group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
                    style={{ background: `${c.color}18`, border: `1px solid ${c.color}33`, boxShadow: `0 0 20px ${c.color}18` }}>
                    {c.icon}
                  </div>
                  <div className="flex-1 md:flex-none md:w-full min-w-0">
                    <div className="font-black text-base md:text-lg text-white">{c.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{c.sub}</div>
                    <div className="mt-2.5 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${pct}%`, background: `linear-gradient(90deg,${c.color},${c.color}88)` }} />
                    </div>
                    <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{classVisited}/{c.total} chapters</div>
                  </div>
                  <div className="text-xl md:hidden flex-shrink-0" style={{ color: "var(--text-muted)" }}>›</div>
                </Link>
              );
            })}
          </div>

          {/* Subject shortcuts */}
          <h2 className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
            Quick Jump
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
            {[6,7,8].flatMap(cls => [
              { href: `/subject/${cls}/maths`,  icon: "🔢", label: `${cls}M` },
              { href: `/subject/${cls}/science`, icon: "🔬", label: `${cls}S` },
            ]).map(item => (
              <Link key={item.href} href={item.href}
                className="glass-card rounded-xl p-3 text-center group transition-all active:scale-95">
                <div className="text-xl mb-1">{item.icon}</div>
                <div className="text-[11px] font-bold text-slate-400">{item.label}</div>
              </Link>
            ))}
          </div>

          {/* Daily tip */}
          <div className="glass-card rounded-2xl p-4 flex items-start gap-3 mb-2">
            <span className="text-xl flex-shrink-0 mt-0.5">💡</span>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wide mb-0.5 text-slate-400">Study Tip</div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{tip}</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
