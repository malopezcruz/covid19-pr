import React from 'react';
import RtPlot from './RtPlot';
export default function Rt() {
  return (
    <section className='mt-2 md:mt-8  mb-12 md:mb-20'>
      <h2 className='text-2xl md:text-4xl text-blue-900 font-semibold mb-8 leading-tight'>
        Estimado del número reproductivo instantáneo <em>R</em>
        <sub>t</sub>
      </h2>

      <RtPlot />

      <h3 className='text-xl md:text-2xl text-blue-900 font-semibold mb-4'>
        Breve nota sobre el número reproductivo
      </h3>
      <p className='mb-4'>
        El número reproductivo básico (
        <span className='text-blue-900 font-semibold'>
          <em>R</em>
          <sub>0</sub>
        </span>
        ) es el número de infecciones secundarias producto de un caso de
        infección en una población susceptible. Si <em>R</em>
        <sub>0</sub> es mayor de 1 (<em>R</em>
        <sub>0</sub> &gt; 1), tendríamos crecimiento y los casos aumentarían a
        mayor velocidad. A manera de ejemplo: si <em>R</em> fuera igual a 2, 100
        personas podrían infectar a otras 200 personas, mientras que si{' '}
        <em>R</em> fuera 0.5 solamente infectarían a otras 50. En este sentido,{' '}
        <span className='text-blue-900 font-semibold'>
          <em>R</em>
          <sub>t</sub>
        </span>{' '}
        (número reproductivo efectivo o instantáneo) representa el promedio de
        las variaciones de <em>R</em> en el tiempo. Su importancia radica en que
        nos permite tener una idea del éxito o fracaso de las medidas adoptadas
        para contener la epidemia.
      </p>
      <p className='mb-4'>
        Para calcular
        <span className='text-blue-900 font-semibold'>
          <em>R</em>
          <sub>t</sub>
        </span>{' '}
        realizo un estimado paramétrico con media de intervalo serial de 4.8 y
        desviación estándar de 2.3 (véase{' '}
        <a
          className='border-b-2 border-pink-400 hover:border-pink-600 hover:transition-colors duration-500 ease-in-out'
          href='https://www.sciencedirect.com/science/article/pii/S1201971220301193'
          rel='noreferrer noopenner'
          target='_blank'
        >
          Nishiura et al., IJID, 2020
        </a>
        ) basado en un promedio móvil de 14 días. Se utiliza además los datos
        actualizados de incidencia de casos confirmados que provee el
        Departamento de Salud de Puerto Rico en su{' '}
        <a
          className='border-b-2 border-pink-400 hover:border-pink-600 hover:transition-colors duration-500 ease-in-out'
          href='http://www.salud.gov.pr/Estadisticas-Registros-y-Publicaciones/Pages/COVID-19.aspx'
          rel='noreferrer noopenner'
          target='_blank'
        >
          informe diario
        </a>
        . Parto del supuesto de que puede haber rezagos en la divulgación de los
        resultados de las pruebas.{' '}
        <span className='text-blue-900'>
          <em>
            Por ello es importante ver estos números como una tendencia general,
            un escenario probable entre otros tantos &mdash;diferente selección
            de parámetros y diversas dinámicas de contactos en la población
            darían estimaciones distintas&mdash;, por lo que hay que valorar en
            su contexto la última semana de datos
          </em>
        </span>
        .
      </p>
      <p>
        Si quieres conocer más sobre qué es <em>R</em>
        <sub>t</sub> y <em>R</em>
        <sub>0</sub>, y la relación de éstos con otros indicadores visita el
        siguiente enlace donde recopilo algunos artículos sobre el{' '}
        <a
          className='border-b-2 border-pink-400 hover:border-pink-600 hover:transition-colors duration-500 ease-in-out'
          href='https://bit.ly/rt-bib'
          rel='noreferrer noopenner'
          target='_blank'
        >
          número reproductivo y sus variantes
        </a>{' '}
        (más adelante incluiré las referencias en esta página).
      </p>
    </section>
  );
}
