import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay, faChartLine, faBullhorn, faWallet, faBullseye, faLeftLong, faRightLong, faPlus,
  faArrowUp, faComment,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter, faInstagram, faLinkedin, faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(
  faPlay,
  faChartLine,
  faBullhorn,
  faWallet,
  faBullseye,
  faLeftLong,
  faRightLong,
  faPlus,
  faArrowUp,
  faComment,
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebookF,
);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
