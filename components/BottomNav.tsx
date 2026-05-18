"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/home",    icon: "🏠", label: "Home" },
  { href: "/subject", icon: "📖", label: "Learn" },
  { href: "/progress",icon: "📊", label: "Progress" },
  { href: "/profile", icon: "👤", label: "Profile" },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 safe-bottom"
      style={{
        background: "rgba(10,11,26,0.92)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="flex justify-around px-2 py-2">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
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
