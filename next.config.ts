import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";

// next-pwa uses webpack; when Turbopack is active (Next.js 16 default in dev),
// the service worker is built on first `next build` (webpack mode).
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/stream\.mux\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "video-cache",
        expiration: { maxEntries: 10, maxAgeSeconds: 7 * 24 * 60 * 60 },
      },
    },
    {
      urlPattern: /\/api\/content\/.*/i,
      handler: "StaleWhileRevalidate",
      options: { cacheName: "content-cache" },
    },
    {
      urlPattern: /\/api\/user\/.*/i,
      handler: "NetworkFirst",
      options: { cacheName: "user-cache" },
    },
  ],
});

const nextConfig: NextConfig = {
  ...(isStaticExport && { output: "export" }),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  turbopack: {},
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [
      { protocol: "https", hostname: "stream.mux.com" },
      { protocol: "https", hostname: "image.mux.com" },
    ],
  },
};

module.exports = isStaticExport ? nextConfig : withPWA(nextConfig);
