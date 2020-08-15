import React from 'react';
import BarPlot from './BarPlot';
import { formatNumber } from '../utils/utils';
import daily_deaths from '../data/daily_deaths.json';
import weekly_deaths from '../data/weekly_deaths.json';
import twoweeks_deaths from '../data/twoweeks_deaths.json';
import monthly_deaths from '../data/monthly_deaths.json';

const totalFatalities = monthly_deaths
  .map((item) => item.counts)
  .reduce((prev, next) => prev + next);

export default function Fatalities() {
  return (
    <section className='mt-2 md:mt-8  mb-12 md:mb-20'>
      <h2 className='text-2xl md:text-4xl text-blue-900 font-semibold mb-4 leading-tight'>
        Muertes (n = {formatNumber(totalFatalities)})
      </h2>

      <div className='grid lg:grid-cols-2 lg:gap-2'>
        <article>
          <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
            Diaria
          </h3>
          <BarPlot data={daily_deaths} caption='' />
        </article>

        <article>
          <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
            Semanal
          </h3>
          <BarPlot data={weekly_deaths} caption='' />
        </article>

        <article>
          <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
            14 días{' '}
          </h3>
          <BarPlot data={twoweeks_deaths} caption='' />
        </article>

        <article>
          <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
            Mensual
          </h3>
          <BarPlot data={monthly_deaths} caption='' />
        </article>
      </div>
    </section>
  );
}
