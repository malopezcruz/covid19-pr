import React from 'react';

const AlertMessage = () => {
  return (
    <section className='mt-6 md:mt-8 mb-16 md:mb-20'>
      <div
        className='w-full p-4 sm:p-6
       rounded bg-orange-200'
      >
        <p className='text-orange-900 opacity-80'>
          <strong>El proyecto ha sido archivado</strong>. Para información
          oficial vea los informes diarios del Departamento de Salud o visite el
          Bioportal (enlaces abajo).
        </p>
      </div>
    </section>
  );
};

export default AlertMessage;
