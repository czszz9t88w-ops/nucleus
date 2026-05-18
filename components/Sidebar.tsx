"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getActiveClass(pathname: string): number | null {
  const m = pathname.match(/\/(?:class|subject|chapter)\/(\d+)/) || pathname.match(/\/chapter\/(\d+)-/);
  return m ? parseInt(m[1]) : null;
}

const nav = [
  { href: "/home",     icon: "🏠", label: "Home" },
  { href: "/progress", icon: "📊", label: "Progress" },
];

const classes = [
  { num: 6, icon: "🪐", color: "#7C3AED" },
  { num: 7, icon: "🌍", color: "#06B6D4" },
  { num: 8, icon: "🌟", color: "#F59E0B" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const activeClass = getActiveClass(pathname);

  return (
    <aside
      className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col z-40"
      style={{ background: "rgba(8,9,22,0.97)", borderRight: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Logo */}
      <Link href="/home" className="flex items-center gap-3 px-6 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0 pulse-glow"
          style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>⚛️</div>
        <div>
          <div className="font-black text-white text-lg leading-none">Nucleus</div>
          <div className="text-xs text-slate-500 mt-0.5">NCERT 2026</div>
        </div>
      </Link>

      {/* Primary nav */}
      <nav className="px-3 py-4 space-y-1">
        {nav.map(({ href, icon, label }) => {
          const active = pathname === href || (href !== "/home" && pathname.startsWith(href));
          return (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={active
                ? { background: "rgba(124,58,237,0.18)", color: "#A855F7", border: "1px solid rgba(124,58,237,0.28)" }
                : { color: "#64748B" }}>
              <span className="text-lg">{icon}</span>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mx-5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }} />

      {/* Class quick nav */}
      <div className="px-3 py-4 flex-1">
        <p className="text-xs text-slate-600 uppercase tracking-wider px-3 mb-2">Classes</p>
        {classes.map(({ num, icon, color }) => {
          const active = activeClass === num;
          return (
            <Link key={num} href={`/class/${num}`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={active ? { color, background: `${color}18` } : { color: "#64748B" }}>
              <span>{icon}</span>
              Class {num}
            </Link>
          );
        })}
      </div>

      {/* Footer badge */}
      <div className="px-4 pb-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
        <div className="glass rounded-xl p-3 text-center">
          <div className="text-xs font-semibold text-slate-300">NCERT 2026</div>
          <div className="text-xs text-slate-500 mt-0.5">Ganita Prakash · Curiosity</div>
        </div>
      </div>
    </aside>
  );
}
