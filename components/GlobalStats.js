import React from 'react';
import ErrorMessage from './ErrorMessage';
import useStats from '../utils/useStats';
import { formatNumber,deathRate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function GlobalStats() {
  const [stats, isError] = useStats(
    'https://covid19-server.chrismichael.now.sh/api/v1/AllReports'
  );

  if (isError) return <ErrorMessage category='Global' />;

  if (!stats)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin width='16' />
      </div>
    );

  const { cases, deaths, recovered } = stats.reports[0];

  return (
    <div className='mb-8 md:mb-16'>
      <h2 className='font-black text-4xl text-center mb-8'>Global</h2>
      <div className='mb-6 grid grid-cols-2 gap-3 small:gap-4 md:grid-cols-4'>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-3xl md:text-4xl font-bold'>
            {formatNumber(cases)}
          </span>
          <h3 className='uppercase'>Confirmados</h3>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-3xl md:text-4xl font-bold'>
            {formatNumber(deaths)}
          </span>
          <h3 className='uppercase'>Muertes</h3>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-3xl md:text-4xl font-bold'>
            {formatNumber(recovered)}
          </span>
          <h3 className='uppercase'>Recuperados</h3>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-3xl md:text-4xl font-bold'>{`${deathRate(
            cases,
            deaths
          ).toFixed(2)}%`}</span>
          <h3 className='uppercase'>Tasa de letalidad</h3>
        </div>
      </div>
    </div>
  );
}
