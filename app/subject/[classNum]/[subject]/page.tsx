"use client";
import { use } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";
import { getChapters, type ClassNum, type Subject } from "@/data/curriculum";

const subjectColor: Record<Subject, string> = { maths: "#7C3AED", science: "#06B6D4" };
const subjectIcon:  Record<Subject, string> = { maths: "🔢", science: "🔬" };

export default function SubjectPage({ params }: { params: Promise<{ classNum: string; subject: string }> }) {
  const { classNum, subject } = use(params);
  const cls = parseInt(classNum) as ClassNum;
  const sub = subject as Subject;
  const chapters = getChapters(cls, sub);
  const color = subjectColor[sub];

  return (
    <div className="relative min-h-screen pb-24 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      {/* Header */}
      <div className="relative z-10 px-5 pt-12 pb-4 flex items-center gap-3">
        <Link href={`/class/${cls}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{subjectIcon[sub]}</span>
            <h1 className="text-2xl font-black text-white capitalize">{sub === "maths" ? "Mathematics" : "Science"}</h1>
          </div>
          <p className="text-xs mt-0.5" style={{ color }}>Class {cls} · {chapters.length} Chapters · NCERT 2026</p>
        </div>
      </div>

      {/* Chapter list */}
      <div className="relative z-10 px-5">
        <h2 className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">All Chapters</h2>
        <div className="space-y-2">
          {chapters.map((ch) => (
            <Link key={ch.id} href={`/chapter/${ch.id}`}
              className="glass flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all active:scale-95 block hover:border-purple-500/30">
              {/* Chapter number badge */}
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0"
                style={{ background:`${color}22`, color, border:`1px solid ${color}33` }}>
                {ch.num}
              </div>
              <span className="text-lg flex-shrink-0">{ch.emoji}</span>
              <span className="flex-1 text-sm font-medium text-slate-200">{ch.title}</span>
              {/* Status dot */}
              <div className="w-2 h-2 rounded-full bg-slate-700 flex-shrink-0" />
              <span className="text-slate-600">›</span>
            </Link>
          ))}
        </div>
      </div>

      <Chatbot />
      <BottomNav />
    </div>
  );
}
