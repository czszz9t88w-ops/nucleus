import Link from "next/link";
import Stars from "@/components/Stars";

const features = [
  { icon: "📝", title: "Chapter Notes",     desc: "3–4 pages of crisp summaries, key highlights and important diagrams — every chapter, all 78.", color: "#7C3AED" },
  { icon: "💡", title: "Smart Snippets",    desc: "Tap-to-flip flashcards for every term, formula and definition. Designed for 5-minute revision.", color: "#06B6D4" },
  { icon: "✅", title: "MCQ Worksheets",    desc: "10 Qs per worksheet with Assertion-Reason. Exact CBSE format — catch your gaps before the exam.", color: "#10B981" },
  { icon: "✍️", title: "Q&A Practice",      desc: "Short and long answer model answers written by subject experts. Know exactly what examiners want.", color: "#F59E0B" },
  { icon: "🤖", title: "AI Doubt Solver",   desc: "Instant NCERT-scoped answers. Understands Class 6–8 context — never over-explains or confuses.", color: "#EF4444" },
  { icon: "📊", title: "Progress Tracker",  desc: "Visual chapter-by-chapter completion map, study streaks and performance stats — see your growth.", color: "#8B5CF6" },
];

const classData = [
  { num: 6, icon: "🪐", color: "#7C3AED", maths: 10, sci: 10, level: "Foundation", desc: "Build strong fundamentals in numbers, algebra and life sciences." },
  { num: 7, icon: "🌍", color: "#06B6D4", maths: 13, sci: 13, level: "Building Up", desc: "Deepen concepts in geometry, data handling, physics and chemistry." },
  { num: 8, icon: "🌟", color: "#F59E0B", maths: 16, sci: 16, level: "Board Ready", desc: "Master advanced topics, be fully ready for Class 9 and competitive prep." },
];

const testimonials = [
  { name: "Priya Sharma", cls: "Class 7 · Delhi", text: "I scored 95/100 in Science after using Nucleus for 2 weeks. The snippet cards made revision so much faster than reading the textbook again.", avatar: "🧑‍🎓", score: "95/100" },
  { name: "Arjun Mehta", cls: "Class 8 · Mumbai", text: "MCQ worksheets are exactly like what comes in school exams. My maths marks went from 72 to 89 in one term.", avatar: "👨‍🎓", score: "+17 marks" },
  { name: "Kavya Reddy", cls: "Class 6 · Bengaluru", text: "The AI doubt solver explains things at my level — not complicated textbook language. I finally understand why, not just what.", avatar: "👩‍🎓", score: "⭐⭐⭐⭐⭐" },
];

