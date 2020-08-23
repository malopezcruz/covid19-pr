import React, { useState } from 'react';
import { formatNumber, municipality_list } from '../utils/utils';
import municipalities from '../data/municipalities.json';
import BarPlot from './BarPlot';

export default function Municipalities() {
  const [municipality, setMunicipality] = useState(municipality_list);

  const mun = municipalities.filter(
    ({ name }) => name == 'Otro lugar fuera de PR'
  );

  const { name, counts, dates } = mun[mun.length - 1];

  return (
    <section className='mb-12 md:mb-24'>
      <h2 className='text-xl mb-8 md:text-3xl text-blue-900 font-semibold leading-tight uppercase'>
        Casos acumulados por municipio
      </h2>
      <div className='mb-8 grid grid-cols-3 gap-4 md:gap-8 md:w-4/6 md:mx-auto'>
        <div className='shadow-md p-4 border-t-8 border-blue-800'>
          <h3 className='text-sm font-semibold uppercase text-center text-blue-900 mb-2'>
            Municipio
          </h3>
          <p className='text-2xl sm:text-3xl text-subtitle text-center mb-2'>
            <strong>{name}</strong>
          </p>
        </div>
        <div className='shadow-md p-4 border-t-8 border-blue-800'>
          <h3 className='text-sm font-semibold uppercase text-center text-blue-900 mb-2'>
            Municipio
          </h3>
          <p className='text-2xl sm:text-3xl text-subtitle text-center mb-2'>
            <strong>{name}</strong>
          </p>
        </div>
        <div className='shadow-md p-4 uppercase border-t-8 border-blue-800'>
          <h3 className='text-sm font-semibold text-center text-blue-900 mb-2'>
            Casos
          </h3>
          <p className='text-2xl sm:text-3xl text-subtitle text-center mb-2'>
            <strong>{formatNumber(counts)}</strong>
          </p>
        </div>
      </div>
      <BarPlot data={mun} capton='' />{' '}
    </section>
  );
}
