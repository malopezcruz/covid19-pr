import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../utils/addFontAwesome.js';
import Rt from '../components/Rt';
import Cases from '../components/Cases';
import Fatalities from '../components/Fatalities';
import Growth from '../components/Growth';
import Summary from '../components/Summary';
import Municipalities from '../components/Municipalities';
// import AlertMessage from '../components/AlertMessage';

const IndexPage = () => {
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
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='w-full max-w-screen-lg px-6 mx-auto flex-grow mt-6'>
          {/* <AlertMessage /> */}
          <Summary />
          <hr className='mb-12 md:mb-16 lg:mb-20 border-hr' />
          <Rt />
          <hr className='mb-12 md:mb-16 lg:mb-20 border-hr' />
          <Growth />
          <hr className='mb-12 md:mb-16 lg:mb-20 border-hr' />
          <Cases />
          <hr className='mb-12 md:mb-16 lg:mb-20 border-hr' />
          <Fatalities />
          <hr className='mb-12 md:mb-16 lg:mb-20 border-hr' />
          <Municipalities />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
