"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import chapters from "@/data/curriculum";

export default function ProgressPage() {
  const [profile, setProfile] = useState<{ name?: string; class?: number }>({});

  useEffect(() => {
    try {
      const p = localStorage.getItem("nucleus_profile");
      if (p) setProfile(JSON.parse(p));
    } catch {}
  }, []);

  const maths6 = chapters.filter(c => c.classNum===6 && c.subject==="maths");
  const sci6   = chapters.filter(c => c.classNum===6 && c.subject==="science");

  return (
    <div className="relative min-h-screen pb-24 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      <div className="relative z-10 px-5 pt-12 pb-6">
        <h1 className="text-2xl font-black text-white">Your Progress 📊</h1>
        <p className="text-slate-500 text-xs mt-1">Track your learning journey</p>
      </div>

      <div className="relative z-10 px-5 space-y-4">
        {/* Overall stats */}
        <div className="glass rounded-2xl p-5">
          <h2 className="font-bold text-white mb-4">Overview</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Chapters Visited", val: "0 / 78", icon: "📖" },
              { label: "Worksheets Done", val: "0", icon: "✅" },
              { label: "Questions Answered", val: "0", icon: "🎯" },
              { label: "Study Streak", val: "0 days", icon: "🔥" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-3 text-center">
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="font-black text-white text-sm">{s.val}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject breakdown */}
        {[
          { label: "Class 6 — Mathematics", chapters: maths6, color: "#7C3AED" },
          { label: "Class 6 — Science",     chapters: sci6,   color: "#06B6D4" },
        ].map((sub) => (
          <div key={sub.label} className="glass rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-white">{sub.label}</h2>
              <span className="text-xs text-slate-500">0 / {sub.chapters.length}</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full mb-3">
              <div className="h-full w-0 rounded-full" style={{ background: `linear-gradient(90deg,${sub.color},${sub.color}88)` }} />
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {sub.chapters.map((ch) => (
                <Link key={ch.id} href={`/chapter/${ch.id}`}
                  className="aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-transform active:scale-90"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#64748B", border: "1px solid rgba(255,255,255,0.06)" }}
                  title={ch.title}>
                  {ch.num}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="glass rounded-2xl p-4 flex items-start gap-3">
          <span className="text-2xl">🚀</span>
          <div>
            <div className="text-sm font-semibold text-white">Start your first chapter!</div>
            <p className="text-xs text-slate-500 mt-1">Progress tracking activates once you attempt a worksheet. Go to any chapter and complete a worksheet to see your score here.</p>
            <Link href="/home" className="inline-block mt-3 px-4 py-2 rounded-xl text-xs text-white font-semibold"
              style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
              Browse Chapters →
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
