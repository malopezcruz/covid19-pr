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
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

export default function PRStats() {
  const [stats, isError] = useStats(`https://covid19api.io/api/v1/PRExtraData`);
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
    T_Camas_Ped_Disp,
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
    T_Vent_Ped_Disp,
    T_Vent_Adult_Disp,
    EditDate,
    T_Casos_Unicos,
    T_Serologicos_Pos,
    T_Molecular_Pos,
    T_Casos_Nuev_Ult_Inf,
    T_Vent_Covid,
    T_Pacientes_Int_Covid,
    T_Hospitalizados,
    T_Camas_Adult_Disp,
    T_Camas_Adult_Int_Disp,
    T_Camas_Ped_Int_Disp,
    T_Cuartos_PSINeg_Disp,
  } = stats.data[0].table[0].attributes;

  const pieDefault = {
    margin: { top: 20, right: 80, bottom: 80, left: 80 },
    innerRadius: 0.5,
    padAngle: 0.5,
    cornerRadius: 3,
    enableRadialLabels: false,
    colors: {
      scheme: 'pastel2',
      borderWidth: 1,
      borderColor: { from: 'color', modifiers: [['darker', 0.2]] },
      radialLabelsSkipAngle: 0,
      radialLabelsTextXOffset: 0,
      radialLabelsTextColor: '#333333',
      radialLabelsLinkOffset: 0,
      radialLabelsLinkDiagonalLength: 0,
      radialLabelsLinkHorizontalLength: 0,
      radialLabelsLinkStrokeWidth: 0,
      radialLabelsLinkColor: { from: 'color' },
      slicesLabelsSkipAngle: 0,
      slicesLabelsTextColor: '#333333',
      animate: true,
      motionStiffness: 90,
      motionDamping: 15,
      defs: [
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ],
    },
    fill: [
      {
        match: {
          id: 'ocupados',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'disponibles',
        },
        id: 'dots',
      },
    ],
    legends: [
      {
        anchor: 'bottom',
        direction: 'row',
        translateY: 56,
        itemWidth: 125,
        itemHeight: 18,
        itemTextColor: '#999',
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ],
  };

  const hospitalProps = {
    data: [
      {
        id: 'hospital',
        hospitalizaciones: 'Hospitalizaciones',
        Total: T_Hospitalizados,
      },
      {
        id: 'vent',
        hospitalizaciones: 'Ventiladores',
        Total: T_Vent_Covid,
      },
      {
        id: 'intensivo',
        hospitalizaciones: 'Intensivo',
        Total: T_Pacientes_Int_Covid,
      },
    ],
    margin: { top: 0, right: 30, bottom: 60, left: 30 },
    indexBy: 'hospitalizaciones',
    keys: ['Total'],
    labelTextColor: 'inherit:darker(1.4)',
    labelSkipWidth: 16,
    labelSkipHeight: 16,
    animate: true,
    colors: { scheme: 'pastel2' },
  };

  const ventPedData = {
    data: [
      {
        id: `Disponibles (${percentage(T_Vent_Ped_Disp, T_Vent_Ped).toFixed(
          0
        )}%)`,
        label: `Disponibles (${percentage(T_Vent_Ped_Disp, T_Vent_Ped).toFixed(
          0
        )}%)`,
        value: T_Vent_Ped_Disp,
        color: 'red',
      },
      {
        id: `En uso (${percentage(T_Vent_Ped_Occ, T_Vent_Ped).toFixed(0)}%)`,
        label: `En uso (${percentage(T_Vent_Ped_Occ, T_Vent_Ped).toFixed(0)}%)`,
        value: T_Vent_Ped_Occ,
        color: 'blue',
      },
    ],
  };

  const ventAdultData = {
    data: [
      {
        id: `Disponibles (${percentage(T_Vent_Adult_Disp, T_Vent_Adult).toFixed(
          0
        )}%)`,
        label: `Disponibles (${percentage(
          T_Vent_Adult_Disp,
          T_Vent_Adult
        ).toFixed(0)}%)`,
        value: T_Vent_Adult_Disp,
        color: 'red',
      },
      {
        id: `En uso (${percentage(T_Vent_Adult_Occ, T_Vent_Adult).toFixed(
          0
        )}%)`,
        label: `En uso (${percentage(T_Vent_Adult_Occ, T_Vent_Adult).toFixed(
          0
        )}%)`,
        value: T_Vent_Adult_Occ,
        color: 'blue',
      },
    ],
  };

  const camasAdultData = {
    data: [
      {
        id: `Disponibles (${percentage(
          T_Camas_Adult_Disp,
          T_Camas_Adulto
        ).toFixed(0)}%)`,
        label: `Disponibles (${percentage(
          T_Camas_Adult_Disp,
          T_Camas_Adulto
        ).toFixed(0)}%)`,
        value: T_Camas_Adult_Disp,
        color: 'red',
      },
      {
        id: `Ocupadas (${percentage(T_Paciente_Adult, T_Camas_Adulto).toFixed(
          0
        )}%)`,
        label: `Ocupadas (${percentage(
          T_Paciente_Adult,
          T_Camas_Adulto
        ).toFixed(0)}%)`,
        value: T_Paciente_Adult,
        color: 'blue',
      },
    ],
  };

  const camasPedData = {
    data: [
      {
        id: `Disponibles (${percentage(T_Camas_Ped_Disp, T_Camas_Ped).toFixed(
          0
        )}%)`,
        label: `Disponibles (${percentage(
          T_Camas_Ped_Disp,
          T_Camas_Ped
        ).toFixed(0)}%)`,
        value: T_Camas_Ped_Disp,
        color: 'red',
      },
      {
        id: `Ocupadas (${percentage(T_Paciente_Ped, T_Camas_Ped).toFixed(0)}%)`,
        label: `Ocupadas (${percentage(T_Paciente_Ped, T_Camas_Ped).toFixed(
          0
        )}%)`,
        value: T_Paciente_Ped,
        color: 'blue',
      },
    ],
  };

  const camasAdultIntData = {
    data: [
      {
        id: `Disponibles (${percentage(
          T_Camas_Adult_Int_Disp,
          T_Camas_Int_Adult
        ).toFixed(0)}%)`,
        label: `Disponibles (${percentage(
          T_Camas_Adult_Int_Disp,
          T_Camas_Int_Adult
        ).toFixed(0)}%)`,
        value: T_Camas_Adult_Int_Disp,
        color: 'red',
      },
      {
        id: `Ocupadas (${percentage(
          T_Camas_Adult_Int_Occ,
          T_Camas_Int_Adult
        ).toFixed(0)}%)`,
        label: `Ocupadas (${percentage(
          T_Camas_Adult_Int_Occ,
          T_Camas_Int_Adult
        ).toFixed(0)}%)`,
        value: T_Camas_Adult_Int_Occ,
        color: 'blue',
      },
    ],
  };

  const camasPedIntData = {
    data: [
      {
        id: `Disponibles (${percentage(
          T_Camas_Ped_Int_Disp,
          T_Camas_Int_Ped
        ).toFixed(0)}%)`,
        label: `Disponibles (${percentage(
          T_Camas_Ped_Int_Disp,
          T_Camas_Int_Ped
        ).toFixed(0)}%)`,
        value: T_Camas_Ped_Int_Disp,
        color: 'red',
      },
      {
        id: `Ocupadas (${percentage(
          T_Camas_Ped_Int_Occ,
          T_Camas_Int_Ped
        ).toFixed(0)}%)`,
        label: `Ocupadas (${percentage(
          T_Camas_Ped_Int_Occ,
          T_Camas_Int_Ped
        ).toFixed(0)}%)`,
        value: T_Camas_Ped_Int_Occ,
        color: 'blue',
      },
    ],
  };

  const psiNegData = {
    data: [
      {
        id: `Disponibles (${percentage(
          T_Cuartos_PSINeg_Disp,
          T_Cuartos_PSiNeg
        ).toFixed(0)}%)`,
        label: `Disponibles (${percentage(
          T_Cuartos_PSINeg_Disp,
          T_Cuartos_PSiNeg
        ).toFixed(0)}%)`,
        value: T_Cuartos_PSINeg_Disp,
        color: 'red',
      },
      {
        id: `Ocupados (${percentage(
          T_Cuartos_PSINeg_Occ,
          T_Cuartos_PSiNeg
        ).toFixed(0)}%)`,
        label: `Ocupados (${percentage(
          T_Cuartos_PSINeg_Occ,
          T_Cuartos_PSiNeg
        ).toFixed(0)}%)`,
        value: T_Cuartos_PSINeg_Occ,
        color: 'blue',
      },
    ],
  };

  const ventPedProps = {
    ...ventPedData,
    ...pieDefault,
  };

  const ventAdultProps = {
    ...ventAdultData,
    ...pieDefault,
  };

  const camasAdultProps = {
    ...camasAdultData,
    ...pieDefault,
  };
  const camasPedProps = {
    ...camasPedData,
    ...pieDefault,
  };
  const camasAdultIntProps = {
    ...camasAdultIntData,
    ...pieDefault,
  };
  const camasPedIntProps = {
    ...camasPedIntData,
    ...pieDefault,
  };
  const psiNegProps = {
    ...psiNegData,
    ...pieDefault,
  };

  return (
    <>
      <div className='mb-4 md:mb-8'>
        <div className='text-center mb-8'>
          <h2 className='font-black text-4xl '>Puerto Rico</h2>
          <p>
            Última actualización: <strong>{formatDate(EditDate)}</strong>
          </p>
        </div>

        <div className={`grid grid-cols-2 gap-3 small:gap-4`}>
          {T_Casos_Unicos !== null && (
            <div
              className={`py-8 px-2
            row-span-3 flex justify-center items-center bg-gray-300 text-center rounded-lg`}
            >
              <div>
                <span className='text-5xl font-bold'>
                  {formatNumber(T_Casos_Unicos)}
                </span>
                <h3 className='uppercase'>Casos Únicos</h3>
              </div>
            </div>
          )}

          {T_Molecular_Pos !== null && (
            <DataBox
              number={formatNumber(T_Molecular_Pos)}
              label='Prueba Molecular'
            />
          )}

          {T_Serologicos_Pos !== null && (
            <DataBox
              number={formatNumber(T_Serologicos_Pos)}
              label='Prueba Serológica'
            />
          )}

          {T_Casos_Nuev_Ult_Inf !== null && (
            <DataBox
              number={formatNumber(T_Casos_Nuev_Ult_Inf)}
              label='Casos Nuevos'
            />
          )}
        </div>
      </div>

      <div className='mb-12 md:mb-16 grid grid-cols-2 gap-3 small:gap-4'>
        {T_Muertes_Combinadas !== null && (
          <DataBox
            number={formatNumber(T_Muertes_Combinadas)}
            label='Muertes'
          />
        )}
        {T_Casos_Unicos !== null && (
          <DataBox
            number={`${deathRate(T_Casos_Unicos, T_Muertes_Combinadas).toFixed(
              2
            )}%`}
            label='Tasa de Letalidad'
          />
        )}
      </div>

      {(T_Casos_Pos &&
        T_Casos_Neg &&
        T_Casos_Pend &&
        T_Casos &&
        T_Casos_Inconcluso) !== null ? (
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
      ) : (
        ' '
      )}

      {/* COVID 19 en Hospitales */}
      <div className='mb-4 md:mb-8'>
        <h2 className='font-black text-2xl text-center mb-8'>
          Casos de COVID-19 en hospitales
        </h2>
        <div className='h-300 md:h-400'>
          <ResponsiveBar {...hospitalProps} />
        </div>
      </div>

      {/* Ventiladores */}
      <div>
        <h2 className='font-black text-2xl text-center mb-8'>
          Utilización de ventiladores
        </h2>
        <div className='mb-4 md:mb-8 grid md:grid-cols-2 gap-3 small:gap-4'>
          {(T_Vent_Adult_Disp && T_Vent_Adult && T_Vent_Adult_Occ) !== null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Adultos general
              </h3>
              <div className='h-300 md:h-350'>
                <ResponsivePie {...ventAdultProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}
          {(T_Vent_Ped_Disp && T_Vent_Ped && T_Vent_Ped_Occ) !== null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Pediátrico general
              </h3>
              <div className='h-300 md:h-350'>
                <ResponsivePie {...ventPedProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}
        </div>
      </div>

      {/* Hospitalizaciones */}
      <h2 className='font-black text-2xl text-center mb-8'>
        Ocupación de camas de hospital
      </h2>
      <div className='mb-6 grid md:grid-cols-2'>
        {(T_Paciente_Adult && T_Camas_Adult_Disp) !== null ? (
          <div>
            <h3 className='font-black text-lg text-center md:mb-4'>
              Adultos general
            </h3>
            <div className='h-300 md:h-350'>
              <ResponsivePie {...camasAdultProps} />
            </div>
          </div>
        ) : (
          <h3 className='font-black text-lg text-center md:mb-4'>Sin Datos</h3>
        )}

        {(T_Paciente_Adult && T_Camas_Adult_Disp) !== null ? (
          <div>
            <h3 className='font-black text-lg text-center md:mb-4'>
              Pediátrico general
            </h3>
            <div className='h-300 md:h-350'>
              <ResponsivePie {...camasPedProps} />
            </div>
          </div>
        ) : (
          <h3 className='font-black text-lg text-center md:mb-4'>Sin Datos</h3>
        )}

        {(T_Paciente_Adult && T_Camas_Adult_Disp) !== null ? (
          <div>
            <h3 className='font-black text-lg text-center md:mb-4'>
              Intensivo adultos
            </h3>
            <div className='h-300 md:h-350'>
              <ResponsivePie {...camasAdultIntProps} />
            </div>
          </div>
        ) : (
          <h3 className='font-black text-lg text-center md:mb-4'>Sin Datos</h3>
        )}

        {(T_Paciente_Adult && T_Camas_Adult_Disp) !== null ? (
          <div>
            <h3 className='font-black text-lg text-center md:mb-4'>
              Intensivo pediátrico
            </h3>
            <div className='h-300 md:h-350'>
              <ResponsivePie {...camasPedIntProps} />
            </div>
          </div>
        ) : (
          <h3 className='font-black text-lg text-center md:mb-4'>Sin Datos</h3>
        )}

        {(T_Paciente_Adult && T_Camas_Adult_Disp) !== null ? (
          <div>
            <h3 className='font-black text-lg text-center md:mb-4'>
              Cuartos de presión negativa
            </h3>
            <div className='h-300 md:h-350'>
              <ResponsivePie {...psiNegProps} />
            </div>
          </div>
        ) : (
          <h3 className='font-black text-lg text-center md:mb-4'>Sin Datos</h3>
        )}
      </div>
    </>
  );
}
