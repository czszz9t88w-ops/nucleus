"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import chapters from "@/data/curriculum";
import { getProgress, ProgressData } from "@/lib/progress";

const maths6 = chapters.filter(c => c.classNum === 6 && c.subject === "maths");
const sci6   = chapters.filter(c => c.classNum === 6 && c.subject === "science");
const maths7 = chapters.filter(c => c.classNum === 7 && c.subject === "maths");
const sci7   = chapters.filter(c => c.classNum === 7 && c.subject === "science");
const maths8 = chapters.filter(c => c.classNum === 8 && c.subject === "maths");
const sci8   = chapters.filter(c => c.classNum === 8 && c.subject === "science");

const SUBJECTS = [
  { label: "Class 6 · Mathematics", chapters: maths6, color: "#7C3AED" },
  { label: "Class 6 · Science",     chapters: sci6,   color: "#06B6D4" },
  { label: "Class 7 · Mathematics", chapters: maths7, color: "#7C3AED" },
  { label: "Class 7 · Science",     chapters: sci7,   color: "#06B6D4" },
  { label: "Class 8 · Mathematics", chapters: maths8, color: "#7C3AED" },
  { label: "Class 8 · Science",     chapters: sci8,   color: "#06B6D4" },
];

const TOTAL = chapters.length;

export default function ProgressPage() {
  const [profile, setProfile] = useState<{ name?: string; class?: number }>({});
  const [progress, setProgress] = useState<ProgressData | null>(null);

  useEffect(() => {
    try {
      const p = localStorage.getItem("nucleus_profile");
      if (p) setProfile(JSON.parse(p));
    } catch {}
    setProgress(getProgress());
  }, []);

  const visited = progress?.chaptersVisited ?? [];
  const worksheets = progress?.worksheetsDone ?? [];

  const stats = [
    { label: "Chapters Visited",   val: `${visited.length} / ${TOTAL}`, icon: "📖" },
    { label: "Worksheets Done",    val: String(worksheets.length),       icon: "✅" },
    { label: "Questions Answered", val: String(progress?.questionsAnswered ?? 0), icon: "🎯" },
    { label: "Study Streak",       val: `${progress?.streak ?? 0} days`, icon: "🔥" },
  ];

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden page-bg">
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center gap-3 px-8 py-4 topbar">
          <span className="text-white text-sm font-semibold">Progress</span>
          {profile.name && (
            <div className="ml-auto glass px-3 py-1 rounded-full text-xs" style={{ color: "var(--text-muted)" }}>
              {profile.name}
            </div>
          )}
        </div>

        <div className="px-5 pt-12 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden mb-6">
            <h1 className="text-2xl font-black text-white">Your Progress 📊</h1>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Track your learning journey</p>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:block mb-8">
            <h1 className="text-3xl font-black text-white">Your Progress 📊</h1>
            <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>Track your learning journey across all chapters</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-black text-white text-lg">{s.val}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Subject breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {SUBJECTS.map((sub) => {
              const done = sub.chapters.filter(ch => visited.includes(ch.id)).length;
              const pct = sub.chapters.length ? Math.round((done / sub.chapters.length) * 100) : 0;
              return (
                <div key={sub.label} className="glass rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-bold text-white">{sub.label}</h2>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{done} / {sub.chapters.length}</span>
                  </div>
                  <div className="h-2 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, background: `linear-gradient(90deg,${sub.color},${sub.color}88)` }} />
                  </div>
                  <div className="grid grid-cols-6 gap-1.5">
                    {sub.chapters.map((ch) => {
                      const isVisited = visited.includes(ch.id);
                      return (
                        <Link key={ch.id} href={`/chapter/${ch.id}`}
                          className="aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all active:scale-90 hover:opacity-80"
                          style={isVisited
                            ? { background: `${sub.color}33`, color: sub.color, border: `1px solid ${sub.color}66` }
                            : { background: "rgba(255,255,255,0.05)", color: "var(--text-muted)", border: "1px solid rgba(255,255,255,0.06)" }}
                          title={ch.title}>
                          {ch.num}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA card */}
          {visited.length === 0 && (
            <div className="glass rounded-2xl p-6 flex items-start gap-4 md:max-w-2xl">
              <span className="text-3xl flex-shrink-0">🚀</span>
              <div>
                <div className="font-bold text-white text-base">Start your first chapter!</div>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Visit any chapter to begin tracking your progress. Complete worksheets to see your scores here.
                </p>
                <Link href="/home"
                  className="inline-block mt-4 px-5 py-2 rounded-xl text-sm text-white font-semibold btn-primary transition-opacity hover:opacity-90">
                  Browse Chapters →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
