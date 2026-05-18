"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Step = "phone" | "otp" | "profile";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState<6 | 7 | 8 | null>(null);
  const [language, setLanguage] = useState<"hi" | "en">("hi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSendOTP() {
    setError("");
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("कृपया सही मोबाइल नंबर डालें / Please enter a valid Indian mobile number");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    setLoading(false);
    if (res.ok) {
      setStep("otp");
    } else {
      setError("OTP भेजने में समस्या / Failed to send OTP");
    }
  }

  async function handleVerifyOTP() {
    setError("");
    setLoading(true);
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, otp }),
    });
    setLoading(false);
    const data = await res.json();
    if (res.ok) {
      if (data.isNew) {
        setStep("profile");
      } else {
        router.push("/dashboard");
      }
    } else {
      setError("गलत OTP / Invalid OTP");
    }
  }

  async function handleProfileSubmit() {
    setError("");
    if (!name.trim() || !studentClass) {
      setError("कृपया सभी जानकारी भरें / Please fill all details");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, otp, name, class: studentClass, language }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/onboarding");
    } else {
      setError("कुछ गड़बड़ हुई / Something went wrong");
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#1A5F8A" }}>
      <div className="flex-1 flex flex-col justify-end">
        <div className="bg-white rounded-t-3xl p-6 pb-10">
          {step === "phone" && (
            <>
              <h2 className="text-2xl font-bold mb-1 text-gray-900">नमस्ते! 👋</h2>
              <p className="text-gray-500 text-sm mb-6">अपना मोबाइल नंबर डालें / Enter your mobile number</p>
              <div className="flex gap-2 mb-4">
                <span className="flex items-center px-3 bg-gray-100 rounded-xl text-gray-600 font-medium">+91</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="10-digit number"
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
              <button
                onClick={handleSendOTP}
                disabled={loading || phone.length !== 10}
                className="w-full py-4 rounded-2xl font-semibold text-lg text-white disabled:opacity-50 transition-transform active:scale-95"
                style={{ background: "#1A5F8A" }}
              >
                {loading ? "भेज रहे हैं..." : "OTP भेजें / Send OTP"}
              </button>
            </>
          )}

          {step === "otp" && (
            <>
              <h2 className="text-2xl font-bold mb-1 text-gray-900">OTP डालें 🔢</h2>
              <p className="text-gray-500 text-sm mb-6">+91 {phone} पर भेजा गया</p>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="6-digit OTP"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl text-2xl text-center tracking-widest mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
              <button
                onClick={handleVerifyOTP}
                disabled={loading || otp.length !== 6}
                className="w-full py-4 rounded-2xl font-semibold text-lg text-white disabled:opacity-50 transition-transform active:scale-95"
                style={{ background: "#1A5F8A" }}
              >
                {loading ? "जांच रहे हैं..." : "सत्यापित करें / Verify"}
              </button>
              <button onClick={() => setStep("phone")} className="w-full mt-3 text-gray-500 text-sm">
                ← वापस जाएं / Go back
              </button>
            </>
          )}

          {step === "profile" && (
            <>
              <h2 className="text-2xl font-bold mb-1 text-gray-900">आपका परिचय 🎓</h2>
              <p className="text-gray-500 text-sm mb-6">Tell us about yourself</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="आपका नाम / Your name"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-600 mb-2 font-medium">आप किस कक्षा में हैं? / Your class?</p>
              <div className="flex gap-3 mb-4">
                {[6, 7, 8].map((c) => (
                  <button
                    key={c}
                    onClick={() => setStudentClass(c as 6 | 7 | 8)}
                    className={`flex-1 py-3 rounded-xl font-semibold text-lg transition-colors ${
                      studentClass === c
                        ? "text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                    style={studentClass === c ? { background: "#1A5F8A" } : {}}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-2 font-medium">भाषा / Language</p>
              <div className="flex gap-3 mb-6">
                {(["hi", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLanguage(l)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                      language === l ? "text-white" : "bg-gray-100 text-gray-600"
                    }`}
                    style={language === l ? { background: "#F5A623" } : {}}
                  >
                    {l === "hi" ? "हिंदी" : "English"}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
              <button
                onClick={handleProfileSubmit}
                disabled={loading}
                className="w-full py-4 rounded-2xl font-semibold text-lg text-white disabled:opacity-50 transition-transform active:scale-95"
                style={{ background: "#1A5F8A" }}
              >
                {loading ? "सहेज रहे हैं..." : "शुरू करें / Let's Go 🚀"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
