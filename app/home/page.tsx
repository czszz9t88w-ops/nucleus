"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import Chatbot from "@/components/Chatbot";
import { getProgress, ProgressData } from "@/lib/progress";

const planets = [
  { num: 6, color: "#7C3AED", icon: "🪐", label: "Class VI",   sub: "10 Maths · 10 Science", book: "Ganita Prakash · Curiosity" },
  { num: 7, color: "#06B6D4", icon: "🌍", label: "Class VII",  sub: "13 Maths · 13 Science", book: "Ganita Prakash · Curiosity" },
  { num: 8, color: "#F59E0B", icon: "🌟", label: "Class VIII", sub: "16 Maths · 16 Science", book: "Ganita Prakash · Curiosity" },
];

export default function HomePage() {
  const [profile, setProfile] = useState<{ name?: string; class?: number }>({});
  const [progress, setProgress] = useState<ProgressData | null>(null);

  useEffect(() => {
    try {
      const p = localStorage.getItem("nucleus_profile");
      if (p) setProfile(JSON.parse(p));
    } catch {}
    setProgress(getProgress());
  }, []);

  const stats = [
    { label: "Chapters Done",      val: String(progress?.chaptersVisited.length ?? 0), icon: "✅" },
    { label: "Study Streak",       val: `${progress?.streak ?? 0} days`,               icon: "🔥" },
    { label: "Worksheets",         val: String(progress?.worksheetsDone.length ?? 0),   icon: "📝" },
    { label: "Questions Answered", val: String(progress?.questionsAnswered ?? 0),        icon: "🎯" },
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
          <div className="glass px-4 py-2 rounded-xl text-xs text-slate-400">NCERT 2026 · Maths &amp; Science</div>
        </div>

        <div className="px-5 pt-12 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden mb-6">
            <p className="text-slate-500 text-sm">Welcome back,</p>
            <h1 className="text-2xl font-black text-white">{profile.name || "Explorer"} 👋</h1>
            <p className="text-slate-400 text-xs mt-1">NCERT 2026 · Maths &amp; Science · Class 6–8</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {stats.map((s, i) => (
              <div key={s.label} className={`glass rounded-2xl p-3 md:p-4 text-center ${i === 3 ? "hidden md:block" : ""}`}>
                <div className="text-xl md:text-2xl mb-1">{s.icon}</div>
                <div className="text-lg md:text-2xl font-black text-white">{s.val}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Class cards */}
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Choose Your Class</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {planets.map((p) => (
              <Link key={p.num} href={`/class/${p.num}`}
                className="glass flex md:flex-col items-center md:items-start gap-4 md:gap-5 p-5 rounded-2xl transition-all active:scale-95 hover:border-purple-500/30 block group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
                  style={{ background:`radial-gradient(circle at 35% 35%,${p.color}cc,${p.color}44)`, boxShadow:`0 0 20px ${p.color}44` }}>
                  {p.icon}
                </div>
                <div className="flex-1 md:flex-none">
                  <div className="font-black text-lg text-white">{p.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{p.sub}</div>
                  <div className="text-xs mt-1 font-medium" style={{ color: p.color }}>{p.book}</div>
                </div>
                <div className="text-slate-600 text-xl md:hidden">›</div>
                <div className="hidden md:block mt-4 text-sm font-semibold transition-colors group-hover:text-purple-300"
                  style={{ color: p.color }}>Explore →</div>
              </Link>
            ))}
          </div>

          {/* Info card */}
          <div className="glass rounded-xl p-4 flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">📚</span>
            <div>
              <div className="text-xs font-semibold text-slate-300">NCERT 2026 Curriculum</div>
              <div className="text-xs text-slate-500 mt-0.5">Ganita Prakash (Maths) · Curiosity (Science) · CBSE aligned</div>
            </div>
          </div>
        </div>
      </div>

      <Chatbot />
      <BottomNav />
    </div>
  );
}
