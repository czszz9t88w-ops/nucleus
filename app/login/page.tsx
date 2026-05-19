"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Stars from "@/components/Stars";

type Tab = "email" | "google";

async function firebaseEmailAuth(email: string, password: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const { getFirebaseAuth, isFirebaseConfigured } = await import("@/lib/firebase");
    if (!isFirebaseConfigured) return { ok: false, error: "firebase_not_configured" };
    const auth = getFirebaseAuth();
    if (!auth) return { ok: false, error: "firebase_not_configured" };
    const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = await import("firebase/auth");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (signInErr: unknown) {
      const code = (signInErr as { code?: string }).code;
      if (code === "auth/user-not-found" || code === "auth/invalid-credential") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        throw signInErr;
      }
    }
    return { ok: true };
  } catch (err: unknown) {
    const code = (err as { code?: string }).code;
    if (code === "auth/wrong-password" || code === "auth/invalid-credential") return { ok: false, error: "Wrong password." };
    if (code === "auth/invalid-email") return { ok: false, error: "Invalid email address." };
    if (code === "auth/weak-password") return { ok: false, error: "Password must be at least 6 characters." };
    return { ok: false, error: "Something went wrong. Try again." };
  }
}

async function firebaseGoogleAuth(): Promise<{ ok: boolean; name?: string; error?: string }> {
  try {
    const { getFirebaseAuth, isFirebaseConfigured } = await import("@/lib/firebase");
    if (!isFirebaseConfigured) return { ok: false, error: "firebase_not_configured" };
    const auth = getFirebaseAuth();
    if (!auth) return { ok: false, error: "firebase_not_configured" };
    const { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth");
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    return { ok: true, name: result.user.displayName ?? "" };
  } catch (err: unknown) {
    const code = (err as { code?: string }).code;
    if (code === "auth/popup-closed-by-user") return { ok: false, error: "" };
    return { ok: false, error: "Google sign-in failed. Try again." };
  }
}

function hasProfile(): boolean {
  try { return !!localStorage.getItem("nucleus_profile"); } catch { return false; }
}

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function afterAuth(name?: string) {
    if (!hasProfile()) {
      if (name) localStorage.setItem("nucleus_profile", JSON.stringify({ name }));
      router.push("/setup");
    } else {
      router.push("/home");
    }
  }

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) { setError("Please fill all fields"); return; }
    setLoading(true);
    const result = await firebaseEmailAuth(email, password);
    setLoading(false);
    if (result.ok) {
      afterAuth();
    } else if (result.error === "firebase_not_configured") {
      afterAuth();
    } else {
      setError(result.error ?? "Sign-in failed");
    }
  }

  async function handleGoogle() {
    setError("");
    setLoading(true);
    const result = await firebaseGoogleAuth();
    setLoading(false);
    if (result.ok) {
      afterAuth(result.name);
    } else if (result.error === "firebase_not_configured") {
      afterAuth();
    } else if (result.error) {
      setError(result.error);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #0F0820 0%, #06070F 60%)" }}>
      <Stars />

      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">

        {/* Left panel — branding (desktop only) */}
        <div className="hidden md:flex flex-col justify-between w-1/2 px-16 py-12">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl pulse-glow"
              style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>⚛️</div>
            <span className="text-xl font-black gradient-text tracking-tight">Nucleus</span>
          </Link>

          <div>
            <div className="text-7xl mb-8 float">⚛️</div>
            <h1 className="text-4xl font-black text-white leading-tight mb-4">
              Welcome back to<br />
              <span className="gradient-text">your universe.</span>
            </h1>
            <p className="text-slate-500 text-base mb-8 leading-relaxed max-w-sm">
              Continue your NCERT 2026 journey.<br />
              Class 6–8 · Maths &amp; Science.
            </p>
            <div className="space-y-3">
              {[
                "📝 Summarised notes & chapter snippets",
                "✅ MCQ + Q&A worksheets (CBSE format)",
                "🤖 AI doubt solver at your level",
                "📊 Visual progress & study streaks",
              ].map(f => (
                <div key={f} className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="text-purple-400 font-bold">✓</span>{f}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-700">NCERT 2026 · Ganita Prakash &amp; Curiosity · CBSE aligned</p>
        </div>

        {/* Right panel — form */}
        <div className="flex-1 flex flex-col justify-end md:justify-center md:items-center px-0 md:px-16 pt-16 md:pt-0">

          {/* Mobile: top branding */}
          <div className="md:hidden text-center pb-8 px-4">
            <div className="text-5xl mb-3">⚛️</div>
            <h1 className="text-3xl font-black gradient-text tracking-tight">Nucleus</h1>
            <p className="text-slate-600 text-sm mt-1">NCERT 2026 · Class 6–8</p>
          </div>

          <div className="w-full md:max-w-md rounded-t-3xl md:rounded-2xl px-6 md:px-8 pt-8 pb-10 md:py-10"
            style={{ background: "#0A0B1A", border: "1px solid rgba(255,255,255,0.08)", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>

            <h2 className="hidden md:block text-2xl font-black text-white mb-1">Sign in</h2>
            <p className="hidden md:block text-slate-600 text-sm mb-6">Access your Nucleus account</p>

            {/* Tab switcher */}
            <div className="flex glass rounded-xl p-1 mb-6">
              {(["email","google"] as Tab[]).map(t => (
                <button key={t} onClick={() => { setTab(t); setError(""); }}
                  className="flex-1 py-2.5 rounded-lg text-sm font-bold transition-all"
                  style={{
                    background: tab===t ? "linear-gradient(135deg,#7C3AED,#06B6D4)" : "transparent",
                    color: tab===t ? "#fff" : "#64748B"
                  }}>
                  {t === "email" ? "📧 Email" : "🔵 Google"}
                </button>
              ))}
            </div>

            {/* Email form */}
            {tab === "email" && (
              <form onSubmit={handleEmailLogin} className="space-y-3">
                <input type="email" placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl text-white placeholder-slate-600 text-sm"
                  style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)" }} />
                <input type="password" placeholder="Password (min 6 characters)" value={password} onChange={e=>setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl text-white placeholder-slate-600 text-sm"
                  style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)" }} />
                {error && <p className="text-red-400 text-xs">{error}</p>}
                <button type="submit" disabled={loading}
                  className="btn-primary w-full py-3.5 rounded-xl text-sm disabled:opacity-50">
                  {loading ? "Signing in…" : "Sign In / Register →"}
                </button>
                <p className="text-[10px] text-slate-700 text-center">New account created automatically if email not found</p>
              </form>
            )}

            {/* Google sign-in */}
            {tab === "google" && (
              <div className="space-y-4">
                <p className="text-slate-500 text-sm text-center">Sign in with your Google account — no password needed.</p>
                {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                <button onClick={handleGoogle} disabled={loading}
                  className="btn-primary w-full py-3.5 rounded-xl text-sm disabled:opacity-50 flex items-center justify-center gap-3">
                  {loading ? "Opening Google…" : (
                    <><span className="text-xl">🔵</span> Continue with Google</>
                  )}
                </button>
              </div>
            )}

            <div className="my-5 divider" />

            {/* Demo button */}
            <button
              onClick={() => {
                localStorage.setItem("nucleus_profile", JSON.stringify({ name: "Demo Student", class: 6 }));
                router.push("/home");
              }}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.97]"
              style={{ background:"rgba(255,255,255,0.04)", color:"#64748B", border:"1px solid rgba(255,255,255,0.08)" }}>
              Start Learning with Premium →
            </button>

            <p className="text-center text-slate-700 text-xs mt-5">
              First time?{" "}
              <Link href="/setup" className="text-purple-400 underline underline-offset-2">Set up profile directly</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
