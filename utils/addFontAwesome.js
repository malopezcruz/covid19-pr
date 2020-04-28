import { config, library } from '@fortawesome/fontawesome-svg-core';

import {
  faLink,
  faSpinner,
  faVirus,
  faLongArrowAltUp,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(
  faLink,
  faSpinner,
  faGithub,
  faVirus,
  faLongArrowAltUp,
  faInfoCircle
);
