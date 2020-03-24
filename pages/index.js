import React from 'react';
import '../styles/index.css';
import GlobalStats from '../components/GlobalStats';
import PRStats from '../components/PRStats';
// import Footer from "../components/Footer";
// import CountrySelector from '../components/CountrySelector'

const IndexPage = () => {
  return (
    <div className='container'>
      <main className='pt-8'>
        <h1 className='text-6xl text-center font-black mb-4'>COVID-19</h1>
        <GlobalStats />
        <PRStats />
        {/* <CountrySelector /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default IndexPage;
