/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = withPWA(nextConfig);
