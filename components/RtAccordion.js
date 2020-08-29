import React from 'react';
import BodyLink from './BodyLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';

export default function RtAccordion() {
  return (
    <Accordion collapsible multiple>
      <AccordionItem>
        <h3>
          <AccordionButton className='py-4 text-lg md:text-xl text-blue-900 hover:text-blue-900 hover:opacity-90 font-semibold mb-4 leading-tight'>
            {' '}
            <FontAwesomeIcon
              icon='info-circle'
              width='16'
              fixedWidth
              className='inline -mt-1 mr-1'
            />
            Nota sobre el número reproductivo
          </AccordionButton>
        </h3>
        <AccordionPanel className='fadein mb-12 md:mb-24'>
          <p className='mb-4'>
            El número reproductivo básico (<em>R</em>
            <sub>0</sub>) es el número de infecciones secundarias producto de un
            caso de infección en una población susceptible. Si <em>R</em>
            <sub>0</sub> es mayor de 1 (<em>R</em>
            <sub>0</sub> &gt; 1), tendríamos crecimiento exponencial y los casos
            aumentarían a mayor velocidad. A manera de ejemplo: si <em>R</em>{' '}
            fuera igual a 2, 200 personas pudieran contraer COVID-19 al tener
            contacto con 100 personas, mientras que si <em>R</em> fuera 0.5
            solamente 50 personas pudieran contraer la enfermedad. En este
            sentido, el número reproductivo efectivo o instantáneo (<em>R</em>
            <sub>t</sub>) representa el promedio de las variaciones de{' '}
            <em>R</em> en el tiempo. Su importancia radica en que nos permite
            tener una idea del éxito o fracaso de las medidas adoptadas para
            contener la epidemia.
          </p>
          <p className='mb-4'>
            Para calcular <em>R</em>
            <sub>t</sub> realizo un estimado paramétrico con media de intervalo
            serial de 4.8 y desviación estándar de 2.3 (véase{' '}
            <BodyLink
              link='https://www.sciencedirect.com/science/article/pii/S1201971220301193'
              label='Nishiura et al., IJID, 2020'
            />
            ) basado en un promedio móvil de 14 días. Se utiliza además los
            datos actualizados de incidencia de casos confirmados que provee el
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
                general, un escenario probable entre otros tantos
                &mdash;diferente selección de parámetros y diversas dinámicas de
                contactos en la población darían estimaciones distintas&mdash;,
                por lo que hay que valorar en su contexto la última semana de
                datos
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
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
