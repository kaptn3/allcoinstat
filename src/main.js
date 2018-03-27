import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta);

import App from './App.vue';
import UiPage from './components/UiPage.vue';
import MainPage from './components/MainPage.vue';
import ExchangesPage from './components/ExchangesPage.vue';
import WhatchList from './components/WhatchList.vue';

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/whatchlist',
      component: WhatchList
    },
    {
      path: '/exchanges',
      component: ExchangesPage
    },
    {
      path: '/ui',
      component: UiPage
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

export default {
  router
};
