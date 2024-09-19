/** @type {import('next').NextConfig} */
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.tebi.io",
        port: "",
        pathname: "/test1345/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply cache-control headers to static assets
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
            key: "CDN-Cache-Control",
            value: "public, max-age=31536000, immutable",
            // Cache for 1 year
          },
        ],
      },
    ];
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}
export default nextConfig;
