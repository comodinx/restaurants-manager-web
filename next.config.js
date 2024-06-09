/** @type {import("next").NextConfig} */
const pkg = require("./package.json");

const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  assetPrefix: process.env.ASSETS_URL,
  env: {
    APP_ENV: process.env.APP_ENV || process.env.NODE_ENV,
    APP_NAME: pkg.name,
    APP_DESCRIPTION: pkg.description,
    APP_VERSION: pkg.version,
    API_URL: process.env.API_URL
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      // "/search": { page: "/", query: {} },
    };
  },
}

module.exports = nextConfig;
