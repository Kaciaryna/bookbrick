import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ["pages", "utils", "components"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  output: "export",
};

export default nextConfig;
