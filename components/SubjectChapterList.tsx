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

// 3 completion states per chapter
function getChapterState(id: string, visited: string[], done: string[]) {
  const wsKeys = [`${id}-mcq-0`, `${id}-mcq-1`, `${id}-qa-0`, `${id}-qa-1`];
  const wsDone = wsKeys.filter((k) => done.includes(k)).length;
  if (wsDone === wsKeys.length) return "complete";
  if (wsDone > 0 || visited.includes(id)) return "inprogress";
  return "notstarted";
}

export default function SubjectChapterList({ chapters, color, cls, sub }: Props) {
  const [visited, setVisited]   = useState<string[]>([]);
  const [wsDone, setWsDone]     = useState<string[]>([]);

  useEffect(() => {
    const p = getProgress();
    setVisited(p.chaptersVisited);
    setWsDone(p.worksheetsDone);
  }, []);

  const completedCount  = chapters.filter((ch) => getChapterState(ch.id, visited, wsDone) === "complete").length;
  const inProgressCount = chapters.filter((ch) => getChapterState(ch.id, visited, wsDone) === "inprogress").length;
  const pct = chapters.length ? Math.round((completedCount / chapters.length) * 100) : 0;

  return (
    <>
      {/* Progress summary */}
      <div className="glass-card rounded-2xl p-4 mb-5">
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="flex items-center gap-3">
            <span style={{ color: "var(--text-muted)" }}>{completedCount} complete</span>
            {inProgressCount > 0 && (
              <span style={{ color }}>· {inProgressCount} in progress</span>
            )}
          </div>
          <span className="font-bold" style={{ color }}>{pct}%</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <div className="h-full rounded-full transition-all duration-700"
            style={{ width: `${pct}%`, background: `linear-gradient(90deg,${color},${color}88)` }} />
        </div>
        {/* Legend */}
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>Complete</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
            <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>In Progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
            <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>Not Started</span>
          </div>
        </div>
      </div>

      {/* Chapter count */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          {chapters.length} Chapters
        </div>
      </div>

      {/* Chapter list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {chapters.map((ch) => {
          const state = getChapterState(ch.id, visited, wsDone);
          const wsKeys = [`${ch.id}-mcq-0`, `${ch.id}-mcq-1`, `${ch.id}-qa-0`, `${ch.id}-qa-1`];
          const wsCount = wsKeys.filter((k) => wsDone.includes(k)).length;
          const wsPct   = Math.round((wsCount / wsKeys.length) * 100);

          const stateStyles = {
            complete:   { num: { background: "rgba(16,185,129,0.2)", color: "#10B981", border: "1px solid rgba(16,185,129,0.4)" }, card: { borderColor: "rgba(16,185,129,0.25)" } },
            inprogress: { num: { background: `${color}25`,           color,             border: `1px solid ${color}44` },           card: { borderColor: `${color}33` } },
            notstarted: { num: { background: "rgba(255,255,255,0.04)", color: "#475569", border: "1px solid rgba(255,255,255,0.08)" }, card: {} },
          }[state];

          return (
            <Link key={ch.id} href={`/chapter/${ch.id}`}
              className="glass-card flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all active:scale-[0.98] group"
              style={stateStyles.card}>

              {/* Chapter number with state colour */}
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 flex-shrink-0"
                style={stateStyles.num}>
                {state === "complete" ? "✓" : ch.num}
              </div>

              <span className="text-xl flex-shrink-0">{ch.emoji}</span>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-300 truncate group-hover:text-white transition-colors">
                  {ch.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {/* Worksheet progress */}
                  {state === "inprogress" && wsCount > 0 && (
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <div className="flex-1 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <div className="h-full rounded-full" style={{ width: `${wsPct}%`, background: color }} />
                      </div>
                      <span className="text-[9px] font-semibold flex-shrink-0" style={{ color }}>{wsCount}/4</span>
                    </div>
                  )}
                  {state === "inprogress" && wsCount === 0 && (
                    <span className="text-[9px]" style={{ color: "var(--text-muted)" }}>Visited</span>
                  )}
                  {state === "complete" && (
                    <span className="text-[9px] font-semibold text-emerald-500">All done</span>
                  )}
                </div>
              </div>

              <div className="text-base flex-shrink-0 transition-colors group-hover:text-slate-400"
                style={{ color: state === "complete" ? "#10B981" : "var(--text-dimmer)" }}>
                {state === "complete" ? "✓" : "›"}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
