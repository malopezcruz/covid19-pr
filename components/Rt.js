import dynamic from 'next/dynamic';
import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import RtPlot from './RtPlot';
import BodyLink from './BodyLink';
import Source from './Source';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoAccordion = dynamic(import('./InfoAccordion'));

const Rt = () => {
  const { r_number, r_number_7, r_number_bioportal, reportDate } = useContext(
    DataContext
  );
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className='mb-4 md:mb-8 lg:mb-12'>
      <h2 className='text-xl md:text-3xl text-blue-900 font-semibold mb-4 md:mb-6 leading-tight'>
        <span className='uppercase'>número reproductivo instantáneo</span> (
        <em>R</em>
        <sub>t</sub>)
      </h2>

      {/* Tab */}
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-6 flex-row justify-start'
            role='tablist'
          >
            <li
              className='-mb-px xsm:mr-8 sm:mr-12 last:mr-0 text-center'
              role='tab'
            >
              <a
                className={`text-sm flex items-center content-center uppercase sm:tracking-widest ${
                  openTab === 1
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#rt-14'
                role='tab'
              >
                <FontAwesomeIcon
                  icon={['fa', 'calendar-times']}
                  fixedWidth
                  width='12'
                  className='self-center mr-1 sm:mr-2'
                />
                14 días
              </a>
            </li>
            <li
              className='-mb-px xsm:mr-8 sm:mr-12 last:mr-0 text-center'
              role='tab'
            >
              <a
                className={`text-sm flex items-center content-center uppercase sm:tracking-widest ${
                  openTab === 2
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#rt-7'
                role='tab'
              >
                <FontAwesomeIcon
                  icon={['fa', 'calendar-week']}
                  fixedWidth
                  width='12'
                  className='self-center mr-1 sm:mr-2'
                />
                7 días
              </a>
            </li>
            <li
              className='-mb-px xsm:mr-2 sm:mr-12 last:mr-0 text-center'
              role='tab'
            >
              <a
                className={`text-sm flex items-center content-center uppercase sm:tracking-widest ${
                  openTab === 3
                    ? 'text-blue-900 font-semibold'
                    : 'text-tabs font-medium hover:text-blue-900 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#bioportal'
                role='tab'
              >
                <FontAwesomeIcon
                  icon={['fa', 'calendar-times']}
                  fixedWidth
                  width='12'
                  className='self-center mr-1 sm:mr-2'
                />
                Bioportal
              </a>
            </li>
          </ul>
          {/* tabPanel */}
          <div
            className='relative flex flex-col min-w-0 break-words w-full'
            role='tabpanel'
          >
            <div className='pt-4 flex-auto'>
              <div className={openTab === 1 ? 'block' : 'hidden'} id='rt-14'>
                <RtPlot
                  data={r_number}
                  caption={
                    <>
                      Número reproductivo de casos confirmados, promedio de{' '}
                      <strong className='text-blue-900'>14 días</strong>. El
                      área azul celeste representa el{' '}
                      <em>95% de intervalo de credibilidad</em>. El área de
                      color rosado señala días en los que pudieran faltar por
                      reportarse más casos. <Source />
                    </>
                  }
                />
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id='rt-7'>
                <RtPlot
                  data={r_number_7}
                  caption={
                    <>
                      Número reproductivo de casos confirmados, promedio de{' '}
                      <strong className='text-blue-900'>7 días</strong>. El área
                      azul celeste representa el{' '}
                      <em>95% de intervalo de credibilidad</em>. El área de
                      color rosado señala días en los que pudieran faltar por
                      reportarse más casos. <Source />
                    </>
                  }
                />
              </div>
              <div
                className={openTab === 3 ? 'block' : 'hidden'}
                id='bioportal'
              >
                <RtPlot
                  data={r_number_bioportal}
                  caption={
                    <>
                      Número reproductivo de casos de prueba positiva molecular,
                      promedio de{' '}
                      <strong className='text-blue-900'>14 días</strong>. El
                      área azul celeste representa el{' '}
                      <em>95% de intervalo de credibilidad</em>. El área de
                      color rosado señala días en los que pudieran faltar por
                      reportarse más casos. Fuente:{' '}
                      <em>
                        <BodyLink
                          link='https://rconnect.dfci.harvard.edu/covidpr/'
                          label='Monitoreo de COVID-19 en
                          Puerto Rico'
                        />
                      </em>
                      , {reportDate}.
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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
