import React, { useState } from 'react';
import { formatNumber } from '../utils/utils';
import BarPlot from '../components/BarPlot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Source from './Source';
import daily_cases from '../data/daily_cases.json';
import weekly_cases from '../data/weekly_cases.json';
import twoweeks_cases from '../data/twoweeks_cases.json';
import monthly_cases from '../data/monthly_cases.json';

const Cases = () => {
  const totalCases = daily_cases
    .map(({ counts }) => counts)
    .reduce((prev, next) => prev + next);
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className='mb-12 md:mb-16 lg:mb-24'>
      <header className='mb-4 sm:mb-6'>
        <h2 className='text-xl mb-2 md:text-3xl text-blue-900 font-semibold leading-tight uppercase'>
          Casos confirmados
          <span className='ml-2 text-lg md:text-2xl font-bold text-blue-900 opacity-75'>
            (<span className='lowercase'>n </span>= {formatNumber(totalCases)})
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
                className={`text-sm flex uppercase sm:tracking-widest ${
                  openTab === 1
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#casos-diarios'
                role='tab'
              >
                <FontAwesomeIcon
                  icon={['fa', 'calendar-day']}
                  fixedWidth
                  width='12'
                  className='self-center mr-1 sm:mr-2'
                />
                Diario
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
                    : 'text-tabs font-medium hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#casos-semanales'
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
                    : 'text-tabs font-medium hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#casos-14dias'
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
                    : 'text-tabs font-medium hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle='tab'
                href='#casos-mensuales'
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
          <div
            className='relative flex flex-col min-w-0 break-words w-full'
            role='tabpanel'
          >
            <div className='pt-4 flex-auto'>
              <div
                className={openTab === 1 ? 'block' : 'hidden'}
                id='casos-diarios'
              >
                <BarPlot data={daily_cases} caption={<Source />} />
              </div>
              <div
                className={openTab === 2 ? 'block' : 'hidden'}
                id='casos-semanales'
              >
                <BarPlot data={weekly_cases} caption={<Source />} />
              </div>
              <div
                className={openTab === 3 ? 'block' : 'hidden'}
                id='casos-14dias'
              >
                <BarPlot data={twoweeks_cases} caption={<Source />} />
              </div>
              <div
                className={openTab === 4 ? 'block' : 'hidden'}
                id='casos-mensuales'
              >
                <BarPlot data={monthly_cases} caption={<Source />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
