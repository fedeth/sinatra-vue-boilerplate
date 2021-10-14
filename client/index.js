import './scss/style.scss';
import 'bootstrap';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './js/components/app.vue';
import {routes} from './js/routes/index';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#root');
