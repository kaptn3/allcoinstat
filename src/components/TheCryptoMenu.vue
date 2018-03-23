<template>
  <div class="crypto-menu">
    <nav class="crypto-menu__navbar">
      <ul>
        <li v-for="(value, key) in cryptoMenu" :key="key" class="crypto-menu__item"><a :href="value.link">{{ key }}</a></li>
      </ul>
    </nav>
  </div><!-- end top menu -->
</template>

<script>
  export default {
    name: 'TheCryptoMenu',
    data () {
      return {
        cryptoMenu: {
          Overview: {
            link: '/'
          },
          Social: {
            link: '/'
          },
          Forum: {
            link: '/'
          },
          Exchanges: {
            link: '/exchanges'
          },
          Assets: {
            link: '/whatchlist'
          },
          Predict: {
            link: '/'
          },
          Alerts: {
            link: '/'
          }
        }
      }
    }
  };
</script>

<style scoped>
  .crypto-menu {
    color: var(--light-gray-color);
    font-weight: 500;
    width: 100%;
    border-bottom: 2px solid var(--light-color);
  }
  .crypto-menu__item a {
    padding: 20px 25px;
    display: block;
    margin-bottom: -2px;
    border: 2px solid transparent;
    border-radius: 7px 7px 0 0;
    &:hover,
    &:focus {
      color: var(--black-color);
      border: 2px solid var(--light-color);
      border-bottom: 2px solid #fff;
    }
  }

</style>