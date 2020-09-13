import React, { useState } from 'react';
import { formatNumber } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BarPlot from './BarPlot';
import Source from './Source';
import daily_deaths from '../data/daily_deaths.json';
import weekly_deaths from '../data/weekly_deaths.json';
import twoweeks_deaths from '../data/twoweeks_deaths.json';
import monthly_deaths from '../data/monthly_deaths.json';

const Fatalities = () => {
  const [openTab, setOpenTab] = useState(1);

  const totalFatalities = daily_deaths
    .map((item) => item.counts)
    .reduce((prev, next) => prev + next);

  return (
    <section className='mb-12 md:mb-16 lg:mb-24'>
      <header className='mb-4 sm:mb-6'>
        <h2 className='text-xl mb-2 md:text-3xl text-blue-900 font-semibold leading-tight uppercase'>
          Muertes totales
          <span className='ml-2 text-lg md:text-2xl font-bold text-blue-900 opacity-75'>
            (<span className='lowercase'>n </span>={' '}
            {formatNumber(totalFatalities)})
          </span>
        </h2>
      </header>

      {/* Tab */}
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-6 flex-row justify-between sm:justify-start'
            role='tablist'
          >
            <li
              className='-mb-px xsm:mr-2 sm:mr-12 last:mr-0 text-center'
              role='tab'
            >
              <a
                className={`text-sm flex items-center content-center uppercase sm:tracking-widest ${
                  openTab === 1
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#muertes-diarias'
                role='tab'
              >
                <FontAwesomeIcon
                  icon={['fa', 'calendar-day']}
                  fixedWidth
                  width='12'
                  className='self-center mr-1 sm:mr-2'
                />
                Diaria
              </a>
            </li>
            <li
              className='-mb-px xsm:mr-2 sm:mr-12 last:mr-0 text-center'
              role='tab'
            >
              <a
                className={`text-sm flex items-center content-center uppercase sm:tracking-widest ${
                  openTab === 2
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium  hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#muertes-semanales'
                role='tab'
              >
                <FontAwesomeIcon
                  icon={['fa', 'calendar-week']}
                  fixedWidth
                  width='12'
                  className='self-center mr-1 sm:mr-2'
                />
                Semanal
              </a>
            </li>
            <li
              className='-mb-px xsm:mr-2 sm:mr-12 last:mr-0 text-center'
              role='tab'
            >
              <a
                className={`text-sm flex items-center content-center uppercase sm:tracking-widest ${
                  openTab === 3
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium  hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#muertes-14dias'
                role='tab'
              >
                <FontAwesomeIcon
                  icon={['fa', 'calendar-times']}
                  fixedWidth
                  width='12'
                  className='self-center mr-1 sm:mr-2'
                />
                14 días
              </a>
            </li>
            <li
              className='-mb-px xsm:mr-2 sm:mr-12 last:mr-0 text-center'
              role='tab'
            >
              <a
                className={`text-sm flex items-center content-center uppercase sm:tracking-widest ${
                  openTab === 4
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium  hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle='tab'
                href='#muertes-mensuales'
                role='tab'
              >
                <FontAwesomeIcon
                  icon={['fa', 'calendar-alt']}
                  fixedWidth
                  width='12'
                  className='self-center mr-1 sm:mr-2'
                />
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
                <BarPlot data={daily_deaths} caption={<Source />} />
              </div>
              <div
                className={openTab === 2 ? 'block' : 'hidden'}
                id='muertes-semanales'
              >
                <BarPlot data={weekly_deaths} caption={<Source />} />
              </div>
              <div
                className={openTab === 3 ? 'block' : 'hidden'}
                id='muertes-14dias'
              >
                <BarPlot data={twoweeks_deaths} caption={<Source />} />
              </div>
              <div
                className={openTab === 4 ? 'block' : 'hidden'}
                id='muertes-mensuales'
              >
                <BarPlot data={monthly_deaths} caption={<Source />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fatalities;
