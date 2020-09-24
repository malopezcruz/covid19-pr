import React from 'react';
import { formatNumber } from '../utils/utils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const MunVerticalBarPlot = ({ data, caption }) => {
  const ariaLabelCaption = () => caption && `aria-label=${caption}`;
  const containerHeight = data.length < 40 ? 800 : 1200;

  return (
    <figure role='figure' {...ariaLabelCaption}>
      <div className=''>
        <ResponsiveContainer width='100%' height={containerHeight}>
          <BarChart
            layout='vertical'
            data={data}
            margin={{
              top: 5,
              right: 50,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke='#f2f2f2' horizontal={false} />
            <YAxis
              name='Municipio'
              dataKey='name'
              type='category'
              interval={0}
              height={125}
              width={125}
              stroke='#999999'
              tick={{
                angle: 0,
                fontSize: '14',
                fill: '#777777',
              }}
            />
            <XAxis type='number' height={20} scale='linear' stroke='#999999' />
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
                fill: '#777777',
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {caption && (
        <figcaption className='mt-4 pl-10 pr-8 text-sm text-subtitle'>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default MunVerticalBarPlot;
