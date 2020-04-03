// import React, { useState } from 'react';
// import useStats from '../utils/useStats';
// import ErrorMessage from './ErrorMessage';
// import { formatNumber, formatDate, deathRate } from '../utils/utils';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default function GetUSLocations() {
//   const [selectedState, setSelectedState] = useState(0);
//   const [selectedLocation, setSelectedLocation] = useState(0);
//   const [stats, isError] = useStats(
//     'https://covid19.mathdro.id/api/countries/US/confirmed'
//   );

//   // Mensaje para error 501 server request not foundcod
//   if (isError) return <ErrorMessage category='Puerto Rico' />;

//   // Estado de Loading
//   if (!stats)
//     return (
//       <div className='p-16 flex justify-center content-center'>
//         <FontAwesomeIcon icon='spinner' spin fixedWidth width='16' />
//       </div>
//     );

//   // Crear lista de Estados
//   const showStateList = [
//     ...new Set(stats.map(({ provinceState }) => provinceState))
//   ].sort();

//   // Lista filtrada de las localidades de un Estado
//   const stateList = stats.filter(
//     ({ provinceState }) => provinceState === showStateList[selectedState]
//   );

//   // Crear lista de las localidades para el Selector
//   const showLocationList = Object.values(
//     stateList.map(({ admin2 }) => admin2).sort()
//   );

//   // Encotrar la localidad en la lista
//   const data = stateList.find(
//     ({ admin2 }) => admin2 === showLocationList[selectedLocation]
//   );

//   const { confirmed, deaths, lastUpdate } = data;

//   return (
//     <>
//       <select onChange={e => setSelectedState(e.target.value)}>
//         {showStateList.map((item, index) => (
//           <option key={index} value={index}>
//             {item}
//           </option>
//         ))}
//       </select>
//       <select onChange={e => setSelectedLocation(e.target.value)}>
//         {showLocationList.map((item, index) => (
//           <option key={index} value={index}>
//             {item}
//           </option>
//         ))}
//         ;
//       </select>
//       <div>{formatNumber(confirmed)}</div>
//       <div>{formatNumber(deaths)}</div>
//       <div>{deathRate(confirmed, deaths).toFixed(2)}</div>
//       <div>{formatDate(lastUpdate)}</div>
//     </>
//   );
// }
