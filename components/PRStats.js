import React from 'react';
import ErrorMessage from './ErrorMessage';
import DataBox from '../components/DataBox';
import useStats from '../utils/useStats';
import {
  formatNumber,
  deathRate,
  percentage,
  formatDate,
} from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PRStats() {
  const [stats, isError] = useStats(
    `https://covid19-server.chrismichael.now.sh/api/v1/PRExtraData`
  );

  if (isError) return <ErrorMessage category='Puerto Rico' />;

  if (!stats)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
      </div>
    );

  const {
    T_Casos_Pos,
    T_Casos_Neg,
    T_Casos_Pend,
    T_Casos_Inconcluso,
    T_Muertes_Combinadas,
    T_Casos,
    T_Camas_Adulto,
    T_Paciente_Adult,
    T_Camas_Ped,
    T_Paciente_Ped,
    T_Camas_Adult_Int_Occ,
    T_Camas_Ped_Int_Occ,
    T_Camas_Int_Adult,
    T_Camas_Int_Ped,
    T_Cuartos_PSiNeg,
    T_Cuartos_PSINeg_Occ,
    T_Vent_Adult_Occ,
    T_Vent_Ped_Occ,
    T_Vent_Adult,
    T_Vent_Ped,
    EditDate,
  } = stats.data[0].table[0].attributes;
  return (
    <>
      <div className='mb-12 md:mb-16'>
        <div className='text-center mb-12'>
          <h2 className='font-black text-4xl '>Puerto Rico</h2>
          <p>
            Última actualización: <strong>{formatDate(EditDate)}</strong>
          </p>
        </div>

        <div className={`mb-6 grid grid-cols-2 gap-3 small:gap-4`}>
          <div
            className={`py-8 px-2
            row-span-2 flex justify-center items-center bg-gray-300 text-center rounded-lg`}
          >
            <div>
              <span className='text-5xl font-bold'>
                {formatNumber(T_Casos_Pos)}
              </span>
              <h3 className='uppercase'>Confirmados</h3>
            </div>
          </div>
          <div className='py-8 px-2 bg-gray-300 text-center rounded-lg'>
            <span className='text-4xl font-bold'>
              {formatNumber(T_Muertes_Combinadas)}
            </span>
            <h3 className='uppercase'>Muertes</h3>
          </div>
          <div className='py-8 px-2  bg-gray-300 text-center rounded-lg'>
            <span className='text-4xl font-bold'>{`${deathRate(
              T_Casos_Pos,
              T_Muertes_Combinadas
            ).toFixed(2)}%`}</span>
            <h3 className='uppercase'>Tasa de letalidad</h3>
          </div>
        </div>
      </div>
      <div className='mb-12 md:mb-16'>
        <h2 className='font-black text-2xl text-center mb-8'>
          Pruebas realizadas
        </h2>
        <div className='mb-6 grid grid-cols-2 lg:grid-cols-4 gap-3 small:gap-4'>
          <DataBox number={formatNumber(T_Casos_Pos)} label='Positivos' />
          <DataBox number={formatNumber(T_Casos_Neg)} label='Negativos' />
          <DataBox number={formatNumber(T_Casos_Pend)} label='Pendientes' />
          <DataBox number={`${formatNumber(T_Casos)} *`} label='Total' />
        </div>
        <div className='uppercase text-xs text-center text-gray-700'>
          <span>👉 </span>
          <span>
            * Pruebas inconclusas: <strong>{T_Casos_Inconcluso}</strong>
          </span>
        </div>
      </div>
      <div className='mb-2'>
        <h2 className='font-black text-2xl text-center mb-8'>
          Porcentaje de ocupación de ventiladores
        </h2>
        <div className='mb-12 md:mb-16 grid grid-cols-2 gap-3 small:gap-4'>
          <DataBox
            number={`${percentage(T_Vent_Adult_Occ, T_Vent_Adult).toFixed(0)}%`}
            label='Adultos'
          />
          <DataBox
            number={`${percentage(T_Vent_Ped_Occ, T_Vent_Ped).toFixed(0)}%`}
            label='Pediátrico'
          />
        </div>
        <h2 className='font-black text-2xl text-center mb-8'>
          Porcentaje de ocupación de camas de hospital
        </h2>
        <div className='mb-6 grid grid-cols-2 lg:grid-cols-5 gap-3 small:gap-4'>
          <DataBox
            number={`${percentage(T_Paciente_Adult, T_Camas_Adulto).toFixed(
              0
            )}%`}
            label='Adultos'
          />
          <DataBox
            number={`${percentage(T_Paciente_Ped, T_Camas_Ped).toFixed(0)}%`}
            label='Pediátrico'
          />
          <DataBox
            number={`${percentage(
              T_Camas_Adult_Int_Occ,
              T_Camas_Int_Adult
            ).toFixed(0)}%`}
            label='Intensivo Adultos'
          />
          <DataBox
            number={`${percentage(T_Camas_Ped_Int_Occ, T_Camas_Int_Ped).toFixed(
              0
            )}%`}
            label='Intensivo Pediátrico'
          />
          <DataBox
            number={`${percentage(
              T_Cuartos_PSINeg_Occ,
              T_Cuartos_PSiNeg
            ).toFixed(0)}%`}
            label='Presión Negativa'
          />
        </div>
      </div>
    </>
  );
}
