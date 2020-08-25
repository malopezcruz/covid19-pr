import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ title, children }) {
  const [showModal, setShowModal] = useState(false);

  const handleEsc = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  });

  const handleOpenModal = () => setShowModal(true);

  return (
    <>
      <button
        className='text-gray-200 hover:text-blue-200 hover:opacity-90 md:mr-4'
        type='button'
        onClick={handleOpenModal}
        aria-label='Open modal'
      >
        <FontAwesomeIcon
          icon={['fa', 'question-circle']}
          fixedWidth
          width='20'
          className='inline'
        />{' '}
      </button>

      {showModal ? (
        <>
          <div
            className='mx-4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
            onClick={() => setShowModal(false)}
          >
            <div className='relative w-auto my-6 mx-auto max-w-sm'>
              {/*content*/}
              <div className='border-0 rounded-md shadow-lg relative flex flex-col w-full border-blue-800 border-t-8 bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'>
                  <h3 className='text-2xl text-blue-900 font-semibold'>
                    {title}
                  </h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                    aria-label='Close modal'
                  >
                    <span className='bg-transparent text-blue-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                <div className='px-6 py-4'>{children}</div>

                {/*footer*/}
                <div className='flex items-center justify-end p-4 border-t border-solid border-gray-300 rounded-b'>
                  <button
                    className='text-pink-500 opacity-90 background-transparent font-bold uppercase py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    style={{ transition: 'all .15s ease' }}
                    onClick={() => setShowModal(false)}
                    arial-label='Close modal'
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
