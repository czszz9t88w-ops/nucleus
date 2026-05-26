"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getProgress } from "@/lib/progress";

function useLastClass() {
  const [cls, setCls] = useState(6);
  useEffect(() => {
    const visited = getProgress().chaptersVisited;
    if (visited.length > 0) {
      const num = parseInt(visited[visited.length - 1].split("-")[0]);
      if ([6, 7, 8].includes(num)) setCls(num);
    }
  }, []);
  return cls;
}

export default function BottomNav() {
  const pathname = usePathname();
  const lastClass = useLastClass();

  const items = [
    { href: "/home",              icon: "🏠", label: "Home",     match: (p: string) => p === "/home" },
    { href: `/class/${lastClass}`, icon: "📚", label: "Chapters", match: (p: string) => p.startsWith("/class") || p.startsWith("/subject") || p.startsWith("/chapter") },
    { href: "/progress",          icon: "📊", label: "Progress", match: (p: string) => p.startsWith("/progress") },
    { href: "/setup",             icon: "👤", label: "Profile",  match: (p: string) => p.startsWith("/setup") },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-bottom sidebar"
      style={{ backdropFilter: "blur(20px)", borderTop: "1px solid var(--topbar-border)", borderRight: "none" }}>
      <div className="flex justify-around px-1 pt-2 pb-1">
        {items.map((item) => {
          const active = item.match(pathname);
          return (
            <Link key={item.href} href={item.href}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all min-w-[56px]">
              <span className="text-xl leading-none"
                style={{ filter: active ? "drop-shadow(0 0 6px rgba(168,85,247,0.8))" : "none" }}>
                {item.icon}
              </span>
              <span className="text-[10px] font-semibold tracking-wide"
                style={{ color: active ? "#A855F7" : "var(--text-dimmer)" }}>
                {item.label}
              </span>
              {active && (
                <div className="w-4 h-0.5 rounded-full mt-0.5 gradient-bg" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
