import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <>
        <Component {...pageProps} />
        <style jsx global>{`
          @font-face {
            font-family: 'Lato';
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+000-5FF;
            src: local('Lato Regular'),
              url('/fonts/lato-v16-latin-regular.woff2') format('woff2'),
              url('/fonts/lato-v16-latin-regular.woff') format('woff');
          }
          @font-face {
            font-family: 'Lato';
            font-weight: 900;
            font-style: normal;
            font-display: swap;
            unicode-range: U+000-5FF;
            src: local('Lato Black'), local('Lato-Black'),
              url('/fonts/lato-v16-latin-900.woff2') format('woff2'),
              url('/fonts/lato-v16-latin-900.woff') format('woff');
          }
        `}</style>
      </>
    </div>
  );
};

export default MyApp;
