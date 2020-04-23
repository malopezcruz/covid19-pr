import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import useStats from '../utils/useStats';
// import Chart from 'react-apexcharts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PRTestSerial() {
  const [stats, isError] = useStats(
    `https://covidtracking.com/api/v1/states/PR/daily.json`
  );
  const [positive, statePositie] = useState();
  const [positiveIncrese, statePositieIncrese] = useState();
  const [pending, statePending] = useState();

  if (isError) return <ErrorMessage category='Puerto Rico' />;

  if (!stats)
    return (
      <div className='p-16 flex justify-center content-center'>
        <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
      </div>
    );

  console.log(stats);

  return <>stats</>;
}
