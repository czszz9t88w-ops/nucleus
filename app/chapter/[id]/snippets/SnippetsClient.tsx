"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import { getChapterById } from "@/data/curriculum";
import { getChapterContent, getDefaultContent } from "@/data/content";

export default function SnippetsClient() {
  const { id } = useParams<{ id: string }>();

  // All hooks must be before any conditional return
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const content = getChapterContent(id) ?? getDefaultContent(chapter.title);

  function toggle(i: number) {
    setFlipped(f => { const n = new Set(f); n.has(i) ? n.delete(i) : n.add(i); return n; });
  }

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden"
      style={{ background:"radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center gap-3 px-8 py-4 sticky top-0 z-30"
          style={{ background:"rgba(6,7,15,0.85)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <Link href={`/chapter/${id}`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            Ch {chapter.num}: {chapter.title}
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-white text-sm font-semibold">Snippets</span>
          <div className="ml-auto glass px-3 py-1 rounded-full text-xs text-slate-400">{content.snippets.length} cards</div>
        </div>

        <div className="px-5 pt-10 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-3 mb-5">
            <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-slate-500">Key Terms &amp; Formulas</div>
              <h1 className="text-base font-bold text-white truncate">{chapter.title}</h1>
            </div>
            <div className="glass px-2 py-1 rounded-full text-xs text-slate-400">{content.snippets.length} cards</div>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:block mb-8">
            <h1 className="text-3xl font-black text-white">{chapter.emoji} {chapter.title}</h1>
            <p className="text-slate-500 mt-1 text-sm">Key Terms &amp; Formulas · Tap any card to see the example</p>
          </div>

          {/* Cards — 1 col mobile, 2 col desktop */}
          <div className="md:max-w-4xl">
            <p className="md:hidden text-xs text-slate-500 mb-4">Tap any card to see the example</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {content.snippets.map((s, i) => (
                <button key={i} onClick={() => toggle(i)}
                  className="w-full text-left glass rounded-2xl overflow-hidden transition-all active:scale-95 hover:border-purple-500/30">
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="font-black text-base gradient-text">{s.term}</span>
                      <span className="text-slate-600 text-xs mt-1 flex-shrink-0">{flipped.has(i) ? "▲" : "▼"}</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{s.definition}</p>
                    {s.formula && (
                      <div className="mt-3 px-3 py-2 rounded-lg text-center"
                        style={{ background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.3)" }}>
                        <span className="gold-text font-mono font-bold text-sm">{s.formula}</span>
                      </div>
                    )}
                    {flipped.has(i) && s.example && (
                      <div className="mt-3 px-3 py-2 rounded-lg"
                        style={{ background:"rgba(6,182,212,0.1)", border:"1px solid rgba(6,182,212,0.3)" }}>
                        <span className="text-xs text-cyan-400 font-semibold">Example: </span>
                        <span className="text-xs text-cyan-300">{s.example}</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Chatbot chapterId={id} />
      <BottomNav />
    </div>
  );
}
