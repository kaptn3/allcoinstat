<template>
  <div class="info-block">
    <nav class="info-block__navbar">
      <ul>
        <li class="info-block__logo"><router-link to="/"><img src="../assets/img/logo.svg"></router-link></li>
        <li class="info-block__item col">
          <span class="info-block__item__title">Market cap</span>
          <a class="info-block__item__value" href="#">$150B</a>
        </li>
        <li class="info-block__item col">
          <span class="info-block__item__title">24H Volume</span>
          <a class="info-block__item__value" href="#">$150B</a>
        </li>
        <li class="info-block__item col">
          <span class="info-block__item__title">BTC dominance</span>
          <a class="info-block__item__value" href="#">$150B</a>
        </li>
        <li class="info-block__log">
          <Modals/>
        </li>
        <Modals name="mobileMenu" class="info-block__item__mobile-menu"/>
        <InputCrypto :links="true" class="info-block__search"/>
      </ul>
    </nav>
  </div>
</template>

<script>  
  import AppInput from './AppInput';
  import InputCrypto from './InputCrypto';
  import Modals from './Modals';

  export default {
    name: 'InfoBlock',
    components: {
      AppInput,
      Modals,
      InputCrypto
    }
  };
</script>

<style scoped>
  .info-block {
    padding: 30px 0;
  }
  .info-block__logo a {
    display: block;
  }
  .info-block__item {
    text-align: center;
    color: var(--blue-color);
  }
  .info-block__item__title {
    color: var(--light-gray-color);
    font-size: calc((14 / 16) * 1rem);
  }
  .info-block__item__value {
    padding-top: 7px;
    display: block;
    font-size: calc((22 / 16) * 1rem);
    font-weight: bold;
  }
  .info-block__item__value:hover,
  .info-block__item_value:active {
    color: inherit;
  }
  .info-block__log {
    font-size: calc((15 / 16) * 1rem);
    font-weight: bold;
    color: var(--blue-color);
    padding-right: 29px;
  }
  .info-block__item__mobile-menu {
    display: none;
  }
  .info-block__navbar ul {
    justify-content: space-between;
  }
  @media (max-width: 991.99px) {
    .info-block__logo {
      margin-bottom: 20px;
    }
    .info-block__search {
      width: 100%;
    }
    .info-block__item,
    .info-block__log {
      display: none;
    }
    .info-block__input {
      max-width: 100%;
      margin-top: 30px;
    }
    .info-block__item__mobile-menu {
      display: block;
    }
  }
</style>