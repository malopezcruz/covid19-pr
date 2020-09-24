import { format, parseISO, addDays } from 'date-fns';
import { es } from 'date-fns/locale';

export const calcReportDate = (date) => {
  return addDays(parseISO(date), 1);
};

export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = (date) => {
  /* eslint-disable no-alert, no-console */
  return format(new Date(date), "d 'de' MMMM 'de' yyyy", {
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
    { locale: es }
  );
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
  'Fuera de PR',
  'No disponible',
];
