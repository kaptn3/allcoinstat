<template>
  <div class="top-menu">
    <nav class="top-menu__navbar">
      <ul>
        <li v-for="(value, key) in topMenu" :key="value.link" class="top-menu__item"><a :href="value.link">{{ key }}</a></li>
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
            link: '/'
          },
          Whatchlist: {
            link: '/whatchlist'
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
  @media (min-width: 992px) {
    .top-menu {
      border: 2px solid var(--light-color);
    }
    .top-menu__item {
      &:hover::after {
        background-color: var(--blue-color);
        height: 4px;
        width: 100%;
        content: "";
        position: absolute;
        margin: -2px auto;
      }
    }
    .top-menu__item a {
      &:hover {
        color: var(--black-color);
      }
    }
  }
  .top-menu {
    color: var(--light-gray-color);
    font-weight: 500;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 991.99px) {
    .top-menu__navbar ul {
      flex-direction: column;
    }
  }
  .top-menu__item {
    width: 100%;
    position: relative;
  }
  .top-menu__item a {
    padding: 20px 25px;
    display: block;
    border-radius: 100px;
    &:hover {
      background-color: var(--light-color);
      color: var(--blue-color);
    }
  }
</style>