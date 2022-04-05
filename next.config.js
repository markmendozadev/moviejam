const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["image.tmdb.org"],
    disableStaticImages: true,
  },
};

module.exports = withPlugins([nextConfig, optimizedImages]);

// module.exports = withPlugins([optimizedImages]);
