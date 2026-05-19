import Link from "next/link";
import Stars from "@/components/Stars";

const features = [
  { icon: "📝", title: "Chapter Notes",     desc: "3–4 pages of concise summaries with key highlights — every chapter covered." },
  { icon: "💡", title: "Snippets",          desc: "Tap-to-flip flashcards for every term, formula and definition. Perfect for last-minute revision." },
  { icon: "✅", title: "MCQ Worksheets",    desc: "10 questions per worksheet, Assertion-Reason included. Matches CBSE paper format exactly." },
  { icon: "✍️", title: "Q&A Worksheets",    desc: "Short and long answer practice with detailed model answers written by subject experts." },
  { icon: "🤖", title: "AI Doubt Solver",   desc: "Instant, NCERT-scoped answers. Understands Class 6–8 context so you always get the right level." },
  { icon: "📊", title: "Progress Tracking", desc: "Visual chapter-by-chapter completion tracker with study streaks and performance stats." },
];

const classData = [
  { num: 6, icon: "🪐", color: "#7C3AED", maths: 10, sci: 10, label: "Foundation" },
  { num: 7, icon: "🌍", color: "#06B6D4", maths: 13, sci: 13, label: "Building Up" },
  { num: 8, icon: "🌟", color: "#F59E0B", maths: 16, sci: 16, label: "Board Ready" },
];

const testimonials = [
  { name: "Priya S.", cls: "Class 7, Delhi", text: "I scored 95/100 in Science after using Nucleus for 2 weeks. The snippets made revision so fast!", avatar: "🧑‍🎓" },
  { name: "Arjun M.", cls: "Class 8, Mumbai", text: "The MCQ worksheets are exactly like what comes in school exams. My maths marks went from 72 to 89.", avatar: "👨‍🎓" },
  { name: "Kavya R.", cls: "Class 6, Bengaluru", text: "I love the AI doubt solver — it explains things at my level, not textbook language.", avatar: "👩‍🎓" },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 55%)" }}>
      <Stars />

      {/* ── Top Navigation ─────────────────────────────────── */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-16 py-4 sticky top-0"
        style={{ background: "rgba(6,7,15,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg pulse-glow"
            style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>⚛️</div>
          <span className="text-xl font-black gradient-text">Nucleus</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[["#features","Features"],["#subjects","Subjects"],["#social","Reviews"],["#pricing","Pricing"]].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">Sign in</Link>
          <Link href="/login"
            className="px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-sm font-bold text-white transition-all active:scale-95 hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
            Start Free →
          </Link>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-16 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs text-purple-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Updated for NCERT 2026 · Ganita Prakash &amp; Curiosity
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5">
              Learn Smarter.<br />
              <span className="gradient-text">Score Better.</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              India&apos;s most focused study app for Class 6–8 Maths &amp; Science.
              Notes, worksheets and AI tutoring — 100% aligned to NCERT 2026.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/login"
                className="px-7 py-3.5 rounded-2xl font-bold text-base text-white transition-all active:scale-95 hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                Start Learning Free →
              </Link>
              <Link href="/login"
                className="px-7 py-3.5 rounded-2xl font-bold text-base glass transition-all active:scale-95"
                style={{ color: "#A855F7" }}>
                Try Demo
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {["📝 Notes","💡 Snippets","✅ Worksheets","🤖 AI Tutor","📊 Progress"].map(f => (
                <span key={f} className="glass px-3 py-1 rounded-full text-xs text-slate-400">{f}</span>
              ))}
            </div>
          </div>

          {/* App preview card */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-8 blur-3xl opacity-20"
                style={{ background: "radial-gradient(circle,#7C3AED,transparent)" }} />
              <div className="relative glass rounded-3xl p-7 w-80">
                <div className="text-center mb-5">
                  <div className="text-5xl mb-3">⚛️</div>
                  <div className="text-xl font-black gradient-text">Nucleus</div>
                  <div className="text-xs text-slate-500 mt-0.5">Your Universe of Knowledge</div>
                </div>
                {/* Mock progress card */}
                <div className="glass rounded-2xl p-4 mb-3">
                  <div className="text-xs text-slate-500 mb-1">Continue Learning</div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔢</span>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">Patterns in Maths</div>
                      <div className="h-1 bg-slate-700 rounded-full mt-1">
                        <div className="h-full w-3/4 rounded-full" style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)" }} />
                      </div>
                    </div>
                    <span className="text-xs text-purple-400">75%</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[["📖","12","Chapters"],["🔥","5","Streak"],["✅","8","Sheets"],["🎯","47","Solved"]].map(([icon,val,lbl]) => (
                    <div key={lbl} className="glass rounded-xl p-2 text-center">
                      <div className="text-base">{icon}</div>
                      <div className="text-sm font-black text-white">{val}</div>
                      <div className="text-xs text-slate-600">{lbl}</div>
                    </div>
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
          {[["78","Chapters"],["2","Subjects"],["780+","Worksheets"],["100%","NCERT 2026"]].map(([val, label]) => (
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
              78 chapters · 6 subject books · multiple learning formats — all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f.title} className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subjects ────────────────────────────────────────── */}
      <section id="subjects" className="relative z-10 px-6 md:px-16 py-16 md:py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">All classes, all chapters</h2>
            <p className="text-slate-500 text-sm md:text-base">78 chapters · 2 subjects · Classes 6, 7 &amp; 8 · NCERT 2026</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classData.map(c => (
              <Link key={c.num} href={`/class/${c.num}`}
                className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all active:scale-95 block group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{c.icon}</span>
                  <div>
                    <div className="text-xl font-black text-white">Class {c.num}</div>
                    <div className="text-xs font-semibold" style={{ color: c.color }}>{c.label}</div>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
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
                <div className="text-sm font-semibold transition-colors group-hover:text-purple-300"
                  style={{ color: c.color }}>Explore Class {c.num} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────── */}
      <section id="social" className="relative z-10 px-6 md:px-16 py-16 md:py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Students love Nucleus</h2>
            <p className="text-slate-500 text-sm">Helping Class 6–8 students across India score better</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: "rgba(124,58,237,0.2)" }}>{t.avatar}</div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.cls}</div>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────── */}
      <section id="pricing" className="relative z-10 px-6 md:px-16 py-16 md:py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Simple, honest pricing</h2>
            <p className="text-slate-500 text-sm">No hidden fees. Cancel anytime. Start free today.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <div className="text-lg font-bold text-slate-300 mb-1">Free</div>
              <div className="text-5xl font-black gradient-text mb-6">₹0</div>
              <div className="space-y-2.5 text-sm text-slate-400 mb-8">
                {["Browse all 78 chapters","Read all chapter notes","Try 2 worksheets per chapter","Basic progress tracking","AI doubt solver"].map(f => (
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
              <div className="text-xs text-slate-400 mb-6">per year · just ₹83/month</div>
              <div className="space-y-2.5 text-sm text-slate-300 mb-8">
                {["Everything in Free","All worksheets unlocked","AI doubt solver (unlimited)","Full progress tracking & streaks","Priority support"].map(f => (
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
          <p className="text-xs text-slate-600 text-center">NCERT 2026 · Class 6–8 Maths &amp; Science · Made with ❤️ for Indian students</p>
          <p className="text-xs text-slate-600">Free to explore · ₹999/year for Premium</p>
        </div>
      </footer>
    </div>
  );
}
