import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function DataBox({ number, label, children }) {
  return (
    <div className='flex justify-center items-center relative py-6 px-2 bg-gray-200 border border-gray-300 text-center rounded-lg'>
      {children}
      <div>
        <span className='text-2xl md:text-3xl font-bold'>{number}</span>
        <h3 className='uppercase text-sm'>{label}</h3>
      </div>
    </div>
  );
}
