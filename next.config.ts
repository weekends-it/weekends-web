import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/services/procurement",
        destination: "/services",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
