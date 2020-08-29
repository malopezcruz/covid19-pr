import React from 'react';
import BodyLink from './BodyLink';

export default function Source() {
  return (
    <>
      Fuente: Departamento de Salud de Puerto Rico,{' '}
      <em>
        <BodyLink
          link='http://www.salud.gov.pr/Estadisticas-Registros-y-Publicaciones/Pages/COVID-19.aspx'
          label='Informe de casos COVID-19'
        />
      </em>
      .
    </>
  );
}
