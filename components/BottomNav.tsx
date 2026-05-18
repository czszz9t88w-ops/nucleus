"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/home",     icon: "🏠", label: "Home",     exact: true },
  { href: "/home",     icon: "📖", label: "Learn",    exact: false },
  { href: "/progress", icon: "📊", label: "Progress", exact: false },
  { href: "/setup",    icon: "👤", label: "Profile",  exact: false },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-bottom"
      style={{
        background: "rgba(10,11,26,0.92)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="flex justify-around px-2 py-2">
        {items.map((item) => {
          const active = item.exact ? pathname === item.href : (item.href !== "/home" && pathname.startsWith(item.href)) || (item.label === "Learn" && (pathname.startsWith("/class") || pathname.startsWith("/subject") || pathname.startsWith("/chapter")));
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-all"
              style={{ color: active ? "#A855F7" : "#64748B" }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
