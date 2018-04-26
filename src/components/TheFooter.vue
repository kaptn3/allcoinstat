<template>
  <div class="footer container">
    <div class="footer-content">
      <div class="footer-content-cell menu">
        <div class="copyleft">© 2018 AllCoinStat</div>

        <ul class="footer-menu">
          <li class="footer-mobile-menu">
            <v-popover offset="16" class="footer-menu-mobile">
              <a><img src="/assets/ui-img/more.svg"></a>
              <template slot="popover"> 
                <ul class="footer-menu-mobile__list">
                  <li v-for="(value, key) in footerMenu" :key="key" class="footer-menu-mobile__item">
                    <router-link v-if="value.external === false" :to="value.link">{{ key }}</router-link>
                    <a v-if="value.external" :href="value.link">{{ key }}</a>
                  </li>
                </ul>
              </template>
            </v-popover>
          </li> 
          <li v-for="(value, key) in footerMenu" :key="key">
            <router-link v-if="value.external === false" :to="value.link">{{ key }}</router-link>
            <a v-if="value.external" :href="value.link">{{ key }}</a>
          </li>
          <li class="choose-lang"><Language/></li>
        </ul>
      </div>

      <div class="footer-content-cell updated">
        Last updated: Apr 24, 2018 07:34 UTC
      </div>

    </div>
  </div>

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
            link: '/',
            external: false
          },
          Advertise: {
            link: 'https://docs.google.com/forms/d/1eKrqWz6NGVhME7an6lkhDCBZjhUJvgMbqVzM3mnAYIs/viewform?edit_requested=true&embedded=true',
            external: true
          },
          FAQ: {
            link: '/',
            external: false
          },
          'Request Form': {
            link: '/',
            external: false
          }
        }
      }
    }
  }
</script>

<style scoped>
  @media (min-width: 768px) {
    .footer {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  .footer-menu-mobile__list {
    text-align: center;
    font-weight: 500;
    padding-left: 0;
  }
  .footer-menu-mobile__item {
    padding: 12px 14px;
  }
</style>