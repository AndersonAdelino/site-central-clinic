import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // removed output: export to let Vercel handle standard Next.js behavior
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;
