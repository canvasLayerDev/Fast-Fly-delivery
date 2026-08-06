import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,

  // ── Image Optimization ──────────────────────────────────────────────────────
  // Deliver WebP/AVIF automatically, compress aggressively, cache 1 year
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
