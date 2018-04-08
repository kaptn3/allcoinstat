<template>
  <div class="WhatchList">
    <div class="main-content__top-content">
      <h2>Watchlist</h2>
      <Modals name="addCoin"/>
    </div>
    <TableSale/>
  </div><!-- end Whatchlist -->
</template>

<script>
  import Modals from './Modals';
  import TableSale from './TableSale';

  export default {
    name: 'WatchList',
    metaInfo: {
      title: 'Watchlist',
    },
    components: {
      Modals,
      TableSale
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
  @media (max-width: 767.99px) {
    .main-content__top-content {
      flex-direction: column;
    }
  }
</style>