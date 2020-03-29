import React from 'react';
import useStats from '../utils/useStats';
import ErrorMessage from './ErrorMessage';
import { formatDate, formatNumber } from '../utils/utils';
import DataBox from '../components/DataBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PRStatsTest() {
  const [stats, isError] = useStats('https://covidtracking.com/api/states');

  if (isError) return <ErrorMessage category='Pruebas Realizadas' />;

  if (!stats)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
      </div>
    );

  const findTestData = stats.find(o => o.state === 'PR');
  const {
    positive,
    negative,
    pending,
    total,
    dateChecked,
    dateModified
  } = findTestData;

  return (
    <div className='mb-8'>
      <h2 className='font-black text-2xl text-center mb-8'>
        Pruebas realizadas
      </h2>
      <div className='mb-6 grid grid-cols-2 lg:grid-cols-4 gap-3 small:gap-4'>
        <DataBox number={formatNumber(positive)} label='Positivos' />
        <DataBox number={formatNumber(negative)} label='Negativos' />
        <DataBox number={formatNumber(pending)} label='Pendientes' />
        <DataBox number={formatNumber(total)} label='Total' />
      </div>
      <div className='uppercase text-xs text-center text-gray-700'>
        <p>
          Última verificación: <strong>{formatDate(dateChecked)}</strong>.
        </p>
        <p>
          Última actualización disponible:{' '}
          <strong>{formatDate(dateModified)}</strong>.
        </p>
        <p className='normal-case'>
          <span>👉 </span>
          Los datos se actualizan todos los días a las 4:00 PM.
        </p>
      </div>
    </div>
  );
}

export default PRStatsTest;
