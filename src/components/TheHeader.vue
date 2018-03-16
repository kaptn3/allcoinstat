<template>
  <header>
    <div class="container">
      <AppBanner class="banner_pink"/>
      <TheTopInfoBlock/>
      <TheTopHeading/>
      <TheTopMenu class="TheTopMenu"/>
      <AppBanner class="banner__content"/>
    </div>
  </header>
</template>

<script>
  import AppBanner from './AppBanner';
  import TheTopInfoBlock from './TheTopInfoBlock';
  import TheTopHeading from './TheTopHeading';
  import TheTopMenu from './TheTopMenu';

  export default {
    name: 'TheHeader',
    components: {
      AppBanner,
      TheTopInfoBlock,
      TheTopHeading,
      TheTopMenu
    }
  }
</script>

<style scoped>
  .TheTopMenu {
    margin-bottom: 30px;
  }
</style>