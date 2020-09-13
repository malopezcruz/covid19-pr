import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import {
  formatNumber,
  municipality_list,
  reportDate,
  formatDateLabel,
} from '../utils/utils';
import Source from './Source';
import MunBarPlot from './MunBarPlot';
import MunVerticalBarPlot from './MunVerticalBarPlot';

const Municipalities = () => {
  const { municipalitylist } = useContext(DataContext);
  const [selectedMunicipality, setSelectedMunicipality] = useState('Adjuntas');

  const municipalityFiltered = municipalitylist.filter(
    ({ name }) => name == selectedMunicipality
  );

  const { name, counts, dates: lastDate } = municipalityFiltered[
    municipalityFiltered.length - 1
  ];

  // Calculate new cases for the most recent day
  const { dates: beforeLastDate } = municipalitylist[
    municipalitylist.length - 81
  ];
  const lastDateFiltered = municipalitylist.filter(
    ({ dates }) => dates === lastDate
  );
  const beforeLastDateFiltered = municipalitylist.filter(
    ({ dates }) => dates === beforeLastDate
  );
  const sumObjectsByKey = (...objs) =>
    Object.values(
      objs.reduce((a, e) => {
        a[e.name] = a[e.name] || { name: e.name, dates: e.dates };

        for (const k in e) {
          if (k !== 'name' && k !== 'dates') {
            a[e.name][k] = a[e.name][k] ? a[e.name][k] - e[k] : e[k];
          }
        }

        return a;
      }, {})
    );

  const newMunicipalityCases = sumObjectsByKey(
    ...lastDateFiltered,
    ...beforeLastDateFiltered
  )
    .filter(({ counts }) => counts !== 0)
    .sort((a, b) => b.counts - a.counts);

  const totalMunCases = newMunicipalityCases
    .map(({ counts }) => counts)
    .reduce((prev, next) => prev + next, 0);

  return (
    <>
      <section className='mb-12 md:mb-16 lg:mb-24'>
        {/* total cases pert town */}
        <h2 className='text-xl mb-6 sm:mb-8 md:text-3xl text-blue-900 font-semibold leading-tight uppercase'>
          Municipios
        </h2>
        <h3 className='text-lg mb-8 sm:mb-10 md:text-2xl text-blue-900 font-semibold leading-tight'>
          Casos confirmados acumulados por municipio
        </h3>

        <div className='mb-8 sm:mb-12 grid grid-cols-2 gap-2 w-full sm:mx-auto  md:w-5/6 lg:4/6 md:gap-8 shadow-md rounded p-4 border-t-8 border-blue-800 divide-x divide-text-subtitle'>
          <div>
            <h3 className='text-sm font-semibold uppercase text-center text-blue-900 mb-2'>
              Municipio
            </h3>
            <p className='text-2xl sm:text-3xl  text-blue-900 opacity-75 text-center mb-2'>
              <strong>{name}</strong>
            </p>
          </div>
          <div>
            <h3 className='text-sm font-semibold uppercase text-center text-blue-900 mb-2'>
              Casos
            </h3>
            <p className='text-2xl sm:text-3xl text-blue-900 opacity-75 text-center mb-2'>
              <strong>{formatNumber(counts)}</strong>
            </p>
          </div>
        </div>
        {/* Start Selection */}
        <label className='block mb-6 sm:mb-10 md:w-64'>
          <span className='block text-subtitle mb-2'>
            Selecciona un municipio:
          </span>
          <select
            className='form-select mt-1 block w-full text-subtitle bg-white'
            onChange={(e) => {
              setSelectedMunicipality(e.target.value);
            }}
          >
            {municipality_list.map((name) => (
              <option
                className='text-gray-700 bg-white'
                key={name}
                value={name}
              >
                {name}
              </option>
            ))}
          </select>
        </label>
        {/* End Selection */}
        <MunBarPlot data={municipalityFiltered} caption={<Source />} />
      </section>
      <hr className='mb-12 md:mb-16 lg:mb-20 border-hr' />
      <section className='mb-16 md:mb-24'>
        {/* total cases pert town */}
        <div className='mb-8 sm:mb-12'>
          <h3 className='text-lg  md:text-2xl text-blue-900 font-semibold leading-tight'>
            Casos nuevos reportados por municipio{' '}
            <span className='text-large opacity-75'>
              <br className='block sm:hidden'></br>
              (n = {formatNumber(totalMunCases)})
              <sup className='text-pink-500'>*</sup>
            </span>
          </h3>
          <p className='text-blue-900 opacity-75 font-semibold'>
            {formatDateLabel(reportDate)}
          </p>
        </div>
        <MunVerticalBarPlot
          data={newMunicipalityCases}
          caption={
            <>
              <sup className='text-pink-500 opacity-90'>*</sup> El total puede
              que no coincida con el total de casos confirmados del encabezado
              del informe diario debido al ajustes de casos no reportados
              previamente o duplicados restados. <Source />
            </>
          }
        />
      </section>
    </>
  );
};

export default Municipalities;
