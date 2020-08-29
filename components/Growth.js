import React from 'react';
import GrowthPlot from './GrowthPlot';
import Source from './Source';
import fos_fit from '../data/fos_fit.json';
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
    <section className='mb-12 md:mb-16 lg:mb-24'>
      <h2 className='uppercase text-xl md:text-3xl text-blue-900 font-semibold mb-6 md:mb-12 leading-tight'>
        Crecimiento de la curva epidémica
      </h2>
      <div className='grid md:grid-cols-2 gap-1 md:gap-8 mb-6'>
        <div className='shadow-md rounded p-4 border-t-8 border-blue-800 mb-6'>
          <h3 className='font-semibold text-center uppercase text-blue-900 mb-2'>
            Antes
          </h3>
          <p className='md:text-lg text-subtitle mb-2'>
            <span className='text-blue-900 font-semibold'>Crecimiento</span>:{' '}
            <span className='text-blue-900 opacity-80 font-medium'>
              {r_before * 100}% ({Math.round(r_conf_before[0] * 100)}% &#8211;{' '}
              {Math.round(r_conf_before[1] * 100)}
              %, 95% CI)
            </span>
          </p>
          <p className='md:text-lg text-subtitle mb-2'>
            <span className='text-blue-900 font-semibold'>Duplicación</span>:{' '}
            <span className='text-blue-900 opacity-80 font-medium'>
              {parseInt(doubling)} días (entre {parseInt(doubling_conf[0])} días
              a {parseInt(doubling_conf[1])} días)
            </span>
          </p>
        </div>
        <div className='shadow-md rounded p-4 border-t-8 border-blue-800 mb-6'>
          <h3 className='uppercase font-semibold text-center text-blue-900 mb-2'>
            Después
          </h3>
          <p className='md:text-lg text-subtitle mb-2'>
            <span className='text-blue-900 font-semibold'>Decrecimiento</span>:{' '}
            <span className='text-blue-900 opacity-80 font-medium'>
              {Math.round(r * 100)}% ({Math.round(r_conf[0] * 100)}% &#8211;{' '}
              {Math.round(r_conf[1] * 100)}
              %, 95% CI)
            </span>
          </p>
          <p className='md:text-lg text-subtitle mb-2'>
            <span className='text-blue-900 font-semibold'>
              Reducción a la mitad
            </span>
            :{' '}
            <span className='text-blue-900 opacity-80 font-medium'>
              {parseInt(halving)} días (entre {parseInt(halving_conf[0])} días
              {parseInt(halving_conf[1])} días)
            </span>{' '}
          </p>
        </div>
      </div>
      {/* <div className='mb-8 md:mb-12 '></div> */}

      <GrowthPlot
        data={fos_fit}
        caption={
          <>
            Gráfica de crecimiento. La curva epidémica de la segunda etapa de la
            epidemia se divide en un antes de crecimiento y un después de
            decrecimiento tomando como punto de corte el pico (hasta el momento)
            del 4 de agosto de 2020. El área ensombrecida de color rosado señala
            días en los que puediran faltar casos por reportarse. <Source />
          </>
        }
      />
    </section>
  );
}
