import React from 'react';
import { formatNumber } from '../utils/utils';

import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function VerticalBarPlot({ data, caption }) {
  const ariaLabelCaption = () => caption && `aria-label=${caption}`;

  return (
    <figure role='figure' {...ariaLabelCaption}>
      <div className=''>
        <ResponsiveContainer width='100%' height={900}>
          <BarChart
            layout='vertical'
            // width='100%'
            // height={800}
            data={data}
            margin={{
              top: 5,
              right: 40,
              left: 40,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke='#f2f2f2' horizontal={false} />
            <YAxis
              name='Municipio'
              dataKey='name'
              type='category'
              interval={0}
              height={80}
              width={120}
              stroke='#999999'
              tick={{
                angle: 0,
                // textAnchor: 'end',
                fontSize: '14',
                fill: '#777777',
              }}
            />
            <XAxis
              type='number'
              height={20}
              // domain={[0, (dataMax) => dataMax + dataMax * 0.05]}
              scale='linear'
              stroke='#999999'
            />
            <Tooltip
              labelStyle={{ color: '#2c5282', fontSize: '20' }}
              itemStyle={{ color: 'hotpink', fontSize: '12' }}
              formatter={(value) => formatNumber(value)}
              cursor={{ fill: '#f2f2f2' }}
            />
            <Bar
              name='Casos'
              dataKey='counts'
              fill='#2c5282'
              barSize={150}
              label={{
                position: 'right',
                fontSize: '14',
                // stroke: '#999999',
                fill: '#777777',
              }}
            />
            {/* <Brush
              dataKey='name'
              data={data}
              height={25}
              stroke='#2c5282'
              fill='#f7fafc'
              travellerWidth={25}
            /> */}
          </BarChart>
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
