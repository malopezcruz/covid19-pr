import React from 'react';
import ExtLink from './ExtLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div className='bg-gray-900 tracking-wide py-8 font-light'>
      <div className='w-full max-w-screen-xl px-4 mx-auto grid gri-cols-1 md:grid-cols-3 md:gap-6 text-gray-400 pt-6'>
        <div className='mb-6'>
          <h4 className='text-xl mb-2 font-medium'>
            Información oficial de Puerto Rico
          </h4>
          <ul className='flex flex-col'>
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
          </ul>
        </div>
        <div className='mb-6'>
          <h4 className='text-xl mb-2 font-medium'>Datos actualizados</h4>
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
          <h4 className='text-xl mb-2 font-medium'>Fuente</h4>
          <p className='ml-4 mb-2'>
            La información aquí presentada está tomada del repositorio{' '}
            <ExtLink
              link='https://github.com/mathdroid/covid-19-api'
              label='Covid-19 API'
            />
            . Su fuente son los datos que provee CSSE en JHU.
          </p>
          <p className='ml-4'>
            <span className='font-medium'>Nota:</span> Haremos disponibles los
            datos de personas recuperadas cuando estén disponibles.
          </p>
        </div>
        <div className='md:col-span-3 text-center'>
          <a
            href='https://github.com/malopezcruz/covid19-pr'
            className='text-gray-400 text-2xl'
            rel='noreferrer noopenner'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={['fab', 'github']}
              fixedWidth
              width='32'
              className='inline'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
