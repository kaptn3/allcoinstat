<template>
  <div class="top-menu">
    <nav class="top-menu__navbar">
      <ul>
        <li v-for="(value, key) in topMenu" :key="key" class="top-menu__item"><router-link :to="value.link">{{ key }}</router-link></li>
      </ul>
    </nav>
  </div><!-- end top menu -->
</template>

<script>
  export default {
    name: 'TheTopMenu',
    data () {
      return {
        topMenu: {
          Growing: {
            link: '/'
          },
          Falling: {
            link: '/'
          },
          Arbitrage: {
            link: '/'
          },
          Exchanges: {
            link: '/exchanges'
          },
          Watchlist: {
            link: '/watchlist'
          },
          Forum: {
            link: '/'
          },
          Portfolio: {
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
  .top-menu {
    color: var(--light-gray-color);
    font-weight: 500;
    width: 100%;
  }
  @media (max-width: 991.99px) {
    .top-menu {
      text-align: center;
    }
    .top-menu__navbar ul {
      flex-direction: column;
    }
    .top-menu__item {
      width: 100%;
    }
    .top-menu__item a {
      &:hover,
      &:focus {
        background-color: var(--light-color);
      }
    }
    .router-link-exact-active {
      background-color: var(--light-color);
    }
  }
  .top-menu__item {
    position: relative;
  }
  .top-menu__item a {
    padding: 20px 25px;
    display: block;
    border-radius: 100px;
  }  
  @media (min-width: 992px) {
    .top-menu {
      border: 2px solid var(--light-color);
    }
    .top-menu__item:hover::after {
      background-color: var(--blue-color);
      height: 4px;
      width: 100%;
      content: "";
      position: absolute;
      margin: -2px auto;
    }
    .top-menu__item a {
      &:hover,
      &:focus,
      &:active {
        color: var(--black-color);
      }
    }
    .router-link-exact-active {
      color: var(--black-color);
    }
  }
</style>