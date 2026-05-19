"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getActiveClass(pathname: string): number | null {
  const m = pathname.match(/\/(?:class|subject|chapter)\/(\d+)/) || pathname.match(/\/chapter\/(\d+)-/);
  return m ? parseInt(m[1]) : null;
}

const nav = [
  { href: "/home",     icon: "🏠", label: "Dashboard" },
  { href: "/progress", icon: "📊", label: "My Progress" },
];

const classes = [
  { num: 6, icon: "🪐", color: "#7C3AED", label: "Class VI" },
  { num: 7, icon: "🌍", color: "#06B6D4", label: "Class VII" },
  { num: 8, icon: "🌟", color: "#F59E0B", label: "Class VIII" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const activeClass = getActiveClass(pathname);

  return (
    <aside
      className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col z-40"
      style={{ background: "rgba(6,7,15,0.98)", borderRight: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Logo */}
      <Link href="/home" className="flex items-center gap-3 px-5 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0 pulse-glow"
          style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>⚛️</div>
        <div>
          <div className="font-black text-white text-base leading-none tracking-tight">Nucleus</div>
          <div className="text-[10px] text-slate-600 mt-0.5 font-medium">NCERT 2026 · Class 6–8</div>
        </div>
      </Link>

      {/* Primary nav */}
      <nav className="px-3 pt-4 pb-2 space-y-0.5">
        {nav.map(({ href, icon, label }) => {
          const active = pathname === href || (href !== "/home" && pathname.startsWith(href));
          return (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={active
                ? { background: "rgba(124,58,237,0.15)", color: "#A855F7", borderLeft: "2px solid #7C3AED" }
                : { color: "#64748B" }}>
              <span className="text-base w-5 text-center">{icon}</span>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mx-5 my-1 divider" />

      {/* Class quick nav */}
      <div className="px-3 py-3 flex-1">
        <p className="text-[10px] text-slate-600 uppercase tracking-widest px-3 mb-2 font-bold">Browse Classes</p>
        {classes.map(({ num, icon, color, label }) => {
          const active = activeClass === num;
          return (
            <Link key={num} href={`/class/${num}`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all group"
              style={active ? { color, background: `${color}14`, borderLeft: `2px solid ${color}` } : { color: "#64748B" }}>
              <span className="text-base w-5 text-center group-hover:scale-110 transition-transform">{icon}</span>
              <span>{label}</span>
              {active && (
                <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${color}22`, color }}>Active</span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom links */}
      <div className="px-3 pb-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px" }}>
        <Link href="/setup"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
          style={{ color: pathname.startsWith("/setup") ? "#A855F7" : "#64748B" }}>
          <span className="text-base w-5 text-center">⚙️</span>
          Profile &amp; Settings
        </Link>
        <div className="mt-3 glass rounded-xl px-3 py-2.5 text-center">
          <div className="text-xs font-bold text-slate-300">NCERT 2026</div>
          <div className="text-[10px] text-slate-600 mt-0.5">Ganita Prakash · Curiosity</div>
        </div>
      </div>
    </aside>
  );
}
