"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";
import { getChapterById } from "@/data/curriculum";

const subColor = { maths: "#7C3AED", science: "#06B6D4" };

const menu = [
  { key: "video",          icon: "▶️",  label: "Video Lesson",         sub: "Watch explanation",       href: (id:string) => `/chapter/${id}/video` },
  { key: "notes",          icon: "📝",  label: "Chapter Notes",        sub: "3-4 pages summarised",    href: (id:string) => `/chapter/${id}/notes` },
  { key: "snippets",       icon: "💡",  label: "Snippets",             sub: "Key terms & formulas",    href: (id:string) => `/chapter/${id}/snippets` },
  { key: "mcq",            icon: "✅",  label: "MCQ + Assertion Worksheet", sub: "2 worksheets · 10 Q each", href: (id:string) => `/chapter/${id}/worksheet/mcq` },
  { key: "qa",             icon: "✍️",  label: "Q&A Worksheet",        sub: "2 worksheets · 10 Q each", href: (id:string) => `/chapter/${id}/worksheet/qa` },
];

export default function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const color = subColor[chapter.subject];

  return (
    <div className="relative min-h-screen pb-24 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      {/* Header */}
      <div className="relative z-10 px-5 pt-12 pb-4 flex items-start gap-3">
        <Link href={`/subject/${chapter.classNum}/${chapter.subject}`}
          className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400 flex-shrink-0 mt-1">‹</Link>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color }}>
            Class {chapter.classNum} · {chapter.subject === "maths" ? "Mathematics" : "Science"} · Chapter {chapter.num}
          </div>
          <h1 className="text-xl font-black text-white leading-tight">{chapter.emoji} {chapter.title}</h1>
          <div className="flex gap-2 mt-2">
            <span className="glass text-xs px-2 py-0.5 rounded-full text-slate-400">NCERT 2026</span>
            <span className="glass text-xs px-2 py-0.5 rounded-full text-slate-400">CBSE</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 px-5 mb-4">
        <div className="glass rounded-xl p-3 flex items-center gap-3">
          <span className="text-xs text-slate-500">Chapter progress</span>
          <div className="flex-1 h-1.5 bg-slate-800 rounded-full">
            <div className="h-full w-0 rounded-full progress-bar" />
          </div>
          <span className="text-xs font-semibold text-slate-400">0%</span>
        </div>
      </div>

      {/* Menu */}
      <div className="relative z-10 px-5 space-y-3">
        {menu.map((item, i) => (
          <Link key={item.key} href={item.href(id)}
            className="glass flex items-center gap-4 px-5 py-4 rounded-2xl transition-transform active:scale-95 block"
            style={{ animationDelay: `${i * 0.05}s` }}>
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div className="flex-1">
              <div className="font-semibold text-white">{item.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
            </div>
            <div className="text-slate-600">›</div>
          </Link>
        ))}
      </div>

      <Chatbot chapterId={id} />
      <BottomNav />
    </div>
  );
}
