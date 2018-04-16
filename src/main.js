import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import VTooltip from 'v-tooltip';

Vue.use(VueRouter);
Vue.use(Meta);
Vue.use(VTooltip);

import App from './App.vue';
import UiPage from './components/UiPage.vue';
import MainPage from './components/MainPage.vue';
import ExchangePage from './components/ExchangePage.vue';
import ExchangesPage from './components/ExchangesPage.vue';
import WatchList from './components/WatchList.vue';

import CurrencyPage from './components/CurrencyPage.vue';
import CurrencyPageOverview from './components/CurrencyPageOverview.vue';
import CurrencyPageExchanges from './components/CurrencyPageExchanges.vue';

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
      path: '/currency/:id',
      component: CurrencyPage,
      name: "currency",
      props: true,
      children: [
        {
          name: 'overview',
          path: 'overview',
          component: CurrencyPageOverview
        },
        {
          path: 'social',
          redirect: 'overview'
        },
        {
          path: 'forum',
          redirect: 'overview'
        },
        {
          path: 'exchanges',
          component: CurrencyPageExchanges
        },
        {
          path: 'assets',
          redirect: 'overview'
        },
        {
          path: 'predict',
          redirect: 'overview'
        },
        {
          path: 'alerts',
          redirect: 'overview'
        }
      ]
    },
    {
      path: '/exchange/:id/:currency?',
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
