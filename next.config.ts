import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  // Live WordPress URLs end with a trailing slash; keep that convention so
  // existing links and search rankings carry over 1:1.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // Legacy WordPress slugs -> new information architecture (permanent).
    return [
      { source: "/poultry-management-solution", destination: "/industries/poultry-agribusiness/", permanent: true },
      { source: "/x-tech-management-solution", destination: "/industries/professional-services/", permanent: true },
      { source: "/x-tech-management-solutionss", destination: "/industries/professional-services/", permanent: true },
      { source: "/middle-east-oracle-netsuite-partner-xelerate-business-solutions-2", destination: "/about/", permanent: true },
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/contact", destination: "/contact-us/", permanent: true },
    ];
  },
};

export default nextConfig;
