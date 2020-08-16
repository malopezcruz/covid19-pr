import React from 'react';
import { formatDateTimeSeries, formatDateLabel } from '../utils/utils';
import {
  ComposedChart,
  Line,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Bar,
} from 'recharts';

export default function RtPlot({ data, caption }) {
  return (
    <figure className='mb-8 md:mb-12' role='figure' aria-label={caption}>
      <div style={{ position: 'relative', paddingBottom: '56%' }}>
        <ResponsiveContainer width='100%' height='100%' className='absolute'>
          <ComposedChart
            data={data}
            margin={{ top: 5, right: 20, bottom: 0, left: -20 }}
          >
            <CartesianGrid stroke='#f2f2f2' />
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
              stroke='#999'
              // domain={[0, 5]}
              scale='linear'
              // label={{
              //   // value: 'R',
              //   angle: -90,
              //   position: 'outsideLeft',
              //   fill: '#ccc',
              // }}
            />
            <Tooltip
              labelStyle={{ color: '#2c5282', fontSize: '20' }}
              itemStyle={{ color: 'hotpink', fontSize: '12' }}
              labelFormatter={(date) => formatDateLabel(date)}
            />
            {/* d9e8f2 */}
            <ReferenceLine y={1} stroke='hotpink' strokeDasharray='3 3' />
            <Bar name='Casos' dataKey='counts' fill='#2c5282' barSize={50} />
            <Area
              name='Intervalo'
              type='basis'
              dataKey='range'
              stroke='#d9e8f2'
              fill='#d9e8f2'
            />
            <Line
              name='Promedio'
              type='basis'
              dataKey='fit'
              stroke='#1b85be'
              strokeWidth={1.5}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <figcaption className='pl-10 pr-8 text-xs md:text-sm text-subtitle'>
        {caption}
      </figcaption>
    </figure>
  );
}