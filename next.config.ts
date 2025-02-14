import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true, // Opcional, para forzar URLs con "/"
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/index.html",
      },
    ];
  },
};

export default nextConfig;
