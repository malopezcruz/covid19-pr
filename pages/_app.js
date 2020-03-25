import App from 'next/app';
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
        <style jsx global>{`
          @font-face {
            font-family: 'Lato';
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            unicode-range: U+000-5FF; /* Download only latin glyphs */
            src: local('Lato Regular'),
              url('../public/fonts/lato-v16-latin-regular.woff2')
                format('woff2'),
              url('../public/fonts/lato-v16-latin-regular.woff') format('woff');
          }
        `}</style>
      </div>
    );
  }
}
export default MyApp;
