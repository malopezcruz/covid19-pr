import { config, library } from '@fortawesome/fontawesome-svg-core';

import { faLink, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(faLink, faSpinner, faGithub);
