import React from 'react';
import {
  formatDateTimeSeries,
  formatDateLabel,
  formatNumber,
} from '../utils/utils';

import {
  Bar,
  Brush,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';

export default function BarPlotMun({ data, caption }) {
  const ariaLabelCaption = () => caption && `aria-label=${caption}`;

  return (
    <figure role='figure' {...ariaLabelCaption}>
      <div className='relative pb-5/6 sm:pb-4/6'>
        <ResponsiveContainer width='100%' height='100%' className='absolute'>
          <ComposedChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke='#f2f2f2' vertical={false} />
            <XAxis
              name='Fecha'
              dataKey='dates'
              interval={1}
              height={60}
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
            <Brush
              dataKey='dates'
              data={data}
              height={25}
              stroke='#2c5282'
              fill='#f7fafc'
              tickFormatter={(date) => formatDateTimeSeries(date)}
              travellerWidth={25}
            />
            <Bar name='Casos' dataKey='counts' fill='#2c5282' barSize={100} />
            <Line
              type='basis'
              dataKey='counts'
              stroke='#2c5282'
              strokeOpacity={0.7}
              strokeWidth={4}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      {caption && (
        <figcaption className='mt-4 pl-10 pr-8 text-xs md:text-sm text-subtitle'>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
