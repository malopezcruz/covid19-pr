import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

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

export const reportDate = '2020-08-19';
