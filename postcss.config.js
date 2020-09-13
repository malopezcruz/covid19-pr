module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: ['./components/**/*.js', './pages/**/*.js'],
            whitelist: [
              'grid-cols-3',
              'grid-cols-4',
              'row-span-2',
              'row-span-1',
              'sm:mx-auto',
              'md:w-5/6',
              'lg:4/6',
              'md:gap-8',
              'divide-x',
              'sm:mb-10',
              'md:w-64',
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
};
