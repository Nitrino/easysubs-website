const { languages, defaultLanguage } = require('./appSettings');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

console.log('next.config.js loaded', { languages, defaultLanguage });