import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToolTipComp({ children, dataFor, uniqueID }) {
  const [uniqueId] = useState(uniqueID);

  return (
    <div className='absolute top-0 right-0 mr-3 mt-1'>
      <a
        className='inline text-base relative z-10 p-2 -m-2 text-gray-500 hover:text-gray-600'
        data-tip
        data-for={`${dataFor}-${uniqueId}`}
      >
        <FontAwesomeIcon
          icon='info-circle'
          fixedWidth
          width='16'
          className='inline'
        />
      </a>
      <ReactTooltip id={`${dataFor}-${uniqueId}`} type='light' effect='solid'>
        <div className='text-left text-base'>{children}</div>
      </ReactTooltip>
    </div>
  );
}
