import React, { useEffect } from 'react';
import Head from 'next/head';
import GlobalStats from '../components/GlobalStats';
import PRStats from '../components/PRStats';
import USStats from '../components/USStats';
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
        <title>Puerto Rico | COVID-19</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
      </Head>
      <Head>
        <meta
          name='Description'
          content='Datos sobre la epidemia de COVID-19 en Puerto Rico y el mundo'
          key='description'
        />
      </Head>
      <Head>
        <meta
          name='google-site-verification'
          content='lTpqBCergZq6yQ5wE84edCzI-GBbt3jH0Dm9obawfxY'
          key='google'
        />
      </Head>
      <Head>
        <link rel='shortcut icon' href='/public/favicon.ico' key='favicon' />
      </Head>
      <Head>
        <link
          rel='preload'
          as='font'
          href='../public/fonts/lato-v16-latin-regular.woff2'
          type='font/woff2'
          crossorigin=''
          key='woff2'
        />
      </Head>
      <Head>
        <link
          rel='preload'
          as='font'
          href='../public/fonts/lato-v16-latin-regular.woff'
          type='font/woff'
          crossorigin=''
          key='woff'
        />
      </Head>

      <div className='min-h-screen flex flex-col pt-6'>
        <div className='container flex-grow'>
          <h1 className='text-5xl text-center font-black mb-4'>COVID-19</h1>
          <GlobalStats />
          <div className='grid mb-8 lg:mb-16 lg:grid-cols-2 lg:gap-10'>
            <PRStats />
            <USStats />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
