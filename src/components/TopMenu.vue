<template>
  <div class="top-menu">
    <nav class="top-menu__navbar">
      <ul>
        <li class="top-menu__item"><a href="#">Growing</a></li>
        <li class="top-menu__item"><a href="#">Falling</a></li>
        <li class="top-menu__item"><a href="#">Arbitrage</a></li>
        <li class="top-menu__item"><a href="#">Exchanges</a></li>
        <li class="top-menu__item"><a href="#">Whatchlist</a></li>
        <li class="top-menu__item"><a href="#">Forum</a></li>
        <li class="top-menu__item"><a href="#">Portfolio</a></li>
        <li class="top-menu__item"><a href="#">Alerts</a></li>
      </ul>
    </nav>
  </div><!-- end top menu -->
</template>

<script>
  export default {
    name: 'TopMenu'
  };
</script>

<style scoped>
  .top-menu {
    border: 2px solid var(--light-color);
    color: var(--light-gray-color);
    font-weight: 500;
  }
  .top-menu__item {
    position: relative;
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
    padding: 20px 25px;
    display: block;
  }
  .top-menu__item a:hover {
    color: var(--black-color);
  }
</style>