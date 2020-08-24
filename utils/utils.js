import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const reportDate = '2020-08-24';

export const formatNumber = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = (date) => {
  /* eslint-disable no-alert, no-console */
  return format(new Date(date), eeee, "eeee, d 'de' MMMM 'de' yyyy, h:mm aa", {
    locale: es,
  });
};

export const formatDateTimeSeries = (date) => {
  return format(
    new Date(parseISO(date)),
    /* eslint-disable no-alert, no-console */
    'MMM d',
    { locale: es }
  );
};

export const formatDateLabel = (date) => {
  return format(
    new Date(parseISO(date)),
    /* eslint-disable no-alert, no-console */
    "d 'de' MMMM 'de' yyyy",
    // {timeZone: 'America/Puerto_Rico'}
    { locale: es }
  );
};

// Use
//movingAvg(myArr, 6); //6 before and the current
// movingAvg(myArr, 3, 3); //3 before, 3 after, plus the current
// movingAvg(myArr, 0, 6); //6 after plus the current
export const movingAvg = (array, countBefore, countAfter) => {
  if (countAfter == undefined) countAfter = 0;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const subArr = array.slice(
      Math.max(i - countBefore, 0),
      Math.min(i + countAfter + 1, array.length)
    );
    const avg =
      subArr.reduce((a, b) => a + (isNaN(b) ? 0 : b), 0) / subArr.length;
    result.push(avg);
  }
  return result;
};

export const municipality_list = [
  'Adjuntas',
  'Aguada',
  'Aguadilla',
  'Aguas Buenas',
  'Aibonito',
  'Añasco',
  'Arecibo',
  'Arroyo',
  'Barceloneta',
  'Barranquitas',
  'Bayamón',
  'Cabo Rojo',
  'Caguas',
  'Camuy',
  'Canóvanas',
  'Carolina',
  'Cataño',
  'Cayey',
  'Ceiba',
  'Ciales',
  'Cidra',
  'Coamo',
  'Comerío',
  'Corozal',
  'Culebra',
  'Dorado',
  'Fajardo',
  'Florida',
  'Guánica',
  'Guayama',
  'Guayanilla',
  'Guaynabo',
  'Gurabo',
  'Hatillo',
  'Hormigueros',
  'Humacao',
  'Isabela',
  'Jayuya',
  'Juana Díaz',
  'Juncos',
  'Lajas',
  'Lares',
  'Las Marías',
  'Las Piedras',
  'Loíza',
  'Luquillo',
  'Manatí',
  'Maricao',
  'Maunabo',
  'Mayagüez',
  'Moca',
  'Morovis',
  'Naguabo',
  'Naranjito',
  'Orocovis',
  'Patillas',
  'Peñuelas',
  'Ponce',
  'Quebradillas',
  'Rincón',
  'Río Grande',
  'Sabana Grande',
  'Salinas',
  'San Germán',
  'San Juan',
  'San Lorenzo',
  'San Sebastián',
  'Santa Isabel',
  'Toa Alta',
  'Toa Baja',
  'Trujillo Alto',
  'Utuado',
  'Vega Alta',
  'Vega Baja',
  'Vieques',
  'Villalba',
  'Yabucoa',
  'Yauco',
  'Otro lugar fuera de PR',
  'No disponible',
];
