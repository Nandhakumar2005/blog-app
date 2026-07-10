import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "6a43c3da6dba791499ab59d7.mockapi.io",
      },
    ],
  },
};

export default nextConfig;