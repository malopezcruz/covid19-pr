import React from 'react';
import rt from '../data/rt.json';
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
} from 'recharts';

// colors
// 1b85be
// #FF69B4
// #FF1493

export default function RtPlot() {
  return (
    <div style={{ position: 'relative', paddingBottom: '60%' }}>
      <ResponsiveContainer width='100%' height='100%' className='absolute'>
        <ComposedChart
          data={rt}
          margin={{ top: 5, right: 20, bottom: 5, left: -20 }}
        >
          <CartesianGrid stroke='#f2f2f2' />
          <XAxis
            name='Fecha'
            dataKey='Fecha'
            interval={6}
            height={80}
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
            domain={[0, 5]}
            scale='linear'
            label={{
              value: 'R',
              angle: -90,
              position: 'outsideLeft',
              fill: '#999',
            }}
          />
          <Tooltip
            labelStyle={{ color: '#1b85be', fontSize: '20' }}
            itemStyle={{ color: 'hotpink', fontSize: '12' }}
            labelFormatter={(date) => formatDateLabel(date)}
          />
          {/* d9e8f2 */}
          <ReferenceLine y={1} stroke='hotpink' strokeDasharray='3 3' />
          <Area
            name='Intervalo'
            type='monotone'
            dataKey='Intervalo'
            stroke='#d9e8f2'
            fill='#d9e8f2'
          />
          <Line
            type='monotone'
            dataKey='Promedio'
            stroke='#1b85be'
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
