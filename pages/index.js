import React, { useEffect } from 'react';
import Head from 'next/head';
import GlobalStats from '../components/GlobalStats';
import PRStats from '../components/PRStats';
import {
  initializeGoogleAnalytics,
  registerPageView
} from '../utils/googleAnalytics';
import '../styles/index.css';
// import Footer from "../components/Footer";
// import CountrySelector from '../components/CountrySelector'

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
          content='tVO7fJFTfafW2qp0wTREla4nh8WqI8OfkiKQJKkUCm0'
          key='google-verification'
        />
      </Head>

      <div className='container'>
        <main className='pt-8'>
          <h1 className='text-6xl text-center font-black mb-4'>COVID-19</h1>
          <GlobalStats />
          <PRStats />
          {/* <CountrySelector /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default IndexPage;
