import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueClipboard from "vue-clipboard2";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
  faTelegram,
  faSkype,
  faLine,
  faWeixin,
  faWeibo,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faIdCard,
  faVenusMars,
  faBirthdayCake,
  faCopyright
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
  faTelegram,
  faSkype,
  faLine,
  faWeixin,
  faWeibo,
  faIdCard,
  faEnvelope,
  faVenusMars,
  faBirthdayCake,
  faGoogle,
  faCopyright
);

import VueSocketIO from "vue-socket.io";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://127.0.0.1:5000",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
    // options: { path: "/my-app/" } //Optional options
  })
);

import Trend from "vuetrend";
Vue.use(Trend);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(require("vue-cookies"));
Vue.use(VueClipboard);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