const steps = [
  { num: "01", title: "Pick your class", desc: "Choose Class 6, 7 or 8. Both Maths and Science are fully covered.", icon: "🎯" },
  { num: "02", title: "Study each chapter", desc: "Read notes, flip through snippets and attempt MCQ + Q&A worksheets.", icon: "📖" },
  { num: "03", title: "Track your growth", desc: "Watch your progress bars fill up. Maintain daily streaks.", icon: "📈" },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #110820 0%, #06070F 55%)" }}>
      <Stars />

      {/* ── Announcement bar ─────────────────────────────── */}
      <div className="relative z-20 text-center py-2 px-4 text-xs font-semibold"
        style={{ background: "linear-gradient(90deg,rgba(124,58,237,0.25),rgba(6,182,212,0.25))", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <span className="gradient-text">🎉 Now updated for NCERT 2026 — Ganita Prakash &amp; Curiosity textbooks</span>
      </div>

      {/* ── Top Navigation ─────────────────────────────────── */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-16 py-4 sticky top-0"
        style={{ background: "rgba(6,7,15,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg pulse-glow"
            style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>⚛️</div>
          <span className="text-lg font-black gradient-text tracking-tight">Nucleus</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {[["#features","Features"],["#how","How it works"],["#subjects","Classes"],["#social","Reviews"]].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-slate-500 hover:text-white transition-colors">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-xl hover:bg-white/5">
            Sign in
          </Link>
          <Link href="/login"
            className="btn-primary px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-sm">
            Start Free →
          </Link>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-16 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto">

          {/* Hero content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-7"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#A855F7" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                Class 6–8 · Maths &amp; Science · CBSE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5 tracking-tight">
                Study Smarter.<br />
                <span className="gradient-text">Score Higher.</span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-md">
                India&apos;s most focused study app for Class 6–8. Notes, worksheets and AI tutoring —
                100% aligned to <strong className="text-slate-300">NCERT 2026</strong>.
              </p>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[["78", "Chapters"], ["780+", "Worksheets"], ["100%", "NCERT 2026"]].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-xl font-black gradient-text">{val}</div>
                    <div className="text-[11px] text-slate-600">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="/login"
                  className="btn-primary px-7 py-3.5 rounded-2xl text-base">
                  Start Learning Free →
                </Link>
                <Link href="/login"
                  className="px-7 py-3.5 rounded-2xl text-base font-bold glass transition-all active:scale-95"
                  style={{ color: "#A855F7" }}>
                  Try Demo
                </Link>
              </div>
              <p className="text-xs text-slate-600">No credit card · No login required for demo</p>
            </div>

            {/* App preview card */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-10 blur-3xl opacity-15 rounded-full"
                  style={{ background: "radial-gradient(circle,#7C3AED,transparent)" }} />
                <div className="relative glass-card p-6 w-80 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-xs text-slate-500">Welcome back,</div>
                      <div className="font-black text-white">Priya 👋</div>
                    </div>
                    <div className="glass px-2.5 py-1 rounded-full text-xs font-bold text-amber-400">🔥 7-day streak</div>
                  </div>

                  {/* Continue card */}
                  <div className="glass rounded-xl p-3 mb-4"
                    style={{ borderColor: "rgba(124,58,237,0.3)" }}>
                    <div className="text-[10px] text-slate-500 mb-1.5">Continue Learning</div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔢</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-white truncate">Patterns in Maths</div>
                        <div className="h-1 bg-slate-800 rounded-full mt-1.5">
                          <div className="h-full w-3/4 rounded-full" style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)" }} />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-purple-400 flex-shrink-0">75%</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[["📖","14","Chapters"],["🔥","7","Streak"],["✅","11","Sheets"],["🎯","63","Solved"]].map(([icon,val,lbl]) => (
                      <div key={lbl} className="glass rounded-xl p-2 text-center">
                        <div className="text-base">{icon}</div>
                        <div className="text-sm font-black text-white">{val}</div>
                        <div className="text-[9px] text-slate-600">{lbl}</div>
                      </div>
                    ))}
                  </div>

                  {/* Subject cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {[["🪐","Class 6","#7C3AED"],["🌍","Class 7","#06B6D4"],["🌟","Class 8","#F59E0B"]].map(([icon,label,color]) => (
                      <div key={label} className="glass rounded-xl p-2 text-center"
                        style={{ borderColor: `${color}33` }}>
                        <div className="text-lg">{icon}</div>
                        <div className="text-[9px] font-bold text-slate-400">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────── */}
      <section id="how" className="relative z-10 px-6 md:px-16 py-14 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">How Nucleus works</h2>
            <p className="text-slate-500 text-sm">Three simple steps to mastering NCERT 2026</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-black opacity-10 text-white leading-none">{s.num}</div>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-black text-white text-base mb-1.5">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────── */}
      <section id="features" className="relative z-10 px-6 md:px-16 py-14 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Everything you need to excel</h2>
            <p className="text-slate-500 text-sm">78 chapters · 6 books · multiple learning formats</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f.title} className="glass-card p-5 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}33` }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subjects / Classes ───────────────────────────────── */}
      <section id="subjects" className="relative z-10 px-6 md:px-16 py-14 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">All classes. All chapters.</h2>
            <p className="text-slate-500 text-sm">78 chapters · 2 subjects · Classes 6, 7 &amp; 8</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {classData.map(c => (
              <Link key={c.num} href={`/class/${c.num}`}
                className="glass-card p-6 block group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${c.color}18`, border: `1px solid ${c.color}33` }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">Class {c.num}</div>
                    <div className="text-xs font-bold px-2 py-0.5 rounded-full inline-block mt-0.5"
                      style={{ background: `${c.color}22`, color: c.color }}>{c.level}</div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-5">{c.desc}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-base"
                      style={{ background: "rgba(124,58,237,0.15)" }}>🔢</span>
                    <span className="text-slate-400 font-medium">Mathematics</span>
                    <span className="ml-auto text-slate-600">{c.maths} chapters</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-base"
                      style={{ background: "rgba(6,182,212,0.15)" }}>🔬</span>
                    <span className="text-slate-400 font-medium">Science</span>
                    <span className="ml-auto text-slate-600">{c.sci} chapters</span>
                  </div>
                </div>
                <div className="mt-4 text-xs font-bold group-hover:translate-x-1 transition-transform"
                  style={{ color: c.color }}>Explore Class {c.num} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────── */}
      <section id="social" className="relative z-10 px-6 md:px-16 py-14 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Students love Nucleus</h2>
            <p className="text-slate-500 text-sm">Real results from real students across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-2xl"
                      style={{ background: "rgba(124,58,237,0.15)" }}>{t.avatar}</div>
                    <div>
                      <div className="font-bold text-white text-sm leading-tight">{t.name}</div>
                      <div className="text-[10px] text-slate-600 mt-0.5">{t.cls}</div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full text-xs font-black"
                    style={{ background: "rgba(124,58,237,0.2)", color: "#A855F7" }}>{t.score}</div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex gap-0.5 mt-4">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────── */}
      <section id="pricing" className="relative z-10 px-6 md:px-16 py-14 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Simple, honest pricing</h2>
            <p className="text-slate-500 text-sm">Start free. Upgrade when you&apos;re ready.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Free */}
            <div className="glass-card p-7">
              <div className="text-sm font-bold text-slate-400 mb-1">Free Forever</div>
              <div className="text-4xl font-black gradient-text mb-1">₹0</div>
              <div className="text-xs text-slate-600 mb-6">No credit card needed</div>
              <div className="space-y-2.5 mb-7">
                {["Browse all 78 chapters","Read all chapter notes","Snippet flashcards","Basic progress tracking","AI doubt solver (10/day)"].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="text-green-400 font-bold text-xs flex-shrink-0">✓</span>{f}
                  </div>
                ))}
              </div>
              <Link href="/login" className="block w-full py-3 rounded-xl text-sm font-bold text-center glass text-white hover:border-purple-500/40 transition-all">
                Get Started Free
              </Link>
            </div>

            {/* Premium */}
            <div className="p-7 rounded-2xl relative overflow-hidden"
              style={{ background: "linear-gradient(145deg,rgba(124,58,237,0.2),rgba(6,182,212,0.12))", border: "1px solid rgba(124,58,237,0.4)" }}>
              <div className="absolute top-5 right-5 text-[10px] font-black px-2.5 py-1 rounded-full text-white"
                style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>MOST POPULAR</div>
              <div className="text-sm font-bold text-white mb-1">Premium</div>
              <div className="text-4xl font-black gradient-text mb-1">₹999</div>
              <div className="text-xs text-slate-500 mb-6">per year · just ₹83/month</div>
              <div className="space-y-2.5 mb-7">
                {["Everything in Free","All worksheets unlocked","AI doubt solver (unlimited)","Full progress tracking","Study streaks &amp; analytics","Priority support"].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-purple-400 font-bold text-xs flex-shrink-0">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </div>
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

      {/* ── CTA Banner ──────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-16 py-14 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-5">⚛️</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Start your <span className="gradient-text">learning journey</span> today
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
            Join thousands of Class 6–8 students who are studying smarter with Nucleus.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/login"
              className="btn-primary px-8 py-4 rounded-2xl text-base">
              Start Learning Free →
            </Link>
            <Link href="/login"
              className="px-8 py-4 rounded-2xl text-base font-bold glass transition-all"
              style={{ color: "#A855F7" }}>
              Try Demo First
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="relative z-10 px-6 md:px-16 py-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
              style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>⚛️</div>
            <span className="font-bold text-slate-400 text-sm">Nucleus</span>
          </Link>
          <p className="text-xs text-slate-700 text-center">NCERT 2026 · Class 6–8 Maths &amp; Science · Made with ❤️ for Indian students</p>
          <div className="flex gap-5">
            <Link href="/login" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Sign in</Link>
            <Link href="/setup" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Setup</Link>
            <a href="#pricing" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
