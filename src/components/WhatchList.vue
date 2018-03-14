<template>
  <div class="WhatchList">
    <div class="main-content__top-content">
      <h2>Watchlist</h2>
      <ButtonApp text="+ Add coin" class="top-content__btn btn" @click="open('addCoin')"/>
    </div>
    <div class="table-main">
      <div class="table-main-row th-row">
        <div class="table-main-row-th num">№</div>
        <div class="table-main-row-th icon"/>
        <div class="table-main-row-th name">Name</div>
        <div class="table-main-row-th market-cap" data-sort="market-cap">Market Cap</div>
        <div class="table-main-row-th price" data-sort="price">Price</div>
        <div class="table-main-row-th volume-24h" data-sort="volume">Volume (24h)</div>
        <div class="table-main-row-th p-1h" data-sort="p1h">% 1h</div>
        <div class="table-main-row-th p-24h" data-sort="p24h">% 24h</div>
        <div class="table-main-row-th p-7h" data-sort="p7d">% 7d</div>
        <div class="table-main-row-th sale">Sale</div>
      </div>
      <div class="table-main-row data-row" onclick="mainTableClick(this);">
        <div class="table-main-row-td num fl">1</div>
        <div class="table-main-row-td icon"><img src="img/bitcoin.png" alt="Bitcoin"></div>
        <div class="table-main-row-td name"><a href="https://allcoinstat.com/en/currency/bitcoin">Bitcoin</a></div>
        <div class="table-main-row-td market-cap 1">$191,023,476,496.00</div>
        <div class="table-main-row-td price 1">11 301,10</div>
        <div class="table-main-row-td volume-24h">$6,250,120,000.00</div>
        <div class="table-main-row-td p-1h 1"><span class="p-minus">- 0.2 %</span></div>
        <div class="table-main-row-td p-24h 1"><span class="p-minus">- 1.46 %</span></div>
        <div class="table-main-row-td p-7h 1"><span class="p-plus">+ 6.39 %</span></div>
        <div class="table-main-row-td sale">buy</div>
      </div>
    </div>
    <ButtonApp text="View all" class="btn btn-view"/>
  </div><!-- end Whatchlist -->
</template>

<script>
  import HeaderApp from './HeaderApp';
  import Banner from './Banner';
  import ButtonApp from './ButtonApp';
  import FooterApp from './FooterApp';

  export default {
    name: 'WhatchList',
    components: {
      HeaderApp,
      Banner,
      ButtonApp,
      FooterApp
    }
  };
</script>

<style scoped>
  header {
    padding-bottom: 30px;
  }
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