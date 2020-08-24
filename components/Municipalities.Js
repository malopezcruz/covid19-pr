import React, { useState } from 'react';
import { formatNumber, municipality_list } from '../utils/utils';
import municipalities from '../data/municipalities.json';
import BarPlotMun from './BarPlotMun';

export default function Municipalities() {
  const [selectedMunicipality, setSelectedMunicipality] = useState('Adjuntas');

  const municipalityFiltered = municipalities.filter(
    ({ name }) => name == selectedMunicipality
  );

  const { name, counts } = municipalityFiltered[
    municipalityFiltered.length - 1
  ];

  return (
    <section className='mb-12 md:mb-24'>
      <h2 className='text-xl mb-6 sm:mb-8 md:text-3xl text-blue-900 font-semibold leading-tight uppercase'>
        Casos acumulados por municipio
      </h2>
      <label className='block mb-6 sm:mb-8 md:w-64'>
        <span className='text-subtitle'>Selecciona un municipio:</span>
        <select
          className='form-select mt-1 block w-full text-subtitle bg-white'
          onChange={(e) => {
            setSelectedMunicipality(e.target.value);
          }}
        >
          {municipality_list.map((name) => (
            <option className='text-gray-700 bg-white' key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <div className='mb-4 sm:mb-8 grid grid-cols-2 gap-2 mx-auto w-4/6 md:gap-8 '>
        <div className=''>
          <h3 className='text-sm font-semibold uppercase text-center text-blue-900 mb-2'>
            Municipio
          </h3>
          <p className='text-2xl sm:text-3xl  text-blue-900 opacity-75 text-center mb-2'>
            <strong>{name}</strong>
          </p>
        </div>
        <div className=''>
          <h3 className='text-sm font-semibold uppercase text-center text-blue-900 mb-2'>
            Casos
          </h3>
          <p className='text-2xl sm:text-3xl text-blue-900 opacity-75 text-center mb-2'>
            <strong>{formatNumber(counts)}</strong>
          </p>
        </div>
      </div>
      <BarPlotMun data={municipalityFiltered} capton='' />{' '}
    </section>
  );
}
