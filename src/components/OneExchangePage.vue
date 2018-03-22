<template>
  <div class="OneExchangePage">
    <AppHighcharts :options="options" :source="source"/>
  </div>
</template>

<script>
  import AppHighcharts from './AppHighcharts';
  import Highcharts from 'highcharts/highstock';

  export default {
    name: 'OneExchangePage',
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
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
            },
            threshold: null
          }]
        }
      }
    }
  }
</script>