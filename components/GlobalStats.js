import React from 'react';
import useStats from '../utils/useStats';
import ErrorMessage from './ErrorMessage';
import { formatNumber, formatDate, deathRate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function GlobalStats() {
  const [stats, isError] = useStats('https://covid19.mathdro.id/api');

  if (isError) return <ErrorMessage category='Global' />;

  if (!stats)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin width='16' />
      </div>
    );

  return (
    <div className='md:min-h-250 mb-8 md:mb-16'>
      <h2 className='font-black text-4xl text-center mb-8'>Global</h2>
      <div className='mb-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>
            {formatNumber(stats.confirmed.value)}
          </span>
          <h3 className='uppercase'>Confirmados</h3>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>
            {formatNumber(stats.deaths.value)}
          </span>
          <h3 className='uppercase'>Muertes</h3>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>
            {formatNumber(stats.recovered.value)}
          </span>
          <h3 className='uppercase'>Recuperados</h3>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>{`${deathRate(
            stats.confirmed.value,
            stats.deaths.value
          ).toFixed(2)}%`}</span>
          <h3 className='uppercase'>Tasa de letalidad</h3>
        </div>
      </div>
      <div className='uppercase text-xs text-center text-gray-700'>
        <span>Última actualización: </span>
        <span>{formatDate(stats.lastUpdate)}</span>
      </div>
    </div>
  );
}
