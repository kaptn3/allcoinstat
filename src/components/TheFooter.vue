<template>
  <footer class="footer">   
    <div class="container">
      <nav class="footer-menu">
        <span class="footer-menu__copyright">&copy; 2018 AllCoinStat</span>
        <AppTooltip :id-tooltip="'footer-menu'" class="footer-menu-mobile">
          <span slot="link"><img src="/assets/ui-img/more.svg"></span>
          <ul slot="content" class="footer-menu-mobile__list">
            <li v-for="(value, key) in footerMenu" :key="key" class="footer-menu-mobile__item"><router-link :to="value.link">{{ key }}</router-link></li>
          </ul>
        </AppTooltip>

        <ul class="footer-menu__list">
          <li v-for="(value, key) in footerMenu" :key="key" class="footer-menu__item"><router-link :to="value.link">{{ key }}</router-link></li>
        </ul>
        <Language/>
        <span class="last-updated">Last updated: Aug 28, 2017 6:50 PM UTC</span>
      </nav>  
    </div>
  </footer>
</template>

<script>
  import Language from './Language';
  import AppTooltip from './AppTooltip';

  export default {
    name: 'TheFooter',
    components: {
      Language,
      AppTooltip
    },
    data () {
      return {
        footerMenu: {
          About: {
            link: '/'
          },
          Advertise: {
            link: '/'
          },
          FAQ: {
            link: '/'
          },
          'Request Form': {
            link: '/'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .footer-menu {
    padding: 40px 0;
    font-weight: 500;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .footer-menu__copyright,
  .footer-menu__item {
    padding-right: 30px;
  }
  @media (max-width: 767.99px) {
    .footer-menu {
      justify-content: space-between;
    }
    .footer-menu-mobile {
      display: inline-flex;
      justify-content: center;
    }
    .footer-menu__list {
      display: none;
    },
    .last-updated {
      padding-top: 18px;
      margin: 0 auto;
    }
  }
  @media (min-width: 768px) {
    .footer-menu-mobile {
      display: none;
    }
  }
  .footer-menu-mobile__list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    width: 150px;
    text-align: center;
  }
  .last-updated {
    margin-left: auto;
    font-size: calc((12 / 16) * 1rem);
    color: var(--light-gray-color);
    font-weight: 500;
  }
  .footer-menu-mobile__item {
    padding: 12px 14px;
  }
</style>