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
  Brush,
  ResponsiveContainer,
  Bar,
  ReferenceArea,
} from 'recharts';

const GrowthPlot = ({ data, caption }) => {
  const { dates: lastPCRDay } = data[data.length - 1];
  const { dates: minusFiveDaysInterval } = data[data.length - 6];

  return (
    <figure className='mb-8 md:mb-12' role='figure' aria-label={caption}>
      <div className='relative pb-5/6 sm:pb-golden'>
        <ResponsiveContainer width='100%' height='100%' className='absolute'>
          <ComposedChart
            data={data}
            margin={{ top: 5, right: 10, bottom: 0, left: -16 }}
          >
            <CartesianGrid stroke='#f2f2f2' vertical={false} />
            <XAxis
              name='Fecha'
              dataKey='dates'
              type='category'
              interval={2}
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
            {/* <ReferenceLine y={1} stroke='hotpink' strokeDasharray='3 3' /> */}
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
            <ReferenceArea
              x1={minusFiveDaysInterval}
              x2={lastPCRDay}
              fill='hotpink'
              fillOpacity={0.2}
              overflow='auto'
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <figcaption className='mt-4 pl-10 pr-8 text-sm text-subtitle'>
        {caption}
      </figcaption>
    </figure>
  );
};

export default GrowthPlot;
