import React from 'react';
import { reportDate, formatDateTimeSeries } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <header className='bg-gray-900 p-4 flex justify-between items-center'>
      <div>
        <h1 className='w-full align-middle max-w-screen-lg px-0 md:px-4 mx-auto text-2xl text-gray-200 lg:text-3xl text-left font-black'>
          <FontAwesomeIcon
            icon='virus'
            width='30'
            fixedWidth
            className='inline -mt-1 mr-2'
          />
          COVID-19{' '}
          <span className='text-blue-200 font-medium text-base'>PR</span>
        </h1>
      </div>
      <div className='text-gray-200 mt-1 mr-1 uppercase text-sm'>
        {formatDateTimeSeries(reportDate)}
      </div>
    </header>
  );
}
