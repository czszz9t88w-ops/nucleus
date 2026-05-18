import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nucleus — Learn Smarter",
  description: "NCERT 2026 Class 6-8 Maths & Science · Video lessons, notes, worksheets, AI tutor",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Nucleus" },
};

export const viewport: Viewport = {
  themeColor: "#06070F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
