import React from 'react';
import { formatNumber, reportDate, formatDateLabel } from '../utils/utils';
import rt from '../data/rt.json';
import rg from '../data/rg.json';
import monthly_deaths from '../data/monthly_deaths.json';
import monthly_cases from '../data/monthly_cases.json';

const Summary = () => {
  const { r_conf } = rg[0];

  const totalCases = monthly_cases
    .map((item) => item.counts)
    .reduce((prev, next) => prev + next);

  const totalFatalities = monthly_deaths
    .map((item) => item.counts)
    .reduce((prev, next) => prev + next);

  const { Intervalo } = rt[rt.length - 1];

  return (
    <section className='mt-6 md:mt-8 mb-16 md:mb-20'>
      <h2 className='text-xl md:text-3xl text-blue-900 font-semibold mb-8 md:mb-12 leading-tight uppercase'>
        RESUMEN{' '}
        <span className='ml-1  text-blue-900 opacity-75 text-base md:text-lg'>
          {formatDateLabel(reportDate)}
        </span>
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8'>
        <div className='col-span-2 sm:col-span-1 shadow-md rounded p-4 border-t-8 border-blue-800'>
          <div className='font-semibold text-center text-blue-900 mb-2'>
            <em>R</em>
            <sub>t</sub>
          </div>
          <p className='text-2xl sm:text-3xl  text-blue-900 opacity-75 text-center mb-2 tracking-wide'>
            <strong>{Intervalo[0]}</strong> &#8211;{' '}
            <strong>{Intervalo[1]}</strong>
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
            <strong>{formatNumber(totalCases)}</strong>
          </p>
        </div>
        <div className='col-span-1 shadow-md rounded p-4 border-t-8 border-blue-800'>
          <div className='uppercase font-semibold text-center text-blue-900 leading-tight mb-2'>
            Muertes <br className='block md:hidden'></br>
            totales
          </div>
          <p className='text-2xl sm:text-3xl  text-blue-900 opacity-75 text-center mb-2 tracking-wide'>
            <strong>{formatNumber(totalFatalities)}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
