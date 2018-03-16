<template>
  <footer class="footer">   
    <div class="container">
      <nav class="footer-menu">
        <ul>
          <li class="footer-menu__copyright">&copy; 2018 AllCoinStat</li>
          <li v-for="(value, key) in footerMenu" :key="value.link" class="footer-menu__item"><a :href="value.link">{{ key }}</a></li>
          <li class="footer-menu__item">
            <Language/>
          </li>
        </ul>
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
  }
  .footer-menu__copyright,
  .footer-menu__item {
    padding-right: 30px;
  }
</style>