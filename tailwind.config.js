const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' }
      }
    }
  },
  variants: {},
  plugins: []
};
