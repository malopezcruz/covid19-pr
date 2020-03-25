import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ExtLink({ link, label }) {
  return (
    <>
      <a
        className='text-green-400'
        href={link}
        rel='noreferrer noopenner'
        target='_blank'
      >
        {label}
        <span className='sr-only'>(abre en una nueva pestaña)</span>
        <FontAwesomeIcon icon='link' className='ml-1' />
      </a>
    </>
  );
}
