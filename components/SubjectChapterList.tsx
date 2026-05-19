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
      {/* Progress summary bar */}
      <div className="glass rounded-2xl p-4 mb-5 flex items-center gap-4">
        <div className="flex-1">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>{done} of {chapters.length} chapters visited</span>
            <span style={{ color }}>{pct}%</span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full">
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, background: `linear-gradient(90deg,${color},${color}88)` }} />
          </div>
        </div>
      </div>

      {/* Chapter list */}
      <div className="mb-3">
        <h2 className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">
          {chapters.length} Chapters
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {chapters.map((ch) => {
          const isVisited = visited.includes(ch.id);
          const wsKeys = [`${ch.id}-mcq-0`, `${ch.id}-mcq-1`, `${ch.id}-qa-0`, `${ch.id}-qa-1`];
          const wsDone = wsKeys.filter((k) => worksheetsDone.includes(k)).length;
          const chPct = Math.round((wsDone / wsKeys.length) * 100);

          return (
            <Link key={ch.id} href={`/chapter/${ch.id}`}
              className="glass flex items-center gap-4 px-4 py-4 rounded-xl transition-all active:scale-95 hover:border-purple-500/30 block group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0"
                style={isVisited
                  ? { background: `${color}33`, color, border: `1px solid ${color}55` }
                  : { background: `${color}15`, color: "#64748B", border: `1px solid ${color}22` }}>
                {ch.num}
              </div>
              <span className="text-xl flex-shrink-0">{ch.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors">{ch.title}</p>
                {isVisited && wsDone > 0 && (
                  <p className="text-xs mt-0.5" style={{ color }}>{chPct}% complete</p>
                )}
                {isVisited && wsDone === 0 && (
                  <p className="text-xs text-slate-600 mt-0.5">Visited</p>
                )}
              </div>
              {isVisited ? (
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
              ) : (
                <div className="w-2 h-2 rounded-full bg-slate-700 flex-shrink-0" />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
