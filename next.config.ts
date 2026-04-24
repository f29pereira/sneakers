import type { NextConfig } from "next";

const isPlaywright = process.env.PLAYWRIGHT === "true";

const nextConfig: NextConfig = {
  output: "export", // Static export for GitHub Pages
  basePath: isPlaywright ? "" : "/sneakers",
  assetPrefix: isPlaywright ? "" : "/sneakers", // Prefix assets with repo path
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

export default nextConfig;
