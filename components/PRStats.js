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
    T_Pacientes_Int_Covid,
    T_Hospitalizados,
    T_Camas_Adult_Disp,
    T_Camas_Adult_Int_Disp,
    T_Camas_Ped_Int_Disp,
    T_Cuartos_PSINeg_Disp,
    T_Fem,
    T_Masc,
    T_Menor_10,
    T_10_19,
    T_20_29,
    T_30_39,
    T_40_49,
    T_50_59,
    T_60_69,
    T_70_79,
    T_Mayor_80,
    T_Vent_Adult_NoCovid,
    T_Vent_Ped_NoCovid,
    T_Vent_Adult_Covid,
    T_Vent_Ped_Covid,
  } = stats.data[0].table[0].attributes;

  const pieDefault = {
    margin: { top: 30, right: 80, bottom: 80, left: 80 },
    innerRadius: 0.35,
    padAngle: 0.5,
    cornerRadius: 3,
    enableRadialLabels: false,
    theme: {
      legends: {
        text: {
          fontSize: 14,
        },
      },
    },
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
        translateY: 50,
        translateX: 0,
        itemSpacing: 2,
        justify: false,
        itemWidth: 145,
        itemHeight: 22,
        itemDirection: 'left-to-right',
        itemTextColor: '#555',
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

  const barDefault = {
    margin: { top: 30, right: 40, bottom: 40, left: 40 },
    labelTextColor: 'inherit:darker(1.4)',
    labelSkipWidth: 16,
    labelSkipHeight: 16,
    animate: true,
    colors: { scheme: 'pastel2' },
  };

  const hospitalData = {
    data: [
      {
        id: 'hospital',
        hospitalizaciones: 'Hospitalizaciones',
        Total: T_Hospitalizados,
      },
      {
        id: 'intensivo',
        hospitalizaciones: 'Intensivo',
        Total: T_Pacientes_Int_Covid,
      },
    ],
    indexBy: 'hospitalizaciones',
    keys: ['Total'],
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
        id: `Regular (${percentage(T_Vent_Ped_NoCovid, T_Vent_Ped).toFixed(
          0
        )}%)`,
        label: `Regular (${percentage(T_Vent_Ped_NoCovid, T_Vent_Ped).toFixed(
          0
        )}%)`,
        value: T_Vent_Ped_NoCovid,
        color: 'blue',
      },
      {
        id: `COVID-19 (${percentage(T_Vent_Ped_Covid, T_Vent_Ped).toFixed(
          0
        )}%)`,
        label: `COVID-19 (${percentage(T_Vent_Ped_Covid, T_Vent_Ped).toFixed(
          0
        )}%)`,
        value: T_Vent_Ped_Covid,
        color: 'blue',
      },
    ],
    legends: [
      {
        anchor: 'bottom',
        direction: 'column',
        translateY: 80,
        translateX: 0,
        itemSpacing: 10,
        justify: false,
        itemWidth: 140,
        itemHeight: 22,
        itemDirection: 'left-to-right',
        itemTextColor: '#555',
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
        id: `Regular (${percentage(T_Vent_Adult_NoCovid, T_Vent_Adult).toFixed(
          0
        )}%)`,
        label: `Regular (${percentage(
          T_Vent_Adult_NoCovid,
          T_Vent_Adult
        ).toFixed(0)}%)`,
        value: T_Vent_Adult_NoCovid,
        color: 'blue',
      },
      {
        id: `COVID-19 (${percentage(T_Vent_Adult_Covid, T_Vent_Adult).toFixed(
          0
        )}%)`,
        label: `COVID-19 (${percentage(
          T_Vent_Adult_Covid,
          T_Vent_Adult
        ).toFixed(0)}%)`,
        value: T_Vent_Adult_Covid,
        color: 'blue',
      },
    ],
    legends: [
      {
        anchor: 'bottom',
        direction: 'column',
        translateY: 80,
        translateX: 0,
        itemSpacing: 10,
        justify: false,
        itemWidth: 140,
        itemHeight: 22,
        itemDirection: 'left-to-right',
        itemTextColor: '#555',
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

  const sexData = {
    data: [
      {
        id: `Femenino (${percentage(T_Fem, T_Casos_Unicos).toFixed(0)}%)`,
        label: `Femenino (${percentage(T_Fem, T_Casos_Unicos).toFixed(0)}%)`,
        value: T_Fem,
        color: 'red',
      },
      {
        id: `Masculino (${percentage(T_Masc, T_Casos_Unicos).toFixed(0)}%)`,
        label: `Masculino (${percentage(T_Masc, T_Casos_Unicos).toFixed(0)}%)`,
        value: T_Masc,
        color: 'blue',
      },
    ],
  };

  const ageDistData = {
    data: [
      {
        id: 'Menor 10',
        agegroup: 'Menor 10',
        Total: T_Menor_10,
      },
      {
        id: '10-19',
        agegroup: '10-19',
        Total: T_10_19,
      },
      {
        id: '20-29',
        agegroup: '20-29',
        Total: T_20_29,
      },
      {
        id: '30-39',
        agegroup: '30-39',
        Total: T_30_39,
      },
      {
        id: '40-49',
        agegroup: '40-49',
        Total: T_40_49,
      },
      {
        id: '50-59',
        agegroup: '50-59',
        Total: T_50_59,
      },
      {
        id: '60-69',
        agegroup: '60-69',
        Total: T_60_69,
      },
      {
        id: '70-79',
        agegroup: '70-79',
        Total: T_70_79,
      },
      {
        id: 'Mayor 80',
        agegroup: 'Mayor 80',
        Total: T_Mayor_80,
      },
    ],
    ndexBy: 'agegroup',
    keys: ['Total'],
    axisBottom: {
      tickRotation: -25,
    },
  };

  const sexProps = {
    ...sexData,
    ...pieDefault,
  };

  const ageDistProps = {
    ...ageDistData,
    ...barDefault,
  };

  const hospitalProps = {
    ...hospitalData,
    ...barDefault,
  };

  const ventPedProps = {
    ...pieDefault,
    ...ventPedData,
  };

  const ventAdultProps = {
    ...pieDefault,
    ...ventAdultData,
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
      <section className='mb-4 md:mb-8'>
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
            row-span-3 flex justify-center items-center bg-gray-200 border border-gray-300 text-center rounded-lg`}
            >
              <div>
                <span className='text-4xl md:text-5xl font-bold'>
                  {formatNumber(T_Casos_Unicos)}
                </span>
                <h3 className='uppercase text-sm md:text-base'>Casos Únicos</h3>
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
      </section>

      {/* letalidad */}
      <section className='mb-12 md:mb-16 grid grid-cols-2 gap-3 small:gap-4'>
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
      </section>

      {/* Pruebas */}
      {(T_Casos_Pos &&
        T_Casos_Neg &&
        T_Casos_Pend &&
        T_Casos &&
        T_Casos_Inconcluso) !== null ? (
        <section className='mb-12 md:mb-16'>
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
        </section>
      ) : (
        ' '
      )}

      {/* Distribucion */}
      <section className='mb-8'>
        <h2 className='font-black text-2xl text-center mb-8 md:mb-12'>
          Casos de COVID-19
        </h2>
        <div className='mb-4 md:mb-8 grid md:grid-cols-2 gap-3 small:gap-4'>
          {T_50_59 !== null ? (
            <div className='mb-4 md:mb-8'>
              <h3 className='font-black text-lg text-center md:mb-4'>Edad</h3>
              <div className='h-300 md:h-400'>
                <ResponsiveBar {...ageDistProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}
          {(T_Masc && T_Fem) !== null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>Sexo</h3>
              <div className='h-300 md:h-350'>
                <ResponsivePie {...sexProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}
        </div>
      </section>

      {/* Ventiladores */}
      <section className='mb-4 md:mb-16'>
        <h2 className='font-black text-2xl text-center mb-8 md:mb-12'>
          Utilización de ventiladores
        </h2>
        <div className='mb-4 md:mb-8 grid md:grid-cols-2 small:gap-4'>
          {(T_Vent_Adult_Disp && T_Vent_Adult && T_Vent_Adult_Occ) !== null ? (
            <div className='mb-4 md:mb-0'>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Adultos
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
            <div className='mb-4 md:mb-0'>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Pediátrico
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
      </section>

      {/* Hospitalizaciones */}
      <section>
        <h2 className='font-black text-2xl text-center mb-8 md:mb-12'>
          Ocupación de camas de hospital
        </h2>
        <div className='grid md:grid-cols-2 gap-4'>
          {(T_Hospitalizados && T_Pacientes_Int_Covid) !== null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Casos de COVID-19 en hospitales
              </h3>
              <div className='h-300 md:h-400'>
                <ResponsiveBar {...hospitalProps} />
              </div>
            </div>
          ) : (
            ' '
          )}
          {(T_Cuartos_PSINeg_Disp &&
            T_Cuartos_PSINeg_Occ &&
            T_Cuartos_PSiNeg) !== null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Cuartos de presión negativa
              </h3>
              <div className='h-300 md:h-350'>
                <ResponsivePie {...psiNegProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}

          {(T_Camas_Adult_Int_Disp &&
            T_Camas_Adult_Int_Occ &&
            T_Camas_Int_Adult) !== null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Intensivo adultos
              </h3>
              <div className='h-300 md:h-350'>
                <ResponsivePie {...camasAdultIntProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}

          {(T_Camas_Ped_Int_Disp && T_Camas_Ped_Int_Occ && T_Camas_Int_Ped) !==
          null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Intensivo pediátrico
              </h3>
              <div className='h-300 md:h-350'>
                <ResponsivePie {...camasPedIntProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}
          {(T_Camas_Adult_Disp && T_Paciente_Adult && T_Camas_Adulto) !==
          null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Adultos general
              </h3>
              <div className='h-300 md:h-350'>
                <ResponsivePie {...camasAdultProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}

          {(T_Camas_Ped_Disp && T_Paciente_Ped && T_Camas_Ped) !== null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Pediátrico general
              </h3>
              <div className='h-300 md:h-350'>
                <ResponsivePie {...camasPedProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}
        </div>
      </section>
    </>
  );
}
