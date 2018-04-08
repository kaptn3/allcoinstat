<template>
  <div class="ExchangePage">
    <h2>{{ data.name }}</h2>
    <div class="blocks-info row">
      <div class="block-info">
        <span class="block-info__head">Vol 24</span>
        <span class="block-info__value">$ 2222</span>
      </div>
      <div class="block-info">
        <span class="block-info__head">Website</span>
        <a :href="data.site" class="block-info__value">{{ data.site }}</a>
        <AppTooltip>
          <a slot="link" class="tooltip-icon"><img src="/assets/ui-img/info.svg"></a>
          <div slot="content" class="tooltip-help">Volume is arguably the most important metric for a cryptocurrency, because of the amount of ways it can be broken down.</div>
        </AppTooltip>
      </div>
      <div class="block-info">
        <span class="block-info__head">Twitter</span>
        <a :href="'//twitter.com/' + data.twitter" class="block-info__value">@{{ data.twitter }}</a>
      </div>
      <div class="block-info">
        <span class="block-info__head">Country</span>
        <span class="block-info__value">{{ data.country }}</span>
      </div>
      <div class="block-info">
        <span class="block-info__head">Tags</span>
        <AppTags :tags="data.tags"/>
      </div>
    </div>
    <div :id="nameId" class="chart" />
    <TableExchange :exchange="id"/><!-- таблица только для примера, без данных -->
  </div>
</template>

<script>
  import Highcharts from 'highcharts';
  import TableExchange from './TableExchange';
  import AppTags from './AppTags';
  import AppTooltip from './AppTooltip';

  export default {
    name: 'ExchangePage',
    components: {
      TableExchange,
      AppTags,
      AppTooltip
    },
    props: {
      id: {
        type: String,
        default: null
      },
      currency: {
        type: String,
        default: 'btc'
      }
    },
    data () {
      return {
        tags: {
          tag: {
            link: '/'
          },
          longtag: {
            link: '/'
          },
          longtags: {
            link: '/'
          }
        },
        chart: null,
        nameId: 'exchange',
        metaInfo: {
          title: 'Exchange'
        },
        data: {},
        source: '/data/exchanges/'+ this.id + '/' + this.currency+ '.json',
      }
    },
    watch: {
      '$route'() {
        this.fetchData('/data/exchanges.json');
        this.source = '/data/exchanges/'+ this.id + '/' + this.currency+ '.json';
        this.initChart(this.source);
      }
    },
    created() {
      this.fetchData('/data/exchanges.json');
      this.initChart(this.source);
       console.log(this.source);
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
                  buttonTheme: {
                    padding: 12
                  },
                  inputEnabled: false,
                  verticalAlign: 'bottom',
                  y: 30
                },
                series: [{
                  name: this.data.name,
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
  .chart {
    padding-bottom: 120px;
  }
  .blocks-info {
    margin-right: -30px;
    margin-left: -30px;
    padding-bottom: 50px;
  }
  .block-info {
    padding: 15px 30px;
  }
  .block-info__head {
    display: block;
    padding-bottom: 7px;
    color: #b1b1b1;
  }
  .block-info__value {
    font-size: calc((20 / 16) * 1rem);
  }
  a.block-info__value {
    color: var(--blue-color);
  }
  .tooltip-icon {
    height: 22px;
    width: 22px;
    display: inline-block;
    vertical-align: bottom;
    margin-left: 12px;
    margin-right: 12px;
  }
  .tooltip-help {
    width: 300px;
  }
</style>