<template>
  <div class="ExchangePage">
    <h2>{{ data.name }}</h2>
    <div :id="nameId" class="chart" />
  </div>
</template>

<script>
  import Highcharts from 'highcharts';

  export default {
    name: 'ExchangePage',
    props: {
      id: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        chart: null,
        nameId: 'exchange',
        metaInfo: {
          title: 'title'
        },
        data: {},
        source: '/data/exchanges/' + this.id + '.json',
      }
    },
    watch: {
      '$route'() {
        this.fetchData('/data/exchanges.json');
        this.source = '/data/exchanges/' + this.id + '.json';
        this.initChart(this.source);
      }
    },
    created() {
      this.fetchData('/data/exchanges.json');
      this.initChart(this.source);
    },
    beforeDestroy () {
      // Destroy chart if exists
      this.destroyChart();
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
        //this.source = '/data/exchanges/' + this.id + '.json';
      },
      destroyChart () {
        if (this.chart) {
          this.chart.destroy()
        }
      },
      initChart (source) {
        if (source) {
          fetch(source)
            .then(response => response.json())
            .then(data => {
              console.log(source);
              this.chart = new Highcharts.StockChart(this.nameId, {
                chart: {
                  borderColor: 'var(--light-color)',
                  borderWidth: 2
                },
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
                    type: 'week',
                    count: 1,
                    text: '1w'
                  },{
                    type: 'week',
                    count: 2,
                    text: '2w'
                  },{
                    type: 'month',
                    count: 1,
                    text: '1m'
                  },{
                    type: 'all',
                    count: 1,
                    text: 'All'
                  }],
                  selected: 1,
                  inputEnabled: false,
                  verticalAlign: 'bottom',
                  y: 30
                },
                series: [{
                  name: 'dfd',
                  type: 'area',
                  data: data,
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
              })
            })
            .catch(error => {
              this.destroyChart();
              console.error(error)
            });
        } else {
          console.log('No source');
        }
      }
    },
  };
</script>

<style scoped>
  .ExchangePage {
    margin-bottom: 30px;
  }
  .highcharts-button {
    padding: 20px;
  }
</style>