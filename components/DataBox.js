import React from 'react';

export default function DataBox({ number, label }) {
  return (
    <div className='py-6 px-2 bg-gray-300 text-center rounded-lg'>
      <span className='text-3xl font-bold'>{number}</span>
      <h3 className='uppercase text-sm'>{label}</h3>
    </div>
  );
}
