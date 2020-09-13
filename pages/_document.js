import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const pageTitle = 'COVID-19 PR';
    const description =
      'Datos sobre COVID-19 en Puerto Rico: número reproductivo efectivo, crecimiento, incidencia de casos confirmados y muertes, municipios.';
    const siteImage = 'https://covid19pr.now.sh/icons/icon-512x512.png';

    return (
      <Html lang='es'>
        <Head>
          <meta charSet='utf-8' className='next-head' />
          <meta name='Description' content={description} key='description' />
          <meta
            name='google-site-verification'
            content='lTpqBCergZq6yQ5wE84edCzI-GBbt3jH0Dm9obawfxY'
            key='google'
          />
          <meta name='application-name' content={pageTitle} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          {/* Twitter */}
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta name='twitter:creator' content='@malopezcruz' key='twhandle' />
          <meta name='twitter:image' content={siteImage} key='twimage' />

          {/* Open Graph */}
          <meta
            property='og:url'
            content='https://covid19pr.now.sh'
            key='ogurl'
          />
          <meta property='og:image' content={siteImage} key='ogimage' />
          <meta property='og:site_name' content={pageTitle} key='ogsitename' />
          <meta property='og:title' content={pageTitle} key='ogtitle' />
          <meta property='og:description' content={description} key='ogdesc' />

          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content={pageTitle} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <link rel='shortcut icon' href='favicon.ico' key='favicon' />
          <link rel='manifest' href='manifest.json' />
          <link
            href='icons/icon-192x192.png'
            rel='icon'
            type='image/png'
            sizes='192x192'
          />
          <link
            href='icons/icon-512x512.png'
            rel='icon'
            type='image/png'
            sizes='192x192'
          />
          <link rel='apple-touch-icon' href='/icons/icon-512x512.png'></link>
          <meta name='theme-color' content='#2a4365' />
          <link
            rel='preload'
            as='font'
            href='fonts/lato-v16-latin-regular.woff2'
            type='font/woff2'
            crossOrigin=''
            key='regwoff2'
          />
          <link
            rel='preload'
            as='font'
            href='fonts/lato-v16-latin-regular.woff'
            type='font/woff'
            crossOrigin=''
            key='regwoff'
          />
          <link
            rel='preload'
            as='font'
            href='fonts/lato-v16-latin-900.woff2'
            type='font/woff2'
            crossOrigin=''
            key='boldwoff2'
          />
          <link
            rel='preload'
            as='font'
            href='fonts/lato-v16-latin-900.woff'
            type='font/woff'
            crossOrigin=''
            key='boldwoff'
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id="UA-2126086-12"`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-2126086-12', {
    page_path: window.location.pathname,
    cookie_flags: 'max-age=7200;secure;samesite=none',
  })`,
            }}
          />
        </Head>
        <body className='h-full antialiased text-bodytext'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
