"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgress } from "@/lib/progress";

interface MenuItem {
  key: string;
  icon: string;
  label: string;
  sub: string;
  href: string;
  wsKeys?: string[]; // worksheet done keys to check
}

interface Props {
  id: string;
  color: string;
  items: MenuItem[];
}

export default function ChapterMenu({ id, color, items }: Props) {
  const [worksheetsDone, setWorksheetsDone] = useState<string[]>([]);

  useEffect(() => {
    setWorksheetsDone(getProgress().worksheetsDone);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item, i) => {
        const doneCount = item.wsKeys?.filter((k) => worksheetsDone.includes(k)).length ?? 0;
        const total = item.wsKeys?.length ?? 0;
        const allDone = total > 0 && doneCount === total;
        const someDone = doneCount > 0 && doneCount < total;

        return (
          <Link
            key={item.key}
            href={item.href}
            className={`glass flex items-center gap-4 px-5 py-4 rounded-2xl transition-all active:scale-95 hover:border-purple-500/30 group ${i === 0 ? "sm:col-span-2" : ""}`}
            style={allDone ? { borderColor: `${color}44` } : {}}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 glass relative">
              {item.icon}
              {allDone && (
                <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{ background: color }}>✓</div>
              )}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-white group-hover:text-purple-200 transition-colors">{item.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
              {total > 0 && (
                <div className="flex items-center gap-1.5 mt-1.5">
                  {Array.from({ length: total }).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-1 flex-1 rounded-full"
                      style={{ background: idx < doneCount ? color : "rgba(255,255,255,0.1)" }}
                    />
                  ))}
                  {someDone && <span className="text-xs ml-1" style={{ color }}>{doneCount}/{total}</span>}
                  {allDone && <span className="text-xs ml-1" style={{ color }}>Done ✓</span>}
                </div>
              )}
            </div>
            <div className="text-slate-600 group-hover:text-slate-400 transition-colors">›</div>
          </Link>
        );
      })}
    </div>
  );
}
