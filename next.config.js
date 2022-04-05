/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    disableStaticImages: true

  },
};

module.exports = nextConfig;
