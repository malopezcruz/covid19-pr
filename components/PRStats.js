import React from 'react';
import ErrorMessage from './ErrorMessage';
import DataBox from './DataBox';
import CategoryBox from './CategoryBox';
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
import ToolTipComp from './ToolTipComp';

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
    T_Camas_Int_Adult,
    T_Camas_Int_Ped,
    T_Cuartos_PSiNeg,
    T_Cuartos_PSINeg_Occ,
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
    T_Casos_Diario_Serologicos,
    T_Casos_Diarios_Molecular,
    T_Muertes_COVID_RD,
    T_Fatalidades,
    T_Paciente_Adult_Int_Covid,
    T_Paciente_Adult_Int_NoCovid,
    T_Paciente_Ped_Int_Covid,
    T_Paciente_Ped_Int_No_Covid,
    T_Camas_Ped_Int_Occ,
  } = stats.data[0].table[0].attributes;

  const pieDefault = {
    margin: { top: 30, right: 80, bottom: 80, left: 80 },
    innerRadius: 0.37,
    padAngle: 1,
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
    },
    borderWidth: 1,
    borderColor: {
      from: 'color',
      modifiers: [['darker', 0.2]],
    },
    radialLabelsSkipAngle: 0,
    radialLabelsTextXOffset: 0,
    radialLabelsTextColor: '#222',
    radialLabelsLinkOffset: 0,
    radialLabelsLinkDiagonalLength: 0,
    radialLabelsLinkHorizontalLength: 0,
    radialLabelsLinkStrokeWidth: 0,
    radialLabelsLinkColor: { from: 'color' },
    slicesLabelsSkipAngle: 0,
    slicesLabelsTextColor: '#222',
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
    borderWidth: 1,
    borderColor: {
      from: 'color',
      modifiers: [['darker', 0.3]],
    },
  };

  const legendColumnDefault = {
    legends: [
      {
        anchor: 'bottom',
        direction: 'column',
        translateY: 80,
        translateX: -25,
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
          1
        )}%)`,
        label: `Disponibles (${percentage(T_Vent_Ped_Disp, T_Vent_Ped).toFixed(
          1
        )}%)`,
        value: T_Vent_Ped_Disp,
        color: 'red',
      },
      {
        id: `Paciente Regular (${percentage(
          T_Vent_Ped_NoCovid,
          T_Vent_Ped
        ).toFixed(1)}%)`,
        label: `Paciente Regular (${percentage(
          T_Vent_Ped_NoCovid,
          T_Vent_Ped
        ).toFixed(1)}%)`,
        value: T_Vent_Ped_NoCovid,
        color: 'blue',
      },
      {
        id: `Paciente COVID-19 (${percentage(
          T_Vent_Ped_Covid,
          T_Vent_Ped
        ).toFixed(1)}%)`,
        label: `Paciente COVID-19 (${percentage(
          T_Vent_Ped_Covid,
          T_Vent_Ped
        ).toFixed(1)}%)`,
        value: T_Vent_Ped_Covid,
        color: 'blue',
      },
    ],
    ...legendColumnDefault,
  };

  const ventAdultData = {
    data: [
      {
        id: `Disponibles (${percentage(T_Vent_Adult_Disp, T_Vent_Adult).toFixed(
          1
        )}%)`,
        label: `Disponibles (${percentage(
          T_Vent_Adult_Disp,
          T_Vent_Adult
        ).toFixed(1)}%)`,
        value: T_Vent_Adult_Disp,
        color: 'red',
      },
      {
        id: `Paciente Regular (${percentage(
          T_Vent_Adult_NoCovid,
          T_Vent_Adult
        ).toFixed(1)}%)`,
        label: `Paciente Regular (${percentage(
          T_Vent_Adult_NoCovid,
          T_Vent_Adult
        ).toFixed(1)}%)`,
        value: T_Vent_Adult_NoCovid,
        color: 'blue',
      },
      {
        id: `Paciente COVID-19 (${percentage(
          T_Vent_Adult_Covid,
          T_Vent_Adult
        ).toFixed(1)}%)`,
        label: `Paciente COVID-19 (${percentage(
          T_Vent_Adult_Covid,
          T_Vent_Adult
        ).toFixed(1)}%)`,
        value: T_Vent_Adult_Covid,
        color: 'blue',
      },
    ],
    ...legendColumnDefault,
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
        ).toFixed(1)}%)`,
        label: `Disponibles (${percentage(
          T_Camas_Adult_Int_Disp,
          T_Camas_Int_Adult
        ).toFixed(1)}%)`,
        value: T_Camas_Adult_Int_Disp,
        color: 'red',
      },
      {
        id: `Paciente Regular (${percentage(
          T_Paciente_Adult_Int_NoCovid,
          T_Camas_Int_Adult
        ).toFixed(1)}%)`,
        label: `Paciente Regular (${percentage(
          T_Paciente_Adult_Int_NoCovid,
          T_Camas_Int_Adult
        ).toFixed(1)}%)`,
        value: T_Paciente_Adult_Int_NoCovid,
        color: 'blue',
      },
      {
        id: `Paciente COVID-19 (${percentage(
          T_Paciente_Adult_Int_Covid,
          T_Camas_Int_Adult
        ).toFixed(1)}%)`,
        label: `Paciente COVID-19 (${percentage(
          T_Paciente_Adult_Int_Covid,
          T_Camas_Int_Adult
        ).toFixed(1)}%)`,
        value: T_Paciente_Adult_Int_Covid,
        color: 'blue',
      },
    ],
    ...legendColumnDefault,
  };

  // Intensivo Pediátrico
  const camasPedIntData = {
    data: [
      {
        id: `Disponibles (${percentage(
          T_Camas_Ped_Int_Disp,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        label: `Disponibles (${percentage(
          T_Camas_Ped_Int_Disp,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        value: T_Camas_Ped_Int_Disp,
        color: 'red',
      },
      {
        id: `Paciente Regular (${percentage(
          T_Camas_Int_Ped - T_Camas_Ped_Int_Disp,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        label: `Paciente Regular (${percentage(
          T_Camas_Int_Ped - T_Camas_Ped_Int_Disp,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        value: T_Camas_Int_Ped - T_Camas_Ped_Int_Disp,
        color: 'blue',
      },
      {
        id: `Paciente COVID-19 (${percentage(
          T_Paciente_Ped_Int_Covid,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        label: `Paciente COVID-19 (${percentage(
          T_Paciente_Ped_Int_Covid,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        value: T_Paciente_Ped_Int_Covid,
        color: 'blue',
      },
    ],
    ...legendColumnDefault,
  };

  const camasPedIntDataNoCovidData = {
    data: [
      {
        id: `Disponibles (${percentage(
          T_Camas_Ped_Int_Disp,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        label: `Disponibles (${percentage(
          T_Camas_Ped_Int_Disp,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        value: T_Camas_Ped_Int_Disp,
        color: 'red',
      },
      {
        id: `Paciente Regular (${percentage(
          T_Camas_Ped_Int_Occ,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        label: `Paciente Regular (${percentage(
          T_Camas_Ped_Int_Occ,
          T_Camas_Int_Ped
        ).toFixed(1)}%)`,
        value: T_Camas_Ped_Int_Occ,
        color: 'blue',
      },
    ],
    ...legendColumnDefault,
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
    ...pieDefault,
    ...camasAdultIntData,
  };

  const camasPedIntProps = {
    ...pieDefault,
    ...camasPedIntData,
  };

  const camasPedIntNoCovidDataProps = {
    ...pieDefault,
    ...camasPedIntDataNoCovidData,
  };

  const psiNegProps = {
    ...psiNegData,
    ...pieDefault,
  };

  return (
    <CategoryBox>
      <section className='mb-4 md:mb-8'>
        <div className='text-center mb-8'>
          <h2 className='font-black text-4xl '>Puerto Rico</h2>
          <p>
            Última actualización: <strong>{formatDate(EditDate)}</strong>
          </p>
        </div>

        <div className={`grid grid-cols-2 gap-3 small:gap-4`}>
          <div
            className={`py-8 px-2
            row-span-3 flex justify-center items-center bg-gray-200 border border-gray-300 text-center rounded-lg`}
          >
            {T_Casos_Unicos !== null ? (
              <div>
                <span className='text-4xl md:text-5xl font-bold'>
                  {formatNumber(T_Casos_Unicos)}
                </span>
                <h3 className='uppercase text-sm md:text-base'>Casos Únicos</h3>
              </div>
            ) : (
              <h3 className='font-black text-lg text-center md:mb-4'>
                Sin Datos
              </h3>
            )}
          </div>

          {T_Molecular_Pos !== null ? (
            <DataBox
              number={formatNumber(T_Molecular_Pos)}
              label='Prueba Molecular'
            />
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}

          {T_Serologicos_Pos !== null ? (
            <DataBox
              number={formatNumber(T_Serologicos_Pos)}
              label='Prueba Serológica'
            />
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}

          {T_Casos_Nuev_Ult_Inf !== null ? (
            <DataBox
              number={formatNumber(T_Casos_Nuev_Ult_Inf)}
              label='Casos Nuevos'
            >
              {T_Casos_Diario_Serologicos !== null && (
                <ToolTipComp
                  datafor='newcases'
                  uniqueID={T_Casos_Diario_Serologicos}
                >
                  <table className='table-auto'>
                    <tbody>
                      <tr>
                        <td className='px-2 py-1'>Prueba molecular:</td>
                        <td className='px-2 py-1 text-right'>
                          <strong>
                            {formatNumber(T_Casos_Diarios_Molecular)}
                          </strong>
                        </td>
                      </tr>
                      <tr>
                        <td className='px-2 py-1'>Prueba serológica:</td>
                        <td className='px-2 py-1 text-right'>
                          <strong>
                            {formatNumber(T_Casos_Diario_Serologicos)}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </ToolTipComp>
              )}
            </DataBox>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}
        </div>
      </section>

      {/* letalidad */}
      <section className='mb-12 md:mb-16 grid grid-cols-2 gap-3 small:gap-4'>
        {T_Muertes_Combinadas !== null ? (
          <DataBox
            number={formatNumber(T_Muertes_Combinadas)}
            label='Muertes combinadas'
          >
            {(T_Fatalidades && T_Muertes_COVID_RD) !== null && (
              <ToolTipComp datafor='fatality' uniqueID={T_Muertes_Combinadas}>
                <table className='table-auto'>
                  <tbody>
                    <tr>
                      <td className='px-2 py-1'>Vigilancia de COVID-19:</td>
                      <td className='px-2 py-1 text-right'>
                        <strong>{formatNumber(T_Fatalidades)}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-2 py-1'>
                        Registro demográfico COVID-19:
                      </td>
                      <td className='px-2 py-1 text-right'>
                        <strong>{formatNumber(T_Muertes_COVID_RD)}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ToolTipComp>
            )}
          </DataBox>
        ) : (
          <h3 className='font-black text-lg text-center md:mb-4'>Sin Datos</h3>
        )}
        {(T_Casos_Unicos && T_Muertes_Combinadas) !== null ? (
          <DataBox
            number={`${deathRate(T_Casos_Unicos, T_Muertes_Combinadas).toFixed(
              2
            )}%`}
            label='Tasa de Letalidad'
          />
        ) : (
          <h3 className='font-black text-lg text-center md:mb-4'>Sin Datos</h3>
        )}
      </section>

      {/* <div className='mb-4 md:mb-8 grid md:grid-cols-2 gap-3 small:gap-4'>
        <iframe
          src='https://ourworldindata.org/grapher/total-cases-covid-19?year=2020-05-09&time=2020-03-28..&country=PRI'
          style={{ width: '100%', height: '600px', border: '0px none' }}
        ></iframe>
        <iframe
          src='https://ourworldindata.org/grapher/total-deaths-covid-19?time=2020-03-28..&country=PRI'
          style={{ width: '100%', height: '600px', border: '0px none' }}
        ></iframe>
      </div> */}

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
              <h3 className='font-black text-lg text-center md:mb-4'>Género</h3>
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
          {(T_Vent_Adult_Disp &&
            T_Vent_Adult &&
            T_Vent_Adult_NoCovid &&
            T_Vent_Ped_NoCovid) !== null ? (
            <div className='mb-4 md:mb-0'>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Adultos{' '}
                <span className='text-gray-500 font-light'>
                  {`(${formatNumber(T_Vent_Adult)})`}
                </span>
              </h3>
              <div className='h-300 md:h-350 pb-4 md:pb-0'>
                <ResponsivePie {...ventAdultProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}
          {(T_Vent_Ped_Disp &&
            T_Vent_Ped &&
            T_Vent_Ped_NoCovid &&
            T_Vent_Ped_Covid) !== null ? (
            <div className='mb-4 md:mb-0'>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Pediátrico{' '}
                <span className='text-gray-500 font-light'>
                  {`(${formatNumber(T_Vent_Ped)})`}
                </span>
              </h3>
              <div className='h-300 md:h-350 pb-4 md:pb-0'>
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
                Cuartos de presión negativa{' '}
                <span className='text-gray-500 font-light'>
                  {`(${formatNumber(T_Cuartos_PSiNeg)})`}
                </span>
              </h3>
              <div className='h-300 md:h-350 pb-4 md:pb-0'>
                <ResponsivePie {...psiNegProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}

          {/* Cuidado intensivo */}
          {(T_Camas_Adult_Int_Disp &&
            T_Paciente_Adult_Int_Covid &&
            T_Paciente_Adult_Int_NoCovid &&
            T_Camas_Int_Adult) !== null ? (
            <div className='mb-4 md:mb-12'>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Intensivo adultos{' '}
                <span className='text-gray-500 font-light'>
                  {`(${formatNumber(T_Camas_Int_Adult)})`}
                </span>
              </h3>
              <div className='h-300 md:h-350 pb-4 md:pb-0'>
                <ResponsivePie {...camasAdultIntProps} />
              </div>
            </div>
          ) : (
            <h3 className='font-black text-lg text-center md:mb-4'>
              Sin Datos
            </h3>
          )}

          {(T_Camas_Ped_Int_Disp &&
            T_Paciente_Ped_Int_Covid &&
            T_Paciente_Ped_Int_No_Covid &&
            T_Camas_Int_Ped) !== null ? (
            <div className='mb-4 md:b-12'>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Intensivo pediátrico{' '}
                <span className='text-gray-500 font-light'>
                  {`(${formatNumber(T_Camas_Int_Ped)})`}
                </span>
              </h3>
              <div className='h-300 md:h-350 pb-4 md:pb-0'>
                <ResponsivePie {...camasPedIntProps} />
              </div>
            </div>
          ) : (
            <div className='mb-4 md:b-12'>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Intensivo pediátrico{' '}
                <span className='text-gray-500 font-light'>
                  {`(${formatNumber(T_Camas_Int_Ped)})`}
                </span>
              </h3>
              <div className='h-300 md:h-350 pb-4 md:pb-0'>
                <ResponsivePie {...camasPedIntNoCovidDataProps} />
              </div>
            </div>
          )}

          {/* Camas en general */}
          {(T_Camas_Adult_Disp && T_Paciente_Adult && T_Camas_Adulto) !==
          null ? (
            <div>
              <h3 className='font-black text-lg text-center md:mb-4'>
                Adultos general{' '}
                <span className='text-gray-500 font-light'>
                  {`(${formatNumber(T_Camas_Adulto)})`}
                </span>
              </h3>
              <div className='h-300 md:h-350 pb-4 md:pb-0'>
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
                Pediátrico general{' '}
                <span className='text-gray-500 font-light'>
                  {`(${formatNumber(T_Camas_Ped)})`}
                </span>
              </h3>
              <div className='h-300 md:h-350 pb-4 md:pb-0'>
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
    </CategoryBox>
  );
}
