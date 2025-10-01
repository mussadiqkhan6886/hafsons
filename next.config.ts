import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
 images: {
    remotePatterns: [new URL('https://unsplash.com/**')],
  },
};

export default nextConfig;
