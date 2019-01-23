import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import store from './store';
import router from './router';

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root');