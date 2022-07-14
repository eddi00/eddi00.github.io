const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "es", "ru"],
  },
};

module.exports = {
  nextConfig,
  assetPrefix: isProd ? '/your-github-repo-name/' : ''
};
