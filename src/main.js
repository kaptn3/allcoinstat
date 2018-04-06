import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta);

import App from './App.vue';
import UiPage from './components/UiPage.vue';
import MainPage from './components/MainPage.vue';
import ExchangePage from './components/ExchangePage.vue';
import ExchangesPage from './components/ExchangesPage.vue';
import WatchList from './components/WatchList.vue';

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/watchlist',
      component: WatchList
    },
    {
      path: '/exchanges',
      component: ExchangesPage
    },
    {
      path: '/ui',
      component: UiPage
    },
    {
      path: '/exchange/:id',
      component: ExchangePage,
      name: 'exchange',
      props: true,
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
