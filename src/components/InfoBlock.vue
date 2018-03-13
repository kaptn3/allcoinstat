<template>
  <div class="info-block">
    <nav class="info-block__navbar">
      <ul>
        <li class="info-block__logo"><a href="#"><img src="img/logo.svg"></a></li>
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
          <a href="#" @click="open('signIn')">sign in</a> / <a href="#" @click="open('signUp')">sign up</a>
        </li>
        <InputForm type="search" name="search" placeholder="Search coins" class="info-block__input" />
      </ul>
    </nav>
  </div>
</template>

<script>
  import InputForm from './InputForm.vue';

  export default {
    name: 'InfoBlock',
    components: {
      InputForm
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
  .info-block__input {
    max-width: 230px;
  }
</style>