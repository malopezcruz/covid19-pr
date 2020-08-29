const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        green: '#b3e2cd',
        pink: '#f4cae4',
        yellow: '#fdcdac',
        lightgreen: '#e6f5c9',
      }),
      textColor: {
        subtitle: '#666666',
        bodytext: '#222222',
        tabs: '#666666',
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      },
      borderColor: {
        hr: '#e2e2e2',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        250: '250px',
        275: '275px',
        300: '300px',
        325: '325px',
        350: '350px',
        400: '400px',
      },
      spacing: {
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        100: '99.999999%',
        '21/22': '95.5555555',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
