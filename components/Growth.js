import React from 'react';
import fos_fit from '../data/fos_fit.json';
import RgPlot from './RgPLot';
import rg from '../data/rg.json';

const { r_conf, r, halving, halving_conf } = rg[0];

export default function Rt() {
  return (
    <section className='mt-2 md:mt-8  mb-12 md:mb-20'>
      <h2 className='text-2xl md:text-4xl text-blue-900 font-semibold mb-2 leading-tight'>
        Crecimiento
      </h2>
      <div className='mb-8 md:mb-12 text-subtitle'>
        <p className='md:text-lg'>
          Crecimiento diario: {r * 100}% ({r_conf[0] * 100}% a {r_conf[1] * 100}
          %, 95% CI)
        </p>
        <p className='md:text-lg'>
          Reducción a la mitad: {parseInt(halving)} días
          {/* (entre{' '}
          {parseInt(halving_conf[0])} días a {parseInt(halving_conf[1])} días) */}
        </p>
      </div>

      <RgPlot
        data={fos_fit}
        caption={
          <>
            Gráfica de crecimiento. Fuente: Departamento de Salud de Puerto
            Rico,
            <em>Informe de Casos COVID-19.</em>
          </>
        }
      />
    </section>
  );
}
