<template>
  <header>
    <div class="container">
      <Banner/>
      <InfoBlock/>
      <TopHeader/>
      <TopMenu class="TopMenu"/>
      <Banner/>
    </div>
  </header>
</template>

<script>
  import Banner from './Banner';
  import InfoBlock from './InfoBlock';
  import TopHeader from './TopHeader';
  import TopMenu from './TopMenu';

  export default {
    name: 'Header',
    components: {
      Banner,
      InfoBlock,
      TopHeader,
      TopMenu
    }
  }
</script>

<style scoped>
  .TopMenu {
    margin-bottom: 30px;
  }
</style>