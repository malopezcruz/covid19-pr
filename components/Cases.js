import React from 'react';
import { formatNumber } from '../utils/utils';
import BarPlot from '../components/BarPlot';
import daily_cases from '../data/daily_cases.json';
import weekly_cases from '../data/weekly_cases.json';
import twoweeks_cases from '../data/twoweeks_cases.json';
import monthly_cases from '../data/monthly_cases.json';

const totalCases = monthly_cases
  .map((item) => item.counts)
  .reduce((prev, next) => prev + next);

export default function Cases() {
  return (
    <section className='mt-2 md:mt-8  mb-12 md:mb-20'>
      <h2 className='text-2xl md:text-4xl text-blue-900 font-semibold mb-4 leading-tight'>
        Incidencia de casos (n = {formatNumber(totalCases)})
      </h2>

      <div className='grid lg:grid-cols-2 lg:gap-2'>
        <article>
          <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
            Diaria
          </h3>
          <BarPlot data={daily_cases} caption='' />
        </article>

        <article>
          <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
            Semanal
          </h3>
          <BarPlot data={weekly_cases} caption='' />
        </article>

        <article>
          <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
            14 días{' '}
          </h3>
          <BarPlot data={twoweeks_cases} caption='' />
        </article>

        <article>
          <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
            Mensual
          </h3>
          <BarPlot data={monthly_cases} caption='' />
        </article>
      </div>
    </section>
  );
}
