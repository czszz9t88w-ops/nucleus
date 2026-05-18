"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";

const planets = [
  { num: 6, color: "#7C3AED", glow: "#7C3AED", icon: "🪐", label: "Class VI", sub: "10 Maths · 10 Science" },
  { num: 7, color: "#06B6D4", glow: "#06B6D4", icon: "🌍", label: "Class VII", sub: "13 Maths · 13 Science" },
  { num: 8, color: "#F59E0B", glow: "#F59E0B", icon: "🌟", label: "Class VIII", sub: "16 Maths · 16 Science" },
];

export default function HomePage() {
  const [profile, setProfile] = useState<{ name?: string; class?: number }>({});

  useEffect(() => {
    try {
      const p = localStorage.getItem("nucleus_profile");
      if (p) setProfile(JSON.parse(p));
    } catch {}
  }, []);

  return (
    <div className="relative min-h-screen pb-24 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      {/* Header */}
      <div className="relative z-10 px-5 pt-12 pb-6">
        <p className="text-slate-500 text-sm">Welcome back,</p>
        <h1 className="text-2xl font-black text-white">{profile.name || "Explorer"} 👋</h1>
        <p className="text-slate-400 text-xs mt-1">NCERT 2026 · Maths &amp; Science · Class 6–8</p>
      </div>

      {/* Stats row */}
      <div className="relative z-10 px-5 mb-8">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Chapters Done", val: "0", icon: "✅" },
            { label: "Streak", val: "0 days", icon: "🔥" },
            { label: "Worksheets", val: "0", icon: "📝" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-3 text-center">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="text-lg font-black text-white">{s.val}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Choose your class */}
      <div className="relative z-10 px-5">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Choose Your Class</h2>
        <div className="space-y-4">
          {planets.map((p, i) => (
            <Link key={p.num} href={`/class/${p.num}`}
              className="glass flex items-center gap-4 p-5 rounded-2xl transition-transform active:scale-95 block"
              style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Planet icon with glow */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: `radial-gradient(circle at 35% 35%, ${p.color}cc, ${p.color}44)`, boxShadow: `0 0 20px ${p.glow}44` }}>
                {p.icon}
              </div>
              <div className="flex-1">
                <div className="font-black text-lg text-white">{p.label}</div>
                <div className="text-xs text-slate-400">{p.sub}</div>
                <div className="text-xs mt-1" style={{ color: p.color }}>Ganita Prakash · Curiosity 2026</div>
              </div>
              <div className="text-slate-600 text-xl">›</div>
            </Link>
          ))}
        </div>

        {/* Book label */}
        <div className="mt-6 glass rounded-xl p-4 flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">📚</span>
          <div>
            <div className="text-xs font-semibold text-slate-300">NCERT 2026 Curriculum</div>
            <div className="text-xs text-slate-500 mt-0.5">Ganita Prakash (Maths) · Curiosity (Science) · CBSE aligned</div>
          </div>
        </div>
      </div>

      <Chatbot />
      <BottomNav />
    </div>
  );
}
