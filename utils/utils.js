// import { format } from 'date-fns-tz';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatNumber = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = (date) => {
  return format(new Date(date), 'eeee, d-MMMM-yyyy, h:mm aa', {
    locale: es_PR,
  });
};

export const formatDateTimeSeries = (date) => {
  return format(
    new Date(parseISO(date)),
    'MMM-d',
    // {timeZone: 'America/Puerto_Rico'}
    { locale: es }
  );
};

export const formatDateLabel = (date) => {
  return format(
    new Date(parseISO(date)),
    'd MMMM yyyy',
    // {timeZone: 'America/Puerto_Rico'}
    { locale: es }
  );
};

export const deathRate = (cases, death) => (death / cases) * 100;

export const percentage = (num, dem) => (num / dem) * 100;

export const parseInput = (input) => {
  let num = input.replace(/,/g, '');
  return num * 1;
};
