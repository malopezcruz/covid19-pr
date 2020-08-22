import React, { useState } from 'react';
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
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className='mb-12 md:mb-24'>
      <header className='mb-2 sm:mb-6'>
        <h2 className='text-xl mb-1 sm:mb-2 md:text-3xl text-blue-900 font-semibold leading-tight uppercase'>
          Incidencia de casos
        </h2>
        <p className='text-lg md:text-2xl font-bold text-subtitle'>
          {' '}
          (n = {formatNumber(totalCases)})
        </p>
      </header>

      {/* Tab */}
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-6 flex-row justify-between sm:justify-start'
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
                href='#link1'
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
                href='#link2'
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
                href='#link3'
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
                href='#link4'
                role='tablist'
              >
                Mensual
              </a>
            </li>
          </ul>
          {/* tabPanel */}
          <div className='relative flex flex-col min-w-0 break-words w-full'>
            <div className='pt-4 flex-auto'>
              <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                <BarPlot data={daily_cases} caption='' />
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                <BarPlot data={weekly_cases} caption='' />
              </div>
              <div className={openTab === 3 ? 'block' : 'hidden'} id='link3'>
                <BarPlot data={twoweeks_cases} caption='' />
              </div>
              <div className={openTab === 4 ? 'block' : 'hidden'} id='link4'>
                <BarPlot data={monthly_cases} caption='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
