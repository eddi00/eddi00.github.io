/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "es", "ru"],
  },
};

module.exports = nextConfig;
