import Link from "next/link";
import Stars from "@/components/Stars";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 60%)" }}>
      <Stars />

      {/* Decorative nebula blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />
      <div className="absolute bottom-32 right-10 w-48 h-48 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }} />

      <div className="relative z-10 text-center max-w-sm w-full">
        {/* Logo */}
        <div className="float inline-block mb-6">
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-5xl pulse-glow"
            style={{ background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)" }}>
            ⚛️
          </div>
        </div>

        <h1 className="text-5xl font-black mb-2 tracking-tight gradient-text">Nucleus</h1>
        <p className="text-slate-400 text-sm mb-1">by your teacher, for you</p>
        <p className="text-slate-500 text-xs mb-10">Class 6 · 7 · 8 &nbsp;|&nbsp; Maths &amp; Science &nbsp;|&nbsp; NCERT 2026</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["📹 Video Lessons","📝 Chapter Notes","🧪 Worksheets","🤖 AI Doubt Solver","📊 Progress Tracking"].map((f) => (
            <span key={f} className="glass px-3 py-1 rounded-full text-xs text-slate-300">{f}</span>
          ))}
        </div>

        <Link href="/login"
          className="block w-full py-4 rounded-2xl font-bold text-lg text-white mb-3 transition-transform active:scale-95"
          style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}>
          Start Learning →
        </Link>
        <p className="text-slate-600 text-xs">Free to explore · ₹999/year for full access</p>

        {/* Class badges */}
        <div className="flex justify-center gap-4 mt-10">
          {[6,7,8].map((c) => (
            <div key={c} className="glass px-4 py-2 rounded-xl text-center">
              <div className="text-lg font-black gradient-text">Class {c}</div>
              <div className="text-xs text-slate-500">NCERT 2026</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
