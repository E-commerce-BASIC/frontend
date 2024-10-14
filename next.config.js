/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "i.ibb.co",
      "i.postimg.cc",
      "localhost",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/invoices/:path*",
        destination: "http://localhost:8080/invoices/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
