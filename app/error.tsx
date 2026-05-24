"use client";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--page-gradient)" }}>
      <div className="glass-card rounded-2xl p-8 text-center max-w-sm w-full">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-lg font-black text-white mb-2">Something went wrong</h2>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="flex gap-3">
          <button onClick={reset}
            className="flex-1 py-3 rounded-xl text-sm font-bold text-white btn-primary">
            Try Again
          </button>
          <Link href="/home"
            className="flex-1 py-3 rounded-xl text-sm font-semibold glass text-slate-300 text-center">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
