<template>
  <footer class="footer">   
    <div class="container">
      <nav class="footer-menu">
        <span class="footer-menu__copyright">&copy; 2018 AllCoinStat</span>
        <v-popover offset="16" class="footer-menu-mobile">
          <a><img src="/assets/ui-img/more.svg"></a>
          <template slot="popover"> 
            <ul class="footer-menu-mobile__list">
              <li v-for="(value, key) in footerMenu" :key="key" class="footer-menu-mobile__item"><router-link :to="value.link">{{ key }}</router-link></li>
            </ul>
          </template>
        </v-popover>

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

  export default {
    name: 'TheFooter',
    components: {
      Language
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
  @media (max-width: 991.99px) {
    .last-updated {
      padding-top: 18px;
      margin: 0 auto;
    }
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
    }
  }
  @media (max-width: 575.99px) {
    .footer-menu {
      font-size: .875rem;
    }
    .footer-menu__copyright,
    .footer-menu-mobile {
      padding-right: 6px;
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
    font-weight: 500;
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