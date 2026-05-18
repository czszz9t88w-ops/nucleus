"use client";
import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
import { getChapterById } from "@/data/curriculum";
import { getChapterContent, getDefaultContent } from "@/data/content";

export default function SnippetsClient() {
  const { id } = useParams<{ id: string }>();
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const content = getChapterContent(id) ?? getDefaultContent(chapter.title);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setFlipped((f) => { const n = new Set(f); n.has(i) ? n.delete(i) : n.add(i); return n; });
  }

  return (
    <div className="relative min-h-screen pb-20 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      <div className="relative z-10 px-5 pt-10 pb-4 flex items-center gap-3">
        <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-500">Key Terms &amp; Formulas</div>
          <h1 className="text-base font-bold text-white truncate">{chapter.title}</h1>
        </div>
        <div className="glass px-2 py-1 rounded-full text-xs text-slate-400">{content.snippets.length} cards</div>
      </div>

      <div className="relative z-10 px-5">
        <p className="text-xs text-slate-500 mb-4">Tap any card to see the example</p>
        <div className="space-y-3">
          {content.snippets.map((s, i) => (
            <button key={i} onClick={() => toggle(i)} className="w-full text-left glass rounded-2xl overflow-hidden transition-all active:scale-95">
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-black text-base gradient-text">{s.term}</span>
                  <span className="text-slate-600 text-xs mt-1">{flipped.has(i) ? "▲" : "▼"}</span>
                </div>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">{s.definition}</p>
                {s.formula && (
                  <div className="mt-3 px-3 py-2 rounded-lg text-center"
                    style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)" }}>
                    <span className="gold-text font-mono font-bold text-sm">{s.formula}</span>
                  </div>
                )}
                {flipped.has(i) && s.example && (
                  <div className="mt-3 px-3 py-2 rounded-lg"
                    style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)" }}>
                    <span className="text-xs text-cyan-400 font-semibold">Example: </span>
                    <span className="text-xs text-cyan-300">{s.example}</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <Chatbot chapterId={id} />
    </div>
  );
}
