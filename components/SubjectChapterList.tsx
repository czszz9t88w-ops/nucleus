"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgress } from "@/lib/progress";
import type { Chapter } from "@/data/curriculum";

interface Props {
  chapters: Chapter[];
  color: string;
  cls: number;
  sub: string;
}

export default function SubjectChapterList({ chapters, color, cls, sub }: Props) {
  const [visited, setVisited] = useState<string[]>([]);
  const [worksheetsDone, setWorksheetsDone] = useState<string[]>([]);

  useEffect(() => {
    const p = getProgress();
    setVisited(p.chaptersVisited);
    setWorksheetsDone(p.worksheetsDone);
  }, []);

  const done = chapters.filter((ch) => visited.includes(ch.id)).length;
  const pct = chapters.length ? Math.round((done / chapters.length) * 100) : 0;

  return (
    <>
      {/* Progress summary */}
      <div className="glass-card rounded-2xl p-4 mb-5 flex items-center gap-4">
        <div className="flex-1">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-slate-500">{done} of {chapters.length} chapters visited</span>
            <span className="font-bold" style={{ color }}>{pct}%</span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, background: `linear-gradient(90deg,${color},${color}88)` }} />
          </div>
        </div>
      </div>

      {/* Chapter list */}
      <div className="text-[11px] font-bold text-slate-600 uppercase tracking-widest mb-3">
        {chapters.length} Chapters
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {chapters.map((ch) => {
          const isVisited = visited.includes(ch.id);
          const wsKeys = [`${ch.id}-mcq-0`, `${ch.id}-mcq-1`, `${ch.id}-qa-0`, `${ch.id}-qa-1`];
          const wsDone = wsKeys.filter((k) => worksheetsDone.includes(k)).length;
          const chPct = Math.round((wsDone / wsKeys.length) * 100);
          const allDone = wsDone === wsKeys.length && wsDone > 0;

          return (
            <Link key={ch.id} href={`/chapter/${ch.id}`}
              className="glass-card flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all active:scale-[0.98] group"
              style={allDone ? { borderColor: `${color}44` } : {}}>

              {/* Chapter number */}
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
                style={isVisited
                  ? { background: `${color}25`, color, border: `1px solid ${color}44` }
                  : { background: "rgba(255,255,255,0.04)", color: "#475569", border: "1px solid rgba(255,255,255,0.08)" }}>
                {ch.num}
              </div>

              <span className="text-xl flex-shrink-0">{ch.emoji}</span>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-300 truncate group-hover:text-white transition-colors">{ch.title}</p>
                {isVisited && wsDone > 0 && (
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-0.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${chPct}%`, background: color }} />
                    </div>
                    <span className="text-[10px] font-semibold flex-shrink-0" style={{ color }}>{chPct}%</span>
                  </div>
                )}
                {isVisited && wsDone === 0 && (
                  <p className="text-[10px] text-slate-600 mt-0.5">Visited · no worksheets yet</p>
                )}
              </div>

              {allDone ? (
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0"
                  style={{ background: color }}>✓</div>
              ) : (
                <div className="text-slate-700 group-hover:text-slate-400 transition-colors text-base flex-shrink-0">›</div>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
