import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ExtLink({ link, label }) {
  return (
    <>
      <a
        className='text-blue-200 text-base'
        href={link}
        rel='noreferrer noopenner'
        target='_blank'
      >
        {label}
        <span className='sr-only'>(abre en una nueva pestaña)</span>
        <FontAwesomeIcon
          icon='link'
          fixedWidth
          width='16'
          className='ml-1 text-base inline'
        />
      </a>
    </>
  );
}
