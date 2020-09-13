import dynamic from 'next/dynamic';
import React from 'react';
import RtPlot from './RtPlot';
import BodyLink from './BodyLink';
import Source from './Source';
import rt from '../data/rt.json';

const InfoAccordion = dynamic(import('./InfoAccordion'));

const Rt = () => {
  return (
    <section className='mb-4 md:mb-8 lg:mb-12'>
      <h2 className='text-xl md:text-3xl text-blue-900 font-semibold mb-8 md:mb-12 leading-tight'>
        <span className='uppercase'>número reproductivo instantáneo</span> (
        <em>R</em>
        <sub>t</sub>)
      </h2>

      <RtPlot
        data={rt}
        caption={
          <>
            Número reproductivo de casos confirmados, promedio de 14 días. El
            área azul celeste representa el{' '}
            <em>95% de intervalo de credibilidad</em>. El área de color rosado
            señala días en los que pudieran faltar por reportarse más casos.{' '}
            <Source />
          </>
        }
      />

      <InfoAccordion label='Nota sobre el número reproductivo'>
        <p className='mb-4'>
          El número reproductivo básico (<em>R</em>
          <sub>0</sub>) es el número de infecciones secundarias producto de un
          caso de infección en una población susceptible. Si <em>R</em>
          <sub>0</sub> es mayor de 1 (<em>R</em>
          <sub>0</sub> &gt; 1), tendríamos crecimiento exponencial y los casos
          aumentarían a mayor velocidad. A manera de ejemplo: si <em>R</em>{' '}
          fuera igual a 2, 20 personas podrían infectarse con el virus
          SARS-CoV-2 al tener contacto con 10 personas (para un total de 30
          personas), mientras que si <em>R</em> fuera 0.5 solamente 5 personas
          podrían infectarse (para un total de 15 personas). En este sentido, el
          número reproductivo efectivo o instantáneo (<em>R</em>
          <sub>t</sub>) representa el promedio de las variaciones de <em>R</em>{' '}
          en el tiempo. Su importancia radica en que nos permite tener una idea
          del éxito o fracaso de las medidas adoptadas para contener la
          epidemia.
        </p>
        <p className='mb-4'>
          Para calcular <em>R</em>
          <sub>t</sub> realizo un estimado paramétrico con media de intervalo
          serial de 4.8 y desviación estándar de 2.3 (véase{' '}
          <BodyLink
            link='https://www.sciencedirect.com/science/article/pii/S1201971220301193'
            label='Nishiura et al., IJID, 2020'
          />
          ) basado en un promedio móvil de 14 días. Se utiliza además los datos
          actualizados de incidencia de casos confirmados que provee el
          Departamento de Salud de Puerto Rico en su{' '}
          <BodyLink
            link='http://www.salud.gov.pr/Estadisticas-Registros-y-Publicaciones/Pages/COVID-19.aspx'
            label='informe diario'
          />
          . Parto del supuesto de que puede haber rezagos en la divulgación de
          los resultados de las pruebas.{' '}
          <span className='text-blue-900'>
            <em>
              Por ello es importante ver estos números como una tendencia
              general, un escenario probable entre otros tantos &mdash;diferente
              selección de parámetros o diversas dinámicas de contactos en la
              población darían estimaciones distintas&mdash;, por lo que hay que
              valorar en su contexto la última semana de datos
            </em>
          </span>
          .
        </p>
        <p>
          Si quieres conocer más sobre qué es <em>R</em>
          <sub>t</sub> y <em>R</em>
          <sub>0</sub>, y la relación de éstos con otros indicadores visita el
          siguiente enlace donde recopilo algunos artículos sobre el{' '}
          <BodyLink
            link='https://bit.ly/rt-bib'
            label='número reproductivo y sus variantes'
          />{' '}
          (más adelante incluiré las referencias en esta página).
        </p>
      </InfoAccordion>
    </section>
  );
};

export default Rt;
