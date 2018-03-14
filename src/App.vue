<template>
  <div id="app">
    <Styles/>
    <HeaderApp/>
    <div class="container main-content">
      <router-view/>
      <Banner class="banner__content"/>
    </div>
    <FooterApp/>  
  </div>
</template>

<script>
  import Styles from './components/Styles';
  import HeaderApp from './components/HeaderApp';
  import Banner from './components/Banner';
  import FooterApp from './components/FooterApp';

  export default {
    name: 'App',
    components: {
      Styles,
      HeaderApp,
      Banner,
      FooterApp
    }
  };
</script>

<style>
  .main-content {
    padding-bottom: 30px;
  }
</style>