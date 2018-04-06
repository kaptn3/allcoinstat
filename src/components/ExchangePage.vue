<template>
  <div class="ExchangePage">
    <h2>{{ data.name }}</h2>
    <AppHighcharts :options="options" :id="nameId" :type-chart="'StockChart'" :source="source"/>
  </div>
</template>

<script>
  import AppHighcharts from './AppHighcharts';
  import Highcharts from 'highcharts';

  export default {
    name: 'ExchangePage',
    components: {
      AppHighcharts
    },
    props: {
      id: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        nameId: 'exchange',
        metaInfo: {
          title: ''
        },
        data: {},
        source: '/data/exchanges/' + this.id + '.json',
        options: {
          title: {
            text: 'Exchange rate over time'
          },
          subtitle: {
              text: 'Exchange rate'
          },
          xAxis: {
              gapGridLineWidth: 0
          },
          rangeSelector: {
              buttons: [{
                  type: 'hour',
                  count: 6,
                  text: '6h'
              }, {
                  type: 'day',
                  count: 1,
                  text: '24h'
              }, {
                  type: 'day',
                  count: 2,
                  text: '2d'
              },{
                  type: 'day',
                  count: 4,
                  text: '4d'
              },{
                  type: 'month',
                  count: 1,
                  text: '1m'
              },{
                  type: 'all',
                  count: 1,
                  text: 'All'
              }],
              selected: 5,
              inputEnabled: false
          },
          series: [{
              name: this.id,
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
    },
    watch: {
      '$route'() {
        this.fetchData('/data/exchanges.json');
      }
    },
    created() {
      this.fetchData('/data/exchanges.json');
    },
    mounted() {
      console.log(this.id);
    },
    methods: {
      fetchData (source) {
        if (source) {
          fetch(source)
            .then(response => response.json())
            .then(data => {
              this.distribution(data);
            })
            .catch(error => console.error(error));
        } else {
          console.log('No source');
        }
      },
      distribution (data) {
        this.data = data[this.id];
        this.metaInfo.title = this.data.name;
        console.log(this.metaInfo);
      }
    }
  };
</script>