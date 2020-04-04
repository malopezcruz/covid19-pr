import React from 'react';
import ErrorMessage from './ErrorMessage';
import DataBox from '../components/DataBox';
import useStats from '../utils/useStats';
import { formatNumber, deathRate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PRStats() {
  const [stats, isError] = useStats(
    `https://wrapapi.com/use/malopezcruz/covid19pr1/salud/latest?wrapAPIKey=${process.env.API_KEY}`
  );

  if (isError) return <ErrorMessage category='Puerto Rico' />;

  if (!stats)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
      </div>
    );

  const [, totalTest, confirmed, negative, pending, deaths] = stats.data.stats;

  return (
    <>
      <div className='mb-12 md:mb-16'>
        <h2 className='font-black text-4xl text-center mb-8'>Puerto Rico</h2>
        <div className={`mb-6 grid grid-cols-2 gap-3 small:gap-4`}>
          <div
            className={`py-8 px-2
            row-span-2 flex justify-center items-center bg-gray-300 text-center rounded-lg`}
          >
            <div>
              <span className='text-5xl font-bold'>
                {formatNumber(confirmed)}
              </span>
              <h3 className='uppercase'>Confirmados</h3>
            </div>
          </div>
          <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
            <span className='text-4xl font-bold'>{formatNumber(deaths)}</span>
            <h3 className='uppercase'>Muertes</h3>
          </div>
          <div className='py-8 px-2  bg-gray-300 text-center rounded-lg'>
            <span className='text-4xl font-bold'>{`${deathRate(
              parseInt(confirmed),
              parseInt(deaths)
            ).toFixed(2)}%`}</span>
            <h3 className='uppercase'>Tasa de letalidad</h3>
          </div>
        </div>
      </div>
      <div className='mb-8'>
        <h2 className='font-black text-2xl text-center mb-8'>
          Pruebas realizadas
        </h2>
        <div className='mb-6 grid grid-cols-2 lg:grid-cols-4 gap-3 small:gap-4'>
          <DataBox number={formatNumber(confirmed)} label='Positivos' />
          <DataBox number={formatNumber(negative)} label='Negativos' />
          <DataBox number={formatNumber(pending)} label='Pendientes' />
          <DataBox number={formatNumber(totalTest)} label='Total' />
        </div>
        <div className='uppercase text-xs text-center text-gray-700'>
          <span>👉 </span>
          <span>
            <strong>{stats.data.updated}</strong>
          </span>{' '}
          <span className='block'>
            * Pruebas inconclusas: <strong>4</strong>
          </span>
        </div>
      </div>
    </>
  );
}
