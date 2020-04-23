import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

import Material from "materialize-css";

import AOS from "aos";
import "aos/dist/aos.css";

global.M = Material;
global.$ = jQuery;

new Vue({
  mounted() {
    AOS.init({
      duration: 2000
    });
  },
  el: "#app",
  router,
  render: h => h(App)
});
