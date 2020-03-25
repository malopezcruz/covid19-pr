import React from 'react';
import ExtLink from './ExtLink';

export default function Footer() {
  return (
    <div className='bg-gray-900 min-w-100 p-8'>
      <div className='container text-gray-400'>
        <div>
          <h4>Información oficial de Puerto Rico</h4>
          <ExtLink
            link='https://estadisticas.pr/en/covid-19'
            label='Instituto de Estadísticas de Puerto Rico'
          />
          <ExtLink
            link='http://www.salud.gov.pr/Pages/coronavirus.aspx'
            label='Departamento de Salud de Puerto Rico'
          />
        </div>
        <div>
          <h4>Otras presentaciones de Datos</h4>
          <ExtLink
            link='https://www.worldometers.info/coronavirus/'
            label='Worldometer'
          />
          <ExtLink
            link='https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'
            label='The Center for Systems Science and Engineering (CSSE) at JHU'
          />
        </div>
        <div>
          <p>
            La información aquí presentada está tomada del repositorio{' '}
            <ExtLink
              link='https://github.com/mathdroid/covid-19-api'
              label='Covid-19 API'
            />{' '}
            de <ExtLink link="'https://mathdro.id/" label='mathdro' />
          </p>
        </div>
      </div>
    </div>
  );
}
