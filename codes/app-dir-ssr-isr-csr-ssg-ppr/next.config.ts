import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://cdn.dummyjson.com/**")],
  },
  experimental: {
    ppr: true,
  },
};

export default nextConfig;
