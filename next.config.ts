import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
      },
      {
        protocol: 'https',
        hostname: 'image.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'linkedinclone.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'linkedincloneyt.blob.core.windows.net',
      },
    ],
  },
};

export default nextConfig;
