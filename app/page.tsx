import Link from "next/link";
import Stars from "@/components/Stars";

const features = [
  { icon: "▶️", title: "Video Lessons",       desc: "Chapter-wise explanations aligned to NCERT 2026 syllabus" },
  { icon: "📝", title: "Chapter Notes",        desc: "3–4 pages of summarised notes with key highlights" },
  { icon: "💡", title: "Snippets",             desc: "Tap-to-flip flashcards for every term, formula and definition" },
  { icon: "✅", title: "MCQ Worksheets",       desc: "10 questions each, including Assertion-Reason format (CBSE)" },
  { icon: "✍️", title: "Q&A Worksheets",       desc: "Short and long answer practice with detailed model answers" },
  { icon: "🤖", title: "AI Doubt Solver",      desc: "Instant answers scoped strictly to your NCERT syllabus" },
];

const classData = [
  { num: 6, icon: "🪐", color: "#7C3AED", maths: 10, sci: 10 },
  { num: 7, icon: "🌍", color: "#06B6D4", maths: 13, sci: 13 },
  { num: 8, icon: "🌟", color: "#F59E0B", maths: 16, sci: 16 },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 55%)" }}>
      <Stars />

      {/* ── Top Navigation ─────────────────────────────────── */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-16 py-5 sticky top-0"
        style={{ background: "rgba(6,7,15,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg pulse-glow"
            style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>⚛️</div>
          <span className="text-xl font-black gradient-text">Nucleus</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[["#features","Features"],["#subjects","Subjects"],["#pricing","Pricing"]].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">
            Sign in
          </Link>
          <Link href="/login"
            className="px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-sm font-bold text-white transition-all active:scale-95 hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
            Start Free →
          </Link>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-16 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs text-purple-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              NCERT 2026 · Ganita Prakash &amp; Curiosity
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Learn Smarter.<br />
              <span className="gradient-text">Score Better.</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              India&apos;s most focused study app for Class 6–8 Maths &amp; Science.
              Videos, notes, worksheets and AI tutoring — everything aligned to NCERT 2026.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/login"
                className="px-7 py-3.5 rounded-2xl font-bold text-base text-white transition-all active:scale-95 hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                Start Learning →
              </Link>
              <Link href="/login"
                className="px-7 py-3.5 rounded-2xl font-bold text-base glass transition-all active:scale-95"
                style={{ color: "#A855F7" }}>
                Try Demo
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {["📹 Video Lessons","📝 Notes","🧪 Worksheets","🤖 AI Tutor","📊 Progress"].map(f => (
                <span key={f} className="glass px-3 py-1 rounded-full text-xs text-slate-400">{f}</span>
              ))}
            </div>
          </div>

          {/* Right: App preview card */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-8 blur-3xl opacity-20"
                style={{ background: "radial-gradient(circle,#7C3AED,transparent)" }} />
              <div className="relative glass rounded-3xl p-7 w-80">
                <div className="text-center mb-5">
                  <div className="float inline-block text-5xl mb-3">⚛️</div>
                  <div className="text-xl font-black gradient-text">Nucleus</div>
                  <div className="text-xs text-slate-500 mt-0.5">Your Universe of Knowledge</div>
                </div>
                <div className="space-y-2.5 mb-4">
                  {["Patterns in Mathematics","Fractions & Decimals","Algebraic Expressions"].map((t, i) => (
                    <div key={i} className="glass rounded-xl px-4 py-2.5 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                        style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>{i + 1}</div>
                      <span className="text-sm text-slate-300">{t}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-2 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {["📝","💡","✅","✍️","🤖"].map(e => (
                    <div key={e} className="glass w-9 h-9 rounded-xl flex items-center justify-center text-base">{e}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-16 py-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[["78","Chapters"],["3","Classes"],["780+","Worksheets"],["100%","NCERT 2026"]].map(([val, label]) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-black gradient-text">{val}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────── */}
      <section id="features" className="relative z-10 px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Everything you need to excel</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
              All 78 chapters covered across Class 6, 7, and 8 with multiple learning formats.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f.title} className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subjects ────────────────────────────────────────── */}
      <section id="subjects" className="relative z-10 px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">All classes, all chapters</h2>
            <p className="text-slate-500 text-sm md:text-base">78 chapters · 2 subjects · 3 classes · NCERT 2026</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classData.map(c => (
              <Link key={c.num} href={`/class/${c.num}`}
                className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all active:scale-95 block group">
                <div className="text-5xl mb-4">{c.icon}</div>
                <div className="text-2xl font-black text-white mb-1">Class {c.num}</div>
                <div className="text-xs font-semibold mb-5" style={{ color: c.color }}>NCERT 2026 Curriculum</div>
                <div className="space-y-2">
                  <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-3">
                    <span>🔢</span>
                    <div>
                      <div className="text-xs font-semibold text-slate-300">Mathematics</div>
                      <div className="text-xs text-slate-500">Ganita Prakash · {c.maths} chapters</div>
                    </div>
                  </div>
                  <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-3">
                    <span>🔬</span>
                    <div>
                      <div className="text-xs font-semibold text-slate-300">Science</div>
                      <div className="text-xs text-slate-500">Curiosity · {c.sci} chapters</div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-sm font-semibold transition-colors group-hover:text-purple-300"
                  style={{ color: c.color }}>Explore Class {c.num} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────── */}
      <section id="pricing" className="relative z-10 px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Simple, honest pricing</h2>
            <p className="text-slate-500 text-sm">No hidden fees. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <div className="text-lg font-bold text-slate-300 mb-1">Free</div>
              <div className="text-5xl font-black gradient-text mb-6">₹0</div>
              <div className="space-y-2.5 text-sm text-slate-400 mb-8">
                {["Browse all 78 chapters","Watch video lessons","Read chapter notes","Try 2 worksheets per chapter"].map(f => (
                  <div key={f} className="flex items-center gap-2"><span className="text-green-400 text-xs">✓</span>{f}</div>
                ))}
              </div>
              <Link href="/login" className="block w-full py-3 rounded-xl text-sm font-bold text-center glass text-white hover:border-purple-500/40 transition-all">
                Get Started Free
              </Link>
            </div>
            <div className="rounded-2xl p-8 relative"
              style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.25),rgba(6,182,212,0.15))", border: "1px solid rgba(124,58,237,0.4)" }}>
              <div className="absolute top-5 right-5 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>POPULAR</div>
              <div className="text-lg font-bold text-white mb-1">Premium</div>
              <div className="text-5xl font-black gradient-text mb-1">₹999</div>
              <div className="text-xs text-slate-400 mb-6">per year · ₹83/month</div>
              <div className="space-y-2.5 text-sm text-slate-300 mb-8">
                {["Everything in Free","All worksheets unlocked","AI doubt solver (unlimited)","Progress tracking & streaks","Offline access"].map(f => (
                  <div key={f} className="flex items-center gap-2"><span className="text-purple-400 text-xs">✓</span>{f}</div>
                ))}
              </div>
              <Link href="/login"
                className="block w-full py-3 rounded-xl text-sm font-bold text-center text-white hover:opacity-90 transition-all"
                style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                Start Learning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="relative z-10 px-6 md:px-16 py-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
              style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>⚛️</div>
            <span className="font-bold text-slate-300">Nucleus</span>
          </Link>
          <p className="text-xs text-slate-600 text-center">NCERT 2026 · Class 6–8 Maths &amp; Science · Made for Indian students</p>
          <p className="text-xs text-slate-600">Free to explore · ₹999/year</p>
        </div>
      </footer>
    </div>
  );
}
