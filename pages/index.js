import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../utils/addFontAwesome.js';
import Rt from '../components/Rt';
import Cases from '../components/Cases';
import Fatalities from '../components/Fatalities';
// import Growth from '../components/Growth';
import Summary from '../components/Summary';
import Municipalities from '../components/Municipalities';

const IndexPage = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' className='next-head' />
        <title>Puerto Rico | COVID-19</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
        <meta
          name='Description'
          content='Datos sobre la epidemia de COVID-19 en Puerto Rico y el mundo'
          key='description'
        />
        <meta
          name='google-site-verification'
          content='lTpqBCergZq6yQ5wE84edCzI-GBbt3jH0Dm9obawfxY'
          key='google'
        />
      </Head>
      <Head>
        <link rel='shortcut icon' href='favicon.ico' key='favicon' />
        <link rel='manifest' href='manifest.json'></link>
        <link
          href='icons/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='icons/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='icons/apple-icon.png'></link>
        <meta name='theme-color' content='#2a4365' />
        <link
          rel='preload'
          as='font'
          href='fonts/lato-v16-latin-regular.woff2'
          type='font/woff2'
          crossOrigin=''
          key='woff2'
        />
        <link
          rel='preload'
          as='font'
          href='fonts/lato-v16-latin-regular.woff'
          type='font/woff'
          crossOrigin=''
          key='woff'
        />
        <link
          rel='preload'
          as='font'
          href='fonts/lato-v16-latin-900.woff2'
          type='font/woff2'
          crossOrigin=''
          key='woff2'
        />
        <link
          rel='preload'
          as='font'
          href='fonts/lato-v16-latin-900.woff'
          type='font/woff'
          crossOrigin=''
          key='woff'
        />
      </Head>

      <div className='flex flex-col min-h-screen text-bodytext'>
        <Header />
        <div className='w-full max-w-screen-lg px-4 mx-auto flex-grow mt-6'>
          <Summary />
          <hr className='mb-12 md:mb-20 border-hr' />
          <Rt />
          <hr className='mb-12 md:mb-20 border-hr' />
          {/* <Growth />
          <hr className='mb-12 md:mb-20 border-hr' /> */}
          <Cases />
          <hr className='mb-12 md:mb-20 boerder-hr' />
          <Fatalities />
          <hr className='mb-12 md:mb-20 boerder-hr' />
          <Municipalities />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
