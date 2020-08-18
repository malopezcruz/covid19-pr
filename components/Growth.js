import React from 'react';
import fos_fit from '../data/fos_fit.json';
import RgPlot from './RgPLot';
import rg from '../data/rg.json';

const {
  r_conf,
  r,
  halving,
  halving_conf,
  r_before,
  r_conf_before,
  doubling,
  doubling_conf,
} = rg[0];

export default function Rt() {
  return (
    <section className='mb-12 md:mb-24'>
      <h2 className='uppercase text-2xl md:text-4xl text-blue-900 font-semibold mb-6 md:mb-12 leading-tight'>
        Crecimiento de la curva epidémica
      </h2>
      <div className='grid md:grid-cols-2 md:gap-8'>
        <div className='shadow-md p-4 border-t-8 border-blue-800 mb-6'>
          <h3 className='font-semibold text-center uppercase text-blue-900 mb-2'>
            Antes
          </h3>
          <p className='md:text-lg text-subtitle mb-2'>
            <strong>Crecimiento</strong>: <strong>{r_before * 100}%</strong> (
            {Math.round(r_conf_before[0] * 100)}% a {r_conf_before[1] * 100}
            %, 95% CI)
          </p>
          <p className='md:text-lg text-subtitle mb-2'>
            <strong>Duplicación</strong>:{' '}
            <strong>{parseInt(doubling)} días</strong> (entre{' '}
            {parseInt(doubling_conf[0])} días a {parseInt(doubling_conf[1])}{' '}
            días)
          </p>
        </div>
        <div className='shadow-md p-4 border-t-8 border-blue-800 mb-6'>
          <h3 className='uppercase font-semibold text-center text-blue-900 mb-2'>
            Después
          </h3>
          <p className='md:text-lg text-subtitle mb-2'>
            <strong>Decrecimiento</strong>: <strong>{r * 100}%</strong> (
            {r_conf[0] * 100}% a {r_conf[1] * 100}
            %, 95% CI)
          </p>
          <p className='md:text-lg text-subtitle mb-2'>
            <strong>Reducción a la mitad</strong>:{' '}
            <strong>{parseInt(halving)} días</strong> (entre{' '}
            {parseInt(halving_conf[0])} días a {parseInt(halving_conf[1])} días)
          </p>
        </div>
      </div>
      <div className='mb-8 md:mb-12 '></div>

      <RgPlot
        data={fos_fit}
        caption={
          <>
            Gráfica de crecimiento. La curva epidémica de la segunda etapa de la
            epidemia se divide en un antes de crecimiento y un después de
            decrecimiento tomando como punto de corte el pico (hasta el momento)
            del 13 de julio de 2020. Fuente: Departamento de Salud de Puerto
            Rico,
            <em>Informe de Casos COVID-19.</em>
          </>
        }
      />
    </section>
  );
}
