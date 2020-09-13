import dynamic from 'next/dynamic';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = dynamic(import('./Modal'));

const Header = () => {
  return (
    <header className='bg-gray-900 '>
      <div className='w-full p-4 max-w-screen-lg px-6 lg:px-0 mx-auto flex justify-between items-center'>
        <h1
          className='w-full align-middle max-w-screen-lg px-0 md:px-4 mx-auto text-2xl text-blue-200 opacity-90
         lg:text-3xl text-left font-black'
        >
          <FontAwesomeIcon
            icon='virus'
            width='28'
            fixedWidth
            className='inline -mt-1 mr-1'
            fill='#ed64a6'
            stroke='#ed64a6'
          />
          COVID-19{' '}
          <span className='text-pink-400 font-semibold text-base tracking-wider'>
            PR
          </span>
        </h1>
        <Modal title='¿Cuándo se actualiza?'>
          <p className='mb-6'>
            La aplicación se actualiza todos los días alrededor de las{' '}
            <strong className='text-blue-900'>10:00 AM</strong>.
          </p>
          <div className='p-4 bg-orange-200 rounded flex content-start'>
            <div className='text-orange-800 opacity-90'>
              <FontAwesomeIcon
                icon={['fab', 'apple']}
                width='16'
                fixedWidth
                className='inline -mt-1 mr-3'
              />
            </div>
            <p className='text-orange-900 opacity-80'>
              Si eres usuario/a de iOS (iPhone o iPad) y has instalado o añadido
              la aplicación en la pantalla de inicio ("Homescreen") de tu
              dispositivo, te recomendamos que la <strong>reinicies</strong>{' '}
              para así obtener la actualización más reciente.
            </p>
          </div>
        </Modal>
      </div>
    </header>
  );
};

export default Header;
