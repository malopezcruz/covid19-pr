import React from 'react';

export default function ErrorMessage({ category }) {
  return (
    <div
      className='bg-red-100 border-l-4 border-red-800 text-red-700 p-4 mt-4 mb-12'
      role='alert'
    >
      <p className='font-bold text-2xl'>Ups! Algo pasó...</p>
      <p className='text-lg'>
        No se pudo recuperar los datos de la categoría{' '}
        <strong>{category}</strong> en este estemomento. Vuelve más tarde.
      </p>
    </div>
  );
}
