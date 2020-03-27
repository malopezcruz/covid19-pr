import React from 'react';
import useStats from '../utils/useStats';
import ErrorMessage from './ErrorMessage';
import { formatNumber, formatDate, deathRate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PRStats() {
  const [stats, isError1] = useStats(
    'https://covid19.mathdro.id/api/countries/US/confirmed'
  );

  if (isError1) return <ErrorMessage category='Puerto Rico' />;

  if (!stats)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
      </div>
    );

  const findPuertoRico = stats.find(o => o.provinceState === 'Puerto Rico');
  const { confirmed, deaths, recovered, lastUpdate } = findPuertoRico;

  return (
    <div className='mb-12 md:mb-16'>
      <h2 className='font-black text-4xl text-center mb-8'>Puerto Rico</h2>
      <div className={`mb-6 grid grid-cols-2 gap-3 small:gap-4`}>
        <div
          className={`py-8 px-2 ${recovered === 0 &&
            'row-span-2'} flex justify-center items-center bg-gray-300 text-center rounded-lg`}
        >
          <div>
            <span
              className={`${
                recovered === 0 ? 'text-5xl' : 'text-4xl'
              } font-bold`}
            >
              {formatNumber(confirmed)}
            </span>
            <h3 className='uppercase'>Confirmados</h3>
          </div>
        </div>
        <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>{formatNumber(deaths)}</span>
          <h3 className='uppercase'>Muertes</h3>
        </div>
        {recovered > 0 && (
          <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
            <span className='text-4xl font-bold'>
              {formatNumber(recovered)}
            </span>
            <h3 className='uppercase'>Recuperados</h3>
          </div>
        )}
        <div className='py-8 px-2  bg-gray-300 text-center rounded-lg'>
          <span className='text-4xl font-bold'>{`${deathRate(
            confirmed,
            deaths
          ).toFixed(2)}%`}</span>
          <h3 className='uppercase'>Tasa de letalidad</h3>
        </div>
      </div>
      <div className='uppercase text-xs text-center text-gray-700'>
        <span>Última verificación: </span>
        <span>
          <strong>{formatDate(lastUpdate)}</strong>.
        </span>
        <p className='normal-case'>
          <span>👉</span> La información aparecerá actualizada aproximadamente
          dos horas después al{' '}
          <strong>
            <a
              href='http://www.salud.gov.pr/Pages/coronavirus.aspx'
              className='underline'
              rel='noreferrer noopenner'
              target='_blank'
            >
              informe diaro
            </a>
          </strong>{' '}
          del Departamento de Salud (7:00 AM).
        </p>
      </div>
    </div>
  );
}
