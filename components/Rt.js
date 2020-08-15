import React from 'react';
import BodyLink from './BodyLink';
import RtPlot from './RtPlot';
import rt from '../data/rt.json';
import { formatDateLabel } from '../utils/utils';

const { Intervalo, Fecha, Promedio } = rt[rt.length - 5];

export default function Rt() {
  return (
    <section className='mt-2 md:mt-8  mb-12 md:mb-20'>
      <h2 className='text-2xl md:text-4xl text-blue-900 font-semibold mb-2 leading-tight'>
        Estimado del número reproductivo instantáneo <em>R</em>
        <sub>t</sub>
      </h2>
      <div className='mb-8 md:mb-12 text-subtitle'>
        <p className='md:text-lg'>
          {formatDateLabel(Fecha)}: {Promedio} ({Intervalo[0]} - {Intervalo[1]}{' '}
          )
        </p>
      </div>

      <RtPlot
        data={rt}
        caption={
          <>
            Número reproductivo de casos confirmados, promedio de 14 días.
            Fuente: Departamento de Salud de Puerto Rico,{' '}
            <em>
              <BodyLink
                link='http://www.salud.gov.pr/Estadisticas-Registros-y-Publicaciones/Pages/COVID-19.aspx'
                label='Informe de casos COVID-19'
              />
            </em>
            .
          </>
        }
      />

      <article>
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
          <sub>0</sub> &gt; 1), tendríamos crecimiento exponencial y los casos
          aumentarían a mayor velocidad. A manera de ejemplo: si <em>R</em>{' '}
          fuera igual a 2, 200 personas pudieran contraer COVID-19 al tener
          contacto con 100 personas, mientras que si <em>R</em> fuera 0.5
          solamente 50 personas pudieran contraer la enfermedad. En este
          sentido, el número reproductivo efectivo o instantáneo (
          <span className='text-blue-900 font-semibold'>
            <em>R</em>
            <sub>t</sub>
          </span>
          ) representa el promedio de las variaciones de <em>R</em> en el
          tiempo. Su importancia radica en que nos permite tener una idea del
          éxito o fracaso de las medidas adoptadas para contener la epidemia.
        </p>
        <p className='mb-4'>
          Para calcular
          <span className='text-blue-900 font-semibold'>
            <em>R</em>
            <sub>t</sub>
          </span>{' '}
          realizo un estimado paramétrico con media de intervalo serial de 4.8 y
          desviación estándar de 2.3 (véase{' '}
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
              selección de parámetros y diversas dinámicas de contactos en la
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
      </article>
    </section>
  );
}
