import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({ title, children }) => {
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
        className='text-gray-200 hover:text-gray-100 md:mr-4'
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
            className='fadein mx-6 my-6 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
            onClick={() => setShowModal(false)}
          >
            <div className='relative w-auto my-6 mx-auto max-w-sm sm:max-w-md'>
              {/*content*/}
              <div className='border-0 rounded-md shadow-lg relative flex flex-col w-full border-blue-800 border-t-8 bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex relative tems-start justify-between p-5 '>
                  <button
                    className='absolute top-0 right-0 mr-4 mt-3 text-subtitle opacity-80'
                    onClick={() => setShowModal(false)}
                    aria-label='Close modal'
                  >
                    <FontAwesomeIcon
                      icon={['fa', 'times-circle']}
                      fixedWidth
                      width='20'
                      className='inline'
                      stroke='currentColor'
                    />
                  </button>
                  <h2 className='text-2xl mt-4 text-blue-900 font-semibold'>
                    {title}
                  </h2>
                </div>

                <div className='px-5'>{children}</div>

                {/*footer*/}
                <div className='flex items-center justify-end p-4'>
                  <button
                    className='text-pink-700 opacity-80 background-transparent font-bold uppercase py-2 text-sm outline-none focus:outline-none mr-1 mb-1 tracking-loose'
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
};

export default Modal;
