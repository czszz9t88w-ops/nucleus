"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Stars from "@/components/Stars";

export default function SetupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState<6|7|8|null>(null);
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleSave() {
    setError("");
    if (!name.trim()) { setError("Name is required"); return; }
    if (!studentClass) { setError("Please select your class"); return; }
    setSaving(true);
    localStorage.setItem("nucleus_profile", JSON.stringify({ name: name.trim(), class: studentClass, school, city }));
    setTimeout(() => { setSaving(false); router.push("/home"); }, 600);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      <div className="relative z-10 w-full max-w-lg">
        {/* Back link */}
        <div className="mb-6 flex items-center gap-3">
          <Link href="/login" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">← Back</Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🎓</div>
          <h1 className="text-3xl font-black text-white">Tell us about yourself</h1>
          <p className="text-slate-500 text-sm mt-2">One-time setup · Takes 30 seconds</p>
        </div>

        {/* Card */}
        <div className="glass rounded-2xl px-8 py-8">
          <div className="space-y-5">
            <div>
              <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 block">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input type="text" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
            </div>

            <div>
              <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3 block">
                Your Class <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {([6,7,8] as const).map(c => (
                  <button key={c} onClick={() => setStudentClass(c)}
                    className="py-5 rounded-xl font-black text-3xl transition-all active:scale-95"
                    style={studentClass===c
                      ? { background:"linear-gradient(135deg,#7C3AED,#06B6D4)", color:"#fff" }
                      : { background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", color:"#64748B" }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 block">
                  School <span className="text-slate-600 normal-case font-normal">(optional)</span>
                </label>
                <input type="text" placeholder="School name" value={school} onChange={e=>setSchool(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 block">
                  City <span className="text-slate-600 normal-case font-normal">(optional)</span>
                </label>
                <input type="text" placeholder="Your city" value={city} onChange={e=>setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
              </div>
            </div>
          </div>

          {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

          <button onClick={handleSave} disabled={saving}
            className="w-full py-4 rounded-2xl font-bold text-lg text-white disabled:opacity-50 transition-all active:scale-95 mt-6 hover:opacity-90"
            style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
            {saving ? "Saving…" : "Enter Nucleus 🚀"}
          </button>
        </div>
      </div>
    </div>
  );
}
