import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AlertMessage = () => {
  return (
    <section className='mt-6 md:mt-8 mb-16 md:mb-20'>
      <div
        className='w-full flex p-4 sm:p-6
       rounded bg-orange-200'
      >
        <div className='text-orange-800 opacity-90'>
          <FontAwesomeIcon
            icon={['fa', 'exclamation-circle']}
            width='16'
            fixedWidth
            className='inline -mt-1 mr-3'
          />
        </div>
        <p className='text-orange-900 opacity-80'>
          <strong>El proyecto ha sido archivado</strong>. Para información
          oficial sobre COVID-19 en Puert Rico vea los informes diarios del
          Departamento de Salud o visite el Bioportal (enlaces abajo).
        </p>
      </div>
    </section>
  );
};

export default AlertMessage;
