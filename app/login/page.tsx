"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Stars from "@/components/Stars";

type Tab = "email" | "phone";
type PhoneStep = "phone" | "otp";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [phoneStep, setPhoneStep] = useState<PhoneStep>("phone");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) { setError("Please fill all fields"); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); router.push("/setup"); }, 800);
  }

  async function handleSendOTP() {
    setError("");
    if (!/^[6-9]\d{9}$/.test(phone)) { setError("Enter a valid 10-digit Indian mobile number"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/send-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone }) });
      if (res.ok) setPhoneStep("otp"); else setError("Failed to send OTP. Try again.");
    } catch { setError("Network error. Try again."); }
    finally { setLoading(false); }
  }

  async function handleVerifyOTP() {
    setError("");
    if (otp.length !== 6) { setError("Enter the 6-digit OTP"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone, otp }) });
      const data = await res.json();
      if (res.ok) router.push(data.isNew ? "/setup" : "/home"); else setError("Invalid OTP. Try again.");
    } catch { setError("Network error. Try again."); }
    finally { setLoading(false); }
  }

  return (
    <div className="relative min-h-screen overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      {/* Desktop: two-column split. Mobile: single column with bottom sheet */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">

        {/* ── Left panel — branding (desktop only) ─────────── */}
        <div className="hidden md:flex flex-col justify-between w-1/2 px-16 py-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl pulse-glow"
              style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>⚛️</div>
            <span className="text-xl font-black gradient-text">Nucleus</span>
          </Link>

          <div>
            <div className="text-7xl mb-8">⚛️</div>
            <h1 className="text-4xl font-black text-white leading-tight mb-4">
              Welcome back to<br />
              <span className="gradient-text">your universe.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Continue your NCERT 2026 journey.<br />
              Class 6–8 · Maths &amp; Science.
            </p>
            <div className="space-y-3">
              {["📝 Summarised notes & flashcards","💡 Snippets & term definitions","✅ MCQ + Q&A worksheets","🤖 AI doubt solver"].map(f => (
                <div key={f} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="text-purple-400">✓</span>{f}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-600">NCERT 2026 · Ganita Prakash &amp; Curiosity · CBSE aligned</p>
        </div>

        {/* ── Right panel — form ───────────────────────────── */}
        {/* Mobile: slides up from bottom. Desktop: centered in right half */}
        <div className="flex-1 flex flex-col justify-end md:justify-center md:items-center px-0 md:px-16 pt-16 md:pt-0">

          {/* Mobile: top branding */}
          <div className="md:hidden text-center pb-8 px-4">
            <div className="text-5xl mb-3">⚛️</div>
            <h1 className="text-3xl font-black gradient-text">Nucleus</h1>
            <p className="text-slate-500 text-sm mt-1">Sign in to continue learning</p>
          </div>

          <div className="w-full md:max-w-md rounded-t-3xl md:rounded-2xl px-6 md:px-8 pt-7 pb-10 md:py-10"
            style={{ background: "#0D1030", border: "1px solid rgba(255,255,255,0.08)", borderBottom: "none", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            // Desktop overrides via tailwind
          >
            <div className="md:hidden" /> {/* spacer for mobile */}

            <h2 className="hidden md:block text-2xl font-black text-white mb-2">Sign in</h2>
            <p className="hidden md:block text-slate-500 text-sm mb-6">Enter your credentials to access Nucleus</p>

            {/* Tab switcher */}
            <div className="flex glass rounded-xl p-1 mb-6">
              {(["email","phone"] as Tab[]).map(t => (
                <button key={t} onClick={() => { setTab(t); setError(""); setPhoneStep("phone"); }}
                  className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{ background: tab===t ? "linear-gradient(135deg,#7C3AED,#06B6D4)" : "transparent", color: tab===t ? "#fff" : "#64748B" }}>
                  {t === "email" ? "📧 Email" : "📱 Phone OTP"}
                </button>
              ))}
            </div>

            {/* Email form */}
            {tab === "email" && (
              <form onSubmit={handleEmailLogin} className="space-y-3">
                <input type="email" placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" disabled={loading}
                  className="w-full py-4 rounded-2xl font-bold text-lg text-white disabled:opacity-50 transition-transform active:scale-95"
                  style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                  {loading ? "Signing in…" : "Sign In →"}
                </button>
              </form>
            )}

            {/* Phone OTP form */}
            {tab === "phone" && phoneStep === "phone" && (
              <div className="space-y-3">
                <div className="flex gap-2">
                  <span className="flex items-center px-3 py-3 rounded-xl text-slate-400 text-sm font-semibold"
                    style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }}>+91</span>
                  <input type="tel" inputMode="numeric" maxLength={10} placeholder="10-digit mobile number"
                    value={phone} onChange={e=>setPhone(e.target.value.replace(/\D/g,""))}
                    className="flex-1 px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-lg tracking-wider"
                    style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button onClick={handleSendOTP} disabled={loading || phone.length!==10}
                  className="w-full py-4 rounded-2xl font-bold text-lg text-white disabled:opacity-50 transition-transform active:scale-95"
                  style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                  {loading ? "Sending OTP…" : "Send OTP →"}
                </button>
              </div>
            )}

            {tab === "phone" && phoneStep === "otp" && (
              <div className="space-y-3">
                <p className="text-slate-400 text-sm text-center">OTP sent to +91 {phone}</p>
                <input type="tel" inputMode="numeric" maxLength={6} placeholder="Enter 6-digit OTP"
                  value={otp} onChange={e=>setOtp(e.target.value.replace(/\D/g,""))}
                  className="w-full px-4 py-4 rounded-xl text-white text-3xl text-center tracking-[0.4em] placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button onClick={handleVerifyOTP} disabled={loading||otp.length!==6}
                  className="w-full py-4 rounded-2xl font-bold text-lg text-white disabled:opacity-50 transition-transform active:scale-95"
                  style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                  {loading ? "Verifying…" : "Verify & Continue →"}
                </button>
                <button onClick={()=>setPhoneStep("phone")} className="w-full text-slate-500 text-sm py-2">← Change number</button>
              </div>
            )}

            <p className="text-center text-slate-600 text-xs mt-6">
              New student?{" "}
              <Link href="/setup" className="text-purple-400 underline">Set up profile</Link>
            </p>

            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <button
                onClick={() => {
                  localStorage.setItem("nucleus_profile", JSON.stringify({ name: "Demo Student", class: 6 }));
                  router.push("/home");
                }}
                className="w-full py-3 rounded-2xl font-semibold text-sm transition-all active:scale-95 hover:border-slate-500/50"
                style={{ background:"rgba(255,255,255,0.04)", color:"#94A3B8", border:"1px solid rgba(255,255,255,0.08)" }}>
                Try Demo (no login needed) →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
