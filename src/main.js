import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faLocationDot, faBuilding, faCalendar, faSchool, faCode, faCloud, faDatabase, faLock, faNetworkWired, faDesktop, faChevronDown, faBuildingColumns, faGauge, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub, faJs, faAws } from '@fortawesome/free-brands-svg-icons';

import router from './router'

library.add(faAws, faEnvelope, faPhone, faGithub, faLinkedin, faLocationDot, faCode, faBuilding, faCloud, faDatabase, faCalendar, faSchool, faJs, faLock, faNetworkWired, faDesktop, faChevronDown, faBuildingColumns, faGauge, faCogs);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
