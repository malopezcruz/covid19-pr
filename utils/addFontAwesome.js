import { config, library } from '@fortawesome/fontawesome-svg-core';

import {
  faLink,
  faVirus,
  faLongArrowAltUp,
  faInfoCircle,
  faQuestionCircle,
  faTimesCircle,
  faCalendarWeek,
  faCalendarDay,
  faCalendarAlt,
  faCalendarTimes,
  faArrowAltCircleUp,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faTwitter,
  faRProject,
  faApple,
} from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(
  faLink,
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
  faCalendarTimes,
  faRProject,
  faApple,
  faArrowAltCircleUp,
  faExclamationCircle
);
