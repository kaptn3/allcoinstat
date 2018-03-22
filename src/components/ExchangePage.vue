<template>
  <div class="ExchangePage">
    <AppHighcharts :options="options" :source="source"/>
  </div>
</template>

<script>
  import AppHighcharts from './AppHighcharts';

  export default {
    name: 'ExchangePage',
    components: {
      AppHighcharts
    },
    data () {
      return {
        source: 'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/new-intraday.json',
        options: {
          title: {
            text: 'AAPL stock price by minute'
          },
          subtitle: {
             text: 'Using ordinal X axis'
          },
          xAxis: {
              gapGridLineWidth: 0
          },
          rangeSelector: {
              buttons: [{
                  type: 'hour',
                  count: 1,
                  text: '1h'
              }, {
                  type: 'day',
                  count: 1,
                  text: '1D'
              }, {
                  type: 'all',
                  count: 1,
                  text: 'All'
              }],
              selected: 1,
              inputEnabled: false
          },
          series: [{
              name: 'AAPL',
              type: 'area',
              data: [0],
              gapSize: 5,
              tooltip: {
                  valueDecimals: 2
              },
              threshold: null
          }]
        }
      }
    },
  }
</script>