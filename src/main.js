import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import jquery from 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

window.$ = window.jQuery = jquery;


Vue.config.productionTip = false
// export const bus = new Vue();
Vue.prototype.$bus =  new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
