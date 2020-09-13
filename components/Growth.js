import dynamic from 'next/dynamic';
import React from 'react';
import GrowthPlot from './GrowthPlot';
import BodyLink from './BodyLink';
import Source from './Source';
import fos_fit from '../data/fos_fit.json';
import rg from '../data/rg.json';

const InfoAccordion = dynamic(import('./InfoAccordion'));

const Growth = () => {
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

  return (
    <section className='mb-4 md:mb-8 lg:mb-12'>
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
              {parseInt(halving)} días (entre {parseInt(halving_conf[0])} días a{' '}
              {parseInt(halving_conf[1])} días)
            </span>{' '}
          </p>
        </div>
      </div>

      <GrowthPlot
        data={fos_fit}
        caption={
          <>
            Gráfica de crecimiento. La curva epidémica de la segunda etapa de la
            epidemia se divide en un antes de crecimiento y un después de
            decrecimiento tomando como punto de corte el pico (hasta el momento)
            del 4 de agosto de 2020. El área de color rosado señala días en los
            que pudieran faltar casos por reportarse. <Source />
          </>
        }
      />

      <InfoAccordion label='Nota sobre el crecimiento'>
        <p className='mb-4'>
          Si el número reproductivo instantáneo (<em>R</em>
          <sub>t</sub>) provee información sobre la dirección de los contagios
          en la propagación de la epidemia (en términos de transmisibilidad), la
          tasa de crecimiento provee información sobre el tamaño y la velocidad
          del cambio de nuevos casos, es decir, qué tan rápido crece (o se
          contrae) la curva epidémica. Números positivos indican que los casos
          están creciendo, mientras que números negativos indican que los casos
          se reducen. A mayor el número, mayor la aceleración tanto de
          crecimiento como de contracción. Algo para tener en cuenta es que la
          incertidumbre aumenta cuando hay pocos casos reportados. Para más
          información sobre cómo valorar la relación entre <em>R</em> y el
          indicador de crecimiento visita la página de{' '}
          <BodyLink
            label='Reino Unido'
            link='https://www.gov.uk/guidance/the-r-number-in-the-uk'
          />{' '}
          que tomo como referencia.
        </p>
      </InfoAccordion>
    </section>
  );
};

export default Growth;
