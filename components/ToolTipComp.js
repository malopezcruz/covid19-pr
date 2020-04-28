import React from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToolTipComp({ children, dataFor }) {
  return (
    <div className='absolute top-0 right-0 mr-2 mt-1'>
      <a className='text-gray-500' data-tip data-for={dataFor}>
        <FontAwesomeIcon
          icon='info-circle'
          fixedWidth
          width='18'
          className='inline'
        />
      </a>
      <ReactTooltip id={dataFor} type='light' effect='solid'>
        <div className='text-left text-base'>{children}</div>
      </ReactTooltip>
    </div>
  );
}
