/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URI: "https://api.themoviedb.org/3",
    API_KEY: "4656c2d9d974443054773a4f1dbabb01",
    API_IMG_URI: "https://image.tmdb.org/t/p/w500",
    API_IMG_URI_1920: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces",
    API_IMG_URI_ORIG: "https://image.tmdb.org/t/p/original",
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
