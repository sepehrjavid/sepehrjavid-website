import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import router from './router'

library.add(faEnvelope, faPhone, faGithub, faLinkedin, faLocationDot);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
