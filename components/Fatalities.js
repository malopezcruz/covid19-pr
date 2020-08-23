import React, { useState } from 'react';
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
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className='mb-12 md:mb-24'>
      <header className='mb-4 sm:mb-6'>
        <h2 className='text-xl mb-2 md:text-3xl text-blue-900 font-semibold leading-tight uppercase'>
          Muertes
          <span className='ml-2 text-lg md:text-2xl font-bold text-subtitle'>
            (<span className='lowercase'>n </span>={' '}
            {formatNumber(totalFatalities)})
          </span>
        </h2>
      </header>

      {/* Tab */}
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex px-6 sm:px-0 mb-0 list-none flex-wrap pt-3 pb-6 flex-row justify-between sm:justify-start'
            role='tablist'
          >
            <li className='-mb-px mr-4 sm:mr-12 last:mr-0 text-center'>
              <a
                className={`text-sm uppercase sm:tracking-widest ${
                  openTab === 1
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium hover:text-subtitle'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#muertes-diarias'
                role='tablist'
              >
                Diaria
              </a>
            </li>
            <li className='-mb-px mr-4 sm:mr-12 last:mr-0 text-center'>
              <a
                className={`text-sm uppercase sm:tracking-widest ${
                  openTab === 2
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium hover:text-subtitle'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#muertes-semanales'
                role='tablist'
              >
                Semanal
              </a>
            </li>
            <li className='-mb-px mr-4 sm:mr-12 last:mr-0 text-center'>
              <a
                className={`text-sm uppercase sm:tracking-widest ${
                  openTab === 3
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium hover:text-subtitle'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#muertes-14dias'
                role='tablist'
              >
                14 días
              </a>
            </li>
            <li className='-mb-px mr-4 sm:mr-12 last:mr-0 text-center'>
              <a
                className={`text-sm uppercase sm:tracking-widest ${
                  openTab === 4
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium hover:text-subtitle'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle='tab'
                href='#muertes-mensuales'
                role='tablist'
              >
                Mensual
              </a>
            </li>
          </ul>
          {/* tabPanel */}
          <div className='relative flex flex-col min-w-0 break-words w-full'>
            <div className='pt-4 flex-auto'>
              <div
                className={openTab === 1 ? 'block' : 'hidden'}
                id='muertes-diarias'
              >
                <BarPlot data={daily_deaths} caption='' />
              </div>
              <div
                className={openTab === 2 ? 'block' : 'hidden'}
                id='muertes-semanales'
              >
                <BarPlot data={weekly_deaths} caption='' />
              </div>
              <div
                className={openTab === 3 ? 'block' : 'hidden'}
                id='muertes-14dias'
              >
                <BarPlot data={twoweeks_deaths} caption='' />
              </div>
              <div
                className={openTab === 4 ? 'block' : 'hidden'}
                id='muertes-mensuales'
              >
                <BarPlot data={monthly_deaths} caption='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
