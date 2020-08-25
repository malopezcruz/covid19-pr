import React from 'react';
import ExtLink from './ExtLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className='bg-gray-900 tracking-wide py-8 font-light'>
      <div className='w-full max-w-screen-lg px-4 lg:px-0 mx-auto grid gri-cols-1 md:grid-cols-3 md:gap-6 text-gray-200 pt-6'>
        <div className='mb-6'>
          <h3 className='text-xl mb-2 font-medium'>En Puerto Rico...</h3>
          <ul className='flex flex-col'>
            <li className='ml-4 mb-2'>
              <ExtLink
                link='https://bioseguridad.maps.arcgis.com/apps/opsdashboard/index.html#/3bfb64c9a91944bc8c41edd8ff27e6df'
                label='Dashboard Puerto Rico COVID-19'
              />
            </li>
            <li className='ml-4 mb-2'>
              <ExtLink
                link='https://rconnect.dfci.harvard.edu/covidpr/'
                label='Monitoreo de la tasa de positividad'
              />
            </li>
            <li className='ml-4 mb-2'>
              <ExtLink
                link='https://estadisticas.pr/en/covid-19'
                label='Instituto de Estadísticas de Puerto Rico'
              />
            </li>
            <li className='ml-4 mb-2'>
              <ExtLink
                link='http://www.salud.gov.pr/Pages/coronavirus.aspx'
                label='Departamento de Salud de Puerto Rico'
              />
            </li>
            <li className='ml-4 mb-2'>
              <ExtLink
                link='https://sacundim.github.io/covid-19-puerto-rico/'
                label='Análisis de los boletines diarios de COVID-19 en PR'
              />
            </li>
            <li className='ml-4 mb-2'>
              <ExtLink
                link='https://colab.research.google.com/drive/12SleJ6K7hNsHLdSEsqcusHpqMky6oXtN#scrollTo=t1r-h4aFI7_q'
                label='Directorio de SMICRC (Rastreo de contactos)'
              />
            </li>
          </ul>
        </div>
        <div className='mb-6'>
          <h3 className='text-xl mb-2 font-medium'>En el mundo...</h3>
          <ul className='flex flex-col'>
            <li className='ml-4 mb-2'>
              <ExtLink
                link='https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'
                label='The Center for Systems Science and Engineering (CSSE) at JHU'
              />
            </li>
            <li className='ml-4 mb-2'>
              <ExtLink
                link='https://www.worldometers.info/coronavirus/'
                label='Worldometer'
              />
            </li>
          </ul>
        </div>
        <div className='mb-6'>
          <h3 className='text-xl mb-2 font-medium'>Nota técnica</h3>
          <p>
            <em>R</em>
            <sub>t</sub> se calcula utilizando los paquetes{' '}
            <ExtLink
              link='https://cran.r-project.org/web/packages/EpiEstim/index.html'
              label='EpiEstim'
            />{' '}
            e{' '}
            <ExtLink
              link='https://cran.r-project.org/web/packages/incidence/index.html'
              label='Incidence'
            />{' '}
            para el lenguaje R.
          </p>
        </div>
        <div className='md:col-span-3 text-center'>
          <a
            href='https://github.com/malopezcruz/covid19-pr'
            className='text-gray-400 text-2xl mr-8'
            rel='noreferrer noopenner'
            target='_blank'
            aria-label='Github'
          >
            <FontAwesomeIcon
              icon={['fab', 'github']}
              fixedWidth
              width='24'
              className='inline'
            />
          </a>
          <a
            href='https://twitter.com/malopezcruz/'
            className='text-gray-400 text-2xl'
            rel='noreferrer noopenner'
            target='_blank'
            aria-label='Twitter'
          >
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              fixedWidth
              width='24'
              className='inline'
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
