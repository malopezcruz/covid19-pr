import React from 'react';

const BodyLink = ({ link, label }) => {
  return (
    <a
      className='border-b-2 border-pink-400 hover:border-pink-600 hover:transition-colors duration-500 ease-in-out'
      href={link}
      rel='noreferrer noopenner'
      target='_blank'
    >
      {label}
    </a>
  );
};

export default BodyLink;
