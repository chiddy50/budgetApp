import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jquery from 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
window.$ = window.jQuery = jquery;
require("./assets/css/all.css")


import UUID from "vue-uuid";
 
Vue.use(UUID);
Vue.config.productionTip = false
export const bus = new Vue();
// Vue.prototype.$bus =  new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
