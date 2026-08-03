import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // ── Image Optimization ──────────────────────────────────────────────────────
  // Deliver WebP/AVIF automatically, compress aggressively, cache 1 year
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,           // 1 year in seconds
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // ── Compression ─────────────────────────────────────────────────────────────
  compress: true,

  // ── Modern JS output — reduces legacy polyfills ──────────────────────────────
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // ── Headers — long-lived cache for static assets ─────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*\\.(?:jpg|jpeg|png|webp|avif|gif|svg|ico|woff2?))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
