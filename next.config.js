/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    unoptimized: true,
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "i.ibb.co",
      "i.postimg.cc",
      "localhost",
      "souqbay.com",
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/invoices/:path*",
  //       destination: "https://souqbay.com/invoices/:path*", // Proxy to Backend
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
