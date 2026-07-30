import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 160, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/help-center",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/help-center/:slug",
        destination: "/help/:slug",
        permanent: true,
      },
      // Legacy feature slugs now live under their module area from the capability matrix.
      { source: "/features/attendance", destination: "/features/academic/attendance", permanent: true },
      { source: "/features/timetable", destination: "/features/academic/classes-and-sections", permanent: true },
      { source: "/features/discipline-ptm-diary", destination: "/features/academic", permanent: true },
      { source: "/features/fee-management", destination: "/features/finance-and-fee-management", permanent: true },
      { source: "/features/hr-payroll", destination: "/features/hr-and-staff-management", permanent: true },
      { source: "/features/transport", destination: "/features/transport-management", permanent: true },
      { source: "/features/library", destination: "/features/library-management", permanent: true },
      { source: "/features/reports", destination: "/features/reports-and-analytics", permanent: true },
      { source: "/features/reporting-suite", destination: "/features/reports-and-analytics", permanent: true },
      // Role solutions were renamed around the roles the product actually ships.
      { source: "/solutions/school-districts", destination: "/solutions/organizations", permanent: true },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      wouter: path.resolve("./src/lib/wouter-compat.tsx"),
    };

    return config;
  },
};

export default nextConfig;
