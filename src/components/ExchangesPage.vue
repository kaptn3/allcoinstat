<template>
  <div class="ExchangesPage">
    <section v-for="(value, key) in headers" :key="key">
      <h2>Trading volume by {{ headers[key] }}</h2>
      <p class="description">{{ texts[key] }}</p>
      <div :class="'data'-headers[key]" class="row justify-content-between">
        <Table :source="sources[key]" :type-data="headers[key]" class="col-lg-5"/>
        <PieChart :source="sources[key]" class="col-lg-6"/>
      </div>
    </section>
  </div>
</template>

<script>  
  import AppTable from './AppTable';
  import Table from './TableTradingVolume';
  import PieChart from './PieChart';

  export default {
    name: 'ExchangesPage',    
    metaInfo: {
      title: 'Exchanges',
    },
    components: {
      AppTable,
      Table,
      PieChart
    },
    data () {
      return {
        sources: ['/data/trading_currency.json', '/data/trading_exchange.json'],
        headers: ['currency', 'exchange'],
        texts: [ 'Volume is arguably the most important metric for a cryptocurrency, because of the amount of ways it can be broken down. From volume, you can infer the direction and movements of a coin. It’s an essential metric for traders. Volume can examined in minute detail.', 'Volume is arguably the most important metric for a cryptocurrency, because of the amount of ways it can be broken down. From volume, you can infer the direction and movements of a coin. It’s an essential metric for traders. Volume can examined in minute detail.' ]
      }
    }
  };
  </script>

<style scoped>
section {
  padding-bottom: 70px;
}
.description {
  padding-bottom: 50px;
}
</style>