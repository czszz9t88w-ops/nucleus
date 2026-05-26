import Link from "next/link";
import Stars from "@/components/Stars";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center page-bg overflow-hidden">
      <Stars />
      <div className="relative z-10 text-center px-6 max-w-sm">
        <div className="text-7xl mb-4">🪐</div>
        <h1 className="text-4xl font-black text-white mb-2">404</h1>
        <p className="text-lg font-bold text-white mb-2">Page not found</p>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          This chapter or page doesn&apos;t exist. It may have moved or the link is incorrect.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/home"
            className="w-full py-3.5 rounded-2xl font-bold text-sm text-white btn-primary text-center">
            Go to Home
          </Link>
          <Link href="/class/6"
            className="w-full py-3.5 rounded-2xl font-semibold text-sm text-center glass text-slate-400 hover:text-slate-200 transition-colors">
            Browse Chapters
          </Link>
        </div>
      </div>
    </div>
  );
}
