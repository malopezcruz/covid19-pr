import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';

const InfoAccordion = ({ label, children }) => {
  return (
    <Accordion collapsible multiple>
      <AccordionItem>
        <h3>
          <AccordionButton className='py-4 text-lg md:text-xl text-blue-900 hover:text-blue-900 hover:opacity-90 font-semibold mb-4 leading-tight'>
            <FontAwesomeIcon
              icon='info-circle'
              width='16'
              fixedWidth
              className='inline -mt-1 mr-2'
            />
            {label}
          </AccordionButton>
        </h3>
        <AccordionPanel className='fadein mb-12 md:mb-24 leading-relaxed'>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default InfoAccordion;
