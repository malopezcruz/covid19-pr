import React from 'react';

function CategoryBox({ children }) {
  return (
    <div className='mt-4 mb-12 lg:mt-12 lg:mb-16 px-4 py-6 md:px-8 md:py-12 border border-gray-300 rounded-lg shadow-sm'>
      {children}
    </div>
  );
}

export default CategoryBox;
