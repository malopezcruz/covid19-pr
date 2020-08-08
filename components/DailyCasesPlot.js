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
import weekly_cases from '../data/weekly_cases.json';

export default function DailyCasesPlot() {
  return (
    <div style={{ width: '100%', height: 600 }}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={weekly_cases}
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
  );
}
