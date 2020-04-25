import React from 'react';

export default function DataBox({ number, label }) {
  return (
    <div className='flex justify-center items-center py-6 px-2 bg-gray-300 text-center rounded-lg'>
      <div>
        <span className='text-2xl md:text-3xl font-bold'>{number}</span>
        <h3 className='uppercase text-sm'>{label}</h3>
      </div>
    </div>
  );
}
