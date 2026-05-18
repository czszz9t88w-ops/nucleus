"use client";
import { useState } from "react";
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
    // Save to localStorage for demo; in production: API call + store in DB
    localStorage.setItem("nucleus_profile", JSON.stringify({ name: name.trim(), class: studentClass, school, city }));
    setTimeout(() => { setSaving(false); router.push("/home"); }, 600);
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      <div className="relative z-10 text-center pt-16 pb-8">
        <div className="text-5xl mb-3">🎓</div>
        <h1 className="text-2xl font-black text-white">Tell us about yourself</h1>
        <p className="text-slate-500 text-sm mt-1">One-time setup · Takes 30 seconds</p>
      </div>

      <div className="relative z-10 rounded-t-3xl px-6 pt-6 pb-10"
        style={{ background:"#0D1030", border:"1px solid rgba(255,255,255,0.08)", borderBottom:"none" }}>

        {/* Name */}
        <div className="mb-4">
          <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 block">Full Name *</label>
          <input type="text" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
        </div>

        {/* Class */}
        <div className="mb-4">
          <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 block">Your Class *</label>
          <div className="flex gap-3">
            {([6,7,8] as const).map((c) => (
              <button key={c} onClick={() => setStudentClass(c)}
                className="flex-1 py-4 rounded-xl font-black text-2xl transition-all active:scale-95"
                style={studentClass===c
                  ? { background:"linear-gradient(135deg,#7C3AED,#06B6D4)", color:"#fff" }
                  : { background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", color:"#64748B" }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* School */}
        <div className="mb-4">
          <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 block">School <span className="text-slate-600 normal-case">(optional)</span></label>
          <input type="text" placeholder="School name" value={school} onChange={e=>setSchool(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
        </div>

        {/* City */}
        <div className="mb-6">
          <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1 block">City <span className="text-slate-600 normal-case">(optional)</span></label>
          <input type="text" placeholder="Your city" value={city} onChange={e=>setCity(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }} />
        </div>

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <button onClick={handleSave} disabled={saving}
          className="w-full py-4 rounded-2xl font-bold text-lg text-white disabled:opacity-50 transition-transform active:scale-95"
          style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
          {saving ? "Saving…" : "Enter Nucleus 🚀"}
        </button>
      </div>
    </div>
  );
}
