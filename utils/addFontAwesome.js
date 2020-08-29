import { config, library } from '@fortawesome/fontawesome-svg-core';

import {
  faLink,
  faSpinner,
  faVirus,
  faLongArrowAltUp,
  faInfoCircle,
  faQuestionCircle,
  faTimesCircle,
  faCalendarWeek,
  faCalendarDay,
  faCalendarAlt,
  faCalendarTimes,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(
  faLink,
  faSpinner,
  faGithub,
  faTwitter,
  faVirus,
  faLongArrowAltUp,
  faInfoCircle,
  faQuestionCircle,
  faTimesCircle,
  faCalendarAlt,
  faCalendarDay,
  faCalendarWeek,
  faCalendarTimes
);
