import React from 'react';
import useStats from '../utils/useStats';
import ErrorMessage from './ErrorMessage';
import { formatNumber, formatDate, deathRate } from '../utils/utils';

export default function PRStats() {
  const [stats, isError] = useStats(
    'https://covid19.mathdro.id/api/countries/US/confirmed'
  );

  if (isError) return <ErrorMessage category='Puerto Rico' />;

  if (!stats) return <div className='text-center'>Loading...</div>;

  const findPuertoRico = stats.find(o => o.provinceState === 'Puerto Rico');
  const { confirmed, deaths, recovered, lastUpdate } = findPuertoRico;

  return (
    <div className='mb-8'>
      <h2 className='font-black text-4xl text-center mb-8'>Puerto Rico</h2>
      <div className='mb-6 grid grid-cols-2 gap-4'>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>{formatNumber(confirmed)}</span>
          <h3 className='uppercase'>Confirmados</h3>
        </div>
        <div className='py-8 px-2  bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>{formatNumber(deaths)}</span>
          <h3 className='uppercase'>Muertes</h3>
        </div>
        <div className='py-8 px-2  bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>{formatNumber(recovered)}</span>
          <h3 className='uppercase'>Recuperados</h3>
        </div>
        <div className='py-8 px-2  bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>{`${deathRate(
            confirmed,
            deaths
          ).toFixed(2)}%`}</span>
          <h3 className='uppercase'>Tasa de letalidad</h3>
        </div>
      </div>
      <div className='uppercase text-xs text-center text-gray-600'>
        <span>Última actualización: </span>
        <span>{formatDate(lastUpdate)}</span>
      </div>
    </div>
  );
}
