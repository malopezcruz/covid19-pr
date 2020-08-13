import React from 'react';
import { formatDateTimeSeries, formatDateLabel } from '../utils/utils';

import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import data from '../data/weekly_cases.json';

export default function DailyCasesPlot({ data, caption }) {
  return (
    <figure className='mb-8 md:mb-12' role='figure' aria-label={caption}>
      <div style={{ position: 'relative', paddingBottom: '56%' }}>
        <ResponsiveContainer width='100%' height='100%' className='absolute'>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke='#f2f2f2' />
            <XAxis
              name='Fecha'
              dataKey='dates'
              interval={0}
              height={80}
              tickFormatter={(date) => formatDateTimeSeries(date)}
              tick={{
                angle: -60,
                textAnchor: 'end',
                fontSize: '12',
                fill: '#999',
              }}
            />
            <YAxis type='number' domain={[0, 450]} scale='linear' />
            <Tooltip />
            {/* <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} /> */}
            {/* <ReferenceLine y={0} stroke='#000' /> */}
            <Brush dataKey='name' height={30} stroke='#1b85be' fill='#e8f3f9' />
            <Bar name='Casos' dataKey='counts' fill='#1b85be' />
            <Bar dataKey='uv' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <figcaption className='pl-10 pr-8 text-xs md:text-sm text-blue-900'>
        {caption}
      </figcaption>
    </figure>
  );
}
