import React, { useEffect } from 'react';
import Head from 'next/head';
import GlobalStats from '../components/GlobalStats';
import PRStats from '../components/PRStats';
import USStats from '../components/USStats';
import PRStatsTest from '../components/PRStatsTest';
import Footer from '../components/Footer';
import {
  initializeGoogleAnalytics,
  registerPageView
} from '../utils/googleAnalytics';
import '../styles/index.css';
import '../utils/addFontAwesome.js';

const IndexPage = () => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGoogleAnalytics();
      window.GA_INITIALIZED = true;
    }
    registerPageView();
  });

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

      <div className='flex flex-col min-h-screen'>
        <div className='w-full max-w-screen-lg px-4 mx-auto flex-grow mt-6'>
          <h1 className='text-2xl lg:text-3xl text-left font-black mb-4'>
            COVID-19
          </h1>
          <div className='mt-8 mb-12 lg:mt-16 lg:mb-16 px-4 py-6 md:px-8 md:py-12 border border-gray-400 rounded-lg shadow-md'>
            <PRStats />
            <PRStatsTest />
          </div>
          <GlobalStats />
          <USStats />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
