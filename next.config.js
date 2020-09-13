const withCSS = require('@zeit/next-css');
module.exports = withCSS();
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';
module.exports = withPWA({
  pwa: {
    disable: !isProd,
    dest: 'public',
  },
});
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({});
