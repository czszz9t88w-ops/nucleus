"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import chapters from "@/data/curriculum";

export default function ProgressPage() {
  const [profile, setProfile] = useState<{ name?: string; class?: number }>({});

  useEffect(() => {
    try {
      const p = localStorage.getItem("nucleus_profile");
      if (p) setProfile(JSON.parse(p));
    } catch {}
  }, []);

  const maths6 = chapters.filter(c => c.classNum === 6 && c.subject === "maths");
  const sci6   = chapters.filter(c => c.classNum === 6 && c.subject === "science");
  const maths7 = chapters.filter(c => c.classNum === 7 && c.subject === "maths");
  const sci7   = chapters.filter(c => c.classNum === 7 && c.subject === "science");

  const stats = [
    { label: "Chapters Visited",   val: "0 / 78",  icon: "📖" },
    { label: "Worksheets Done",    val: "0",        icon: "✅" },
    { label: "Questions Answered", val: "0",        icon: "🎯" },
    { label: "Study Streak",       val: "0 days",   icon: "🔥" },
  ];

  const subjects = [
    { label: "Class 6 · Mathematics", chapters: maths6, color: "#7C3AED" },
    { label: "Class 6 · Science",     chapters: sci6,   color: "#06B6D4" },
    { label: "Class 7 · Mathematics", chapters: maths7, color: "#7C3AED" },
    { label: "Class 7 · Science",     chapters: sci7,   color: "#06B6D4" },
  ];

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center gap-3 px-8 py-4 sticky top-0 z-30"
          style={{ background: "rgba(6,7,15,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-white text-sm font-semibold">Progress</span>
          {profile.name && (
            <div className="ml-auto glass px-3 py-1 rounded-full text-xs text-slate-400">{profile.name}</div>
          )}
        </div>

        <div className="px-5 pt-12 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden mb-6">
            <h1 className="text-2xl font-black text-white">Your Progress 📊</h1>
            <p className="text-slate-500 text-xs mt-1">Track your learning journey</p>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:block mb-8">
            <h1 className="text-3xl font-black text-white">Your Progress 📊</h1>
            <p className="text-slate-400 mt-1 text-sm">Track your learning journey across all chapters</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-black text-white text-lg">{s.val}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Subject breakdown — 2-col on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {subjects.map((sub) => (
              <div key={sub.label} className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-bold text-white">{sub.label}</h2>
                  <span className="text-xs text-slate-500">0 / {sub.chapters.length}</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full mb-4">
                  <div className="h-full w-0 rounded-full" style={{ background: `linear-gradient(90deg,${sub.color},${sub.color}88)` }} />
                </div>
                <div className="grid grid-cols-6 gap-1.5">
                  {sub.chapters.map((ch) => (
                    <Link key={ch.id} href={`/chapter/${ch.id}`}
                      className="aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-transform active:scale-90 hover:opacity-80"
                      style={{ background: "rgba(255,255,255,0.05)", color: "#64748B", border: "1px solid rgba(255,255,255,0.06)" }}
                      title={ch.title}>
                      {ch.num}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="glass rounded-2xl p-6 flex items-start gap-4 md:max-w-2xl">
            <span className="text-3xl flex-shrink-0">🚀</span>
            <div>
              <div className="font-bold text-white text-base">Start your first chapter!</div>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">Progress tracking activates once you attempt a worksheet. Go to any chapter and complete a worksheet to see your score here.</p>
              <Link href="/home" className="inline-block mt-4 px-5 py-2 rounded-xl text-sm text-white font-semibold transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                Browse Chapters →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
