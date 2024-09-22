/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash:true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "i.ibb.co",
      "i.postimg.cc",
      "localhost",
      "localhost:8080",
      "http://localhost:8080",
    ],
  },
};

module.exports = nextConfig;
