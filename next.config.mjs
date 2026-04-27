import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
