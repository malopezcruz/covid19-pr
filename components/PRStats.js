import React from 'react';
import ErrorMessage from './ErrorMessage';
import DataBox from '../components/DataBox';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';
// import useRequest from '../utils/useRequest';
import { formatNumber, deathRate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fetcher = async function(...args) {
  const res = await fetch(...args);
  return res.json();
};

export default function PRStats({ initialData, url }) {
  // const { data, error } = useRequest({
  //   url: `https://wrapapi.com/use/malopezcruz/covid19pr1/salud/latest?wrapAPIKey=${process.env.API_KEY}`
  // });

  const { data, error } = useSWR(url, fetcher, { initialData });
  console.log(data);
  if (error) return <ErrorMessage category='Puerto Rico' />;

  if (!data)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
      </div>
    );

  const totalTest = data.data.stats[1];
  const confirmed = data.data.stats[2];
  const negative = data.data.stats[3];
  const pending = data.data.stats[4];
  const deaths = data.data.stats[5];

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
          <span>{data.data.updated}</span>{' '}
          <span className='block'>
            * Pruebas inconclusas: <strong>2</strong>.
          </span>
        </div>
      </div>
    </>
  );
}

PRStats.getInitialProps = async () => {
  const url = `https://wrapapi.com/use/malopezcruz/covid19pr1/salud/latest?wrapAPIKey=${process.env.API_KEY}`;
  const initialData = await fetcher(url);
  return { initialData, url };
};
