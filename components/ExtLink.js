import React from 'react';

export default function ExtLink({ link, label }) {
  return (
    <a href={link} rel='noreferrer noopenner' target='_blank'>
      {label}
      <span class='sr-only'>(abre en una nueva pestaña)</span>
    </a>
  );
}
