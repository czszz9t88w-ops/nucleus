"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#06070F", color: "#E2E8F0", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ textAlign: "center", padding: "32px" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>⚠️</div>
          <h2 style={{ fontWeight: 900, fontSize: "20px", marginBottom: "8px" }}>Something went wrong</h2>
          <p style={{ color: "#64748B", fontSize: "14px", marginBottom: "24px" }}>A critical error occurred. Please refresh the page.</p>
          <button onClick={reset}
            style={{ padding: "12px 28px", borderRadius: "12px", background: "linear-gradient(135deg,#7C3AED,#06B6D4)", color: "white", fontWeight: 700, border: "none", cursor: "pointer", fontSize: "14px" }}>
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
