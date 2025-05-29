import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bpfu0bkym0.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
