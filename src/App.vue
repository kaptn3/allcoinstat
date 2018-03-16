<template>
  <div id="app">
    <Styles/>
    <TheHeader/>
    <div class="container main-content">
      <router-view/>
      <AppBanner class="banner__content"/>
    </div>
    <TheFooter/>  
  </div>
</template>

<script>
  import Styles from './components/Styles';
  import TheHeader from './components/TheHeader';
  import AppBanner from './components/AppBanner';
  import TheFooter from './components/TheFooter';

  export default {
    name: 'App',
    components: {
      Styles,
      TheHeader,
      AppBanner,
      TheFooter
    }
  };
</script>

<style>
  .main-content {
    padding-bottom: 30px;
  }
</style>