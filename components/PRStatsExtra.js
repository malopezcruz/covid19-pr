import React from 'react';
import useStats from '../utils/useStats';
import ErrorMessage from './ErrorMessage';
import { percentage } from '../utils/utils';
import DataBox from '../components/DataBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PRStatsExtra() {
  const [stats, isError] = useStats(
    'https://covid19-server.chrismichael.now.sh/api/v1/PRExtraData'
  );

  if (isError) return <ErrorMessage category='Pruebas Realizadas' />;

  if (!stats)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
      </div>
    );

  const {
    T_Camas_Adult_Disp,
    T_Paciente_Adult,
    T_Camas_Ped_Disp,
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
  } = stats.data[0].table[0].attributes;

  return (
    <>
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
          Porcentaje de ocupación de camas
        </h2>
        <div className='mb-6 grid grid-cols-2 lg:grid-cols-5 gap-3 small:gap-4'>
          <DataBox
            number={`${percentage(T_Paciente_Adult, T_Camas_Adult_Disp).toFixed(
              0
            )}%`}
            label='Adultos'
          />
          <DataBox
            number={`${percentage(T_Paciente_Ped, T_Camas_Ped_Disp).toFixed(
              0
            )}%`}
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

export default PRStatsExtra;
