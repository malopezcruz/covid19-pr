import React from 'react';
import ErrorMessage from './ErrorMessage';
import useSWR from 'swr';
import fetch from '../utils/fetch';
import { formatNumber, formatDate, deathRate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function GlobalStats() {
  const { data, error } = useSWR('https://covid19.mathdro.id/api', fetch);

  if (error) return <ErrorMessage category='Global' />;

  if (!data)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin width='16' />
      </div>
    );

  return (
    <div className='mb-8 md:mb-16'>
      <h2 className='font-black text-4xl text-center mb-8'>Global</h2>
      <div className='mb-6 grid grid-cols-2 gap-3 small:gap-4 md:grid-cols-4'>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-3xl md:text-4xl font-bold'>
            {formatNumber(data.confirmed.value)}
          </span>
          <h3 className='uppercase'>Confirmados</h3>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-3xl md:text-4xl font-bold'>
            {formatNumber(data.deaths.value)}
          </span>
          <h3 className='uppercase'>Muertes</h3>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-3xl md:text-4xl font-bold'>
            {formatNumber(data.recovered.value)}
          </span>
          <h3 className='uppercase'>Recuperados</h3>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-3xl md:text-4xl font-bold'>{`${deathRate(
            data.confirmed.value,
            data.deaths.value
          ).toFixed(2)}%`}</span>
          <h3 className='uppercase'>Tasa de letalidad</h3>
        </div>
      </div>
      <div className='uppercase text-xs text-center text-gray-700'>
        <span>Última verificación: </span>
        <span>
          <strong>{formatDate(data.lastUpdate)}</strong>.
        </span>
      </div>
    </div>
  );
}
