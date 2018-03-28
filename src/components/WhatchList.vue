<template>
  <div class="WhatchList">
    <div class="main-content__top-content">
      <h2>Watchlist</h2>
      <Modals name="addCoin"/>
    </div>
    <AppTable/>
  </div><!-- end Whatchlist -->
</template>

<script>
  import Modals from './Modals';
  import AppTable from './AppTable';

  export default {
    name: 'WhatchList',
    components: {
      Modals,
      AppTable
    }
  };
</script>

<style scoped>
  .btn-view {
    margin-left: auto;
    margin-right: auto;
  }
  .main-content__top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    h2 {
      margin: 0;
    }
  }
</style>