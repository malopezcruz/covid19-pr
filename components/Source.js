import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import BodyLink from './BodyLink';

const Source = () => {
  const { reportDate } = useContext(DataContext);
  return (
    <>
      Fuente: Departamento de Salud de Puerto Rico,{' '}
      <em>
        <BodyLink
          link='http://www.salud.gov.pr/Estadisticas-Registros-y-Publicaciones/Pages/COVID-19.aspx'
          label='Informe de casos COVID-19'
        />
      </em>
      , {reportDate}.
    </>
  );
};

export default Source;
