import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { formatNumber } from '../utils/utils';

const Summary = () => {
  const { totalcases, totaldeaths, r_conf, interval, reportDate } = useContext(
    DataContext
  );

  return (
    <section className='mt-6 md:mt-8 mb-16 md:mb-20'>
      <h2 className='text-xl md:text-3xl text-blue-900 font-semibold mb-8 md:mb-12 leading-tight uppercase'>
        RESUMEN{' '}
        <span className='ml-1  text-blue-900 opacity-75 text-base md:text-lg'>
          {reportDate}
        </span>
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8'>
        <div className='col-span-2 sm:col-span-1 shadow-md rounded p-4 border-t-8 border-blue-800'>
          <div className='font-semibold text-center text-blue-900 mb-2'>
            <em>R</em>
            <sub>t</sub>
          </div>
          <p className='text-2xl sm:text-3xl  text-blue-900 opacity-75 text-center mb-2 tracking-wide'>
            <strong>{interval[0]}</strong> &#8211;{' '}
            <strong>{interval[1]}</strong>
          </p>
        </div>
        <div className='col-span-2 sm:col-span-1 shadow-md rounded p-4 border-t-8 border-blue-800'>
          <div className='uppercase font-semibold text-center text-blue-900 mb-2'>
            Crecimiento
          </div>
          <p className='text-2xl sm:text-3xl  text-blue-900 opacity-75 text-center mb-2 tracking-wide'>
            <strong>{Math.round(r_conf[0] * 100)}%</strong> &#8211;{' '}
            <strong>{Math.round(r_conf[1] * 100)}%</strong>
          </p>
        </div>
        <div className='col-span-1 shadow-md rounded p-4 border-t-8 border-blue-800'>
          <div className='font-semibold text-center uppercase text-blue-900 mb-2 leading-tight'>
            Casos <br className='block md:hidden'></br>confirmados
          </div>
          <p className='text-2xl sm:text-3xl  text-blue-900 opacity-75 text-center mb-2 tracking-wide'>
            <strong>{formatNumber(totalcases)}</strong>
          </p>
        </div>
        <div className='col-span-1 shadow-md rounded p-4 border-t-8 border-blue-800'>
          <div className='uppercase font-semibold text-center text-blue-900 leading-tight mb-2'>
            Muertes <br className='block md:hidden'></br>
            totales
          </div>
          <p className='text-2xl sm:text-3xl  text-blue-900 opacity-75 text-center mb-2 tracking-wide'>
            <strong>{formatNumber(totaldeaths)}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
