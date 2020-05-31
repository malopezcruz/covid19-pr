import React from 'react';
import ErrorMessage from './ErrorMessage';
import CategoryBox from './CategoryBox';
import useStats from '../utils/useStats';
import { formatNumber, deathRate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DataBox from './DataBox';

export default function GlobalStats() {
  const [stats, isError] = useStats(
    'https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/us'
  );

  if (isError) return <ErrorMessage category='Estados Unidos' />;

  if (!stats)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
      </div>
    );

  const { cases, deaths, recovered } = stats.report;

  return (
    <CategoryBox>
      <div className='mb-8 md:mb-8'>
        <h2 className='font-black text-4xl text-center mb-8'>Estados Unidos</h2>
        <div className='mb-6 grid grid-cols-2 lg:grid-cols-4 gap-3 small:gap-4'>
          <DataBox number={formatNumber(cases)} label='Confirmados' />
          <DataBox number={formatNumber(deaths)} label='Muertes' />
          <DataBox number={formatNumber(recovered)} label='Recuperados' />
          <DataBox
            number={`${deathRate(cases, deaths).toFixed(2)}%`}
            label='Tasa de Letalidad'
          />
        </div>
      </div>
    </CategoryBox>
  );
}
