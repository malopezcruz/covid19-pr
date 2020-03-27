import React from 'react';
import useStats from '../utils/useStats';
import ErrorMessage from './ErrorMessage';
import { formatDate, formatNumber } from '../utils/utils';
import DataBox from '../components/DataBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PRStatsTest() {
  const [testData, testDataError] = useStats(
    'https://covidtracking.com/api/states'
  );

  if (testDataError) return <ErrorMessage category='Pruebas Realizadas' />;

  if (!testData)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
      </div>
    );

  const findTestData = testData.find(o => o.state === 'PR');
  const { positive, negative, pending, total, dateChecked } = findTestData;

  return (
    <div className='mb-8'>
      <h2 className='font-black text-2xl text-center mb-8'>
        Pruebas realizadas
      </h2>
      <div className='mb-6 grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <DataBox number={formatNumber(positive)} label='Positivos' />
        <DataBox number={formatNumber(negative)} label='Negativos' />
        <DataBox number={formatNumber(pending)} label='Pendientes' />
        <DataBox number={formatNumber(total)} label='Total' />
      </div>
      <div className='uppercase text-xs text-center text-gray-700'>
        <span>
          Última actualización: <strong>{formatDate(dateChecked)}</strong>.
        </span>
        <p className='normal-case'>
          Los datos se actualizan todos los días a las 4:00 PM
        </p>
      </div>
    </div>
  );
}

export default PRStatsTest;
