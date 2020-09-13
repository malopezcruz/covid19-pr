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
  faShareAlt,
  faFileCsv,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faTwitter,
  faRProject,
  faApple,
  faFacebook,
  faWhatsapp,
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
  faShareAlt,
  faFacebook,
  faWhatsapp,
  faFileCsv
);
