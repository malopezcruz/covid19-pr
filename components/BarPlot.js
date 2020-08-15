import React from 'react';
import {
  formatDateTimeSeries,
  formatDateLabel,
  formatNumber,
} from '../utils/utils';

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

export default function BarPlot({ data, caption }) {
  return (
    <figure className='mb-8 md:mb-12' role='figure' aria-label={caption}>
      <div style={{ position: 'relative', paddingBottom: '80%' }}>
        <ResponsiveContainer width='100%' height='100%' className='absolute'>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke='#f2f2f2' />
            <XAxis
              name='Fecha'
              dataKey='dates'
              interval={0}
              height={80}
              stroke='#999'
              tickFormatter={(date) => formatDateTimeSeries(date)}
              tick={{
                angle: -60,
                textAnchor: 'end',
                fontSize: '12',
                fill: '#999',
              }}
            />
            <YAxis
              type='number'
              domain={[0, (dataMax) => dataMax + dataMax * 0.05]}
              scale='linear'
              stroke='#999'
            />
            <Tooltip
              labelStyle={{ color: '#2c5282', fontSize: '20' }}
              itemStyle={{ color: 'hotpink', fontSize: '12' }}
              labelFormatter={(date) => formatDateLabel(date)}
              formatter={(value) => formatNumber(value)}
              cursor={{ fill: '#e8f3f9' }}
            />
            {/* <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} /> */}
            {/* <ReferenceLine y={0} stroke='#000' /> */}
            <Brush
              dataKey='dates'
              data={data}
              height={25}
              stroke='#2c5282'
              fill='#f7fafc'
              tickFormatter={(date) => formatDateTimeSeries(date)}
              travellerWidth={25}
            />
            <Bar name='Casos' dataKey='counts' fill='#2c5282' barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <figcaption className='pl-10 pr-8 text-xs md:text-sm text-subtitle'>
        {caption}
      </figcaption>
    </figure>
  );
}
