const withCSS = require('@zeit/next-css');
module.exports = withCSS();
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
});
