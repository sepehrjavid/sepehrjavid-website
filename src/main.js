import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faLocationDot, faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import router from './router'

library.add(faEnvelope, faPhone, faGithub, faLinkedin, faLocationDot, faBuilding, faCalendar);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
