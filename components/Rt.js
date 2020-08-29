import React from 'react';
import Source from './Source';
import RtPlot from './RtPlot';
import rt from '../data/rt.json';
import RtAccordion from './RtAccordion';

export default function Rt() {
  return (
    <section className='mb-4 md:mb-8 lg:mb-12'>
      <h2 className='text-xl md:text-3xl text-blue-900 font-semibold mb-8 md:mb-12 leading-tight'>
        <span className='uppercase'>número reproductivo instantáneo</span> (
        <em>R</em>
        <sub>t</sub>)
      </h2>
      <RtPlot
        data={rt}
        caption={
          <>
            Número reproductivo de casos confirmados, promedio de 14 días. El
            área ensombrecida señala días en los que pudieran faltar por
            reportarse más casos. <Source />
          </>
        }
      />
      <RtAccordion />
    </section>
  );
}
