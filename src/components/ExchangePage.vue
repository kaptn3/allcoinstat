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
        <v-popover offset="16" class="tooltip-help">
          <a class="tooltip-help__link"><img src="/assets/ui-img/info.svg"></a>
          <template slot="popover"> 
            <div class="tooltip-help__content">Volume is arguably the most important metric for a cryptocurrency, because of the amount of ways it can be broken down.</div>
          </template>
        </v-popover>
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
        <AppTags :tags="data.tags" class="block-info__tags"/>
      </div>
    </div>
    <div class="chart">
      <div :id="nameId" />
      <div class="zoom">
        <div class="zoom__stock">
          <span class="zoom__label">Zoom</span>
          <div class="zoom__stock__content">
            <a 
              v-for="value in zoom.area" 
              :key="value" 
              :class="{ active: isZoomActive === value }"
              @click="loadChart(value, 'area')">{{ value }}</a>
          </div>
        </div>
        <div class="zoom__stock">
          <span class="zoom__label">Candlesticks</span>
          <div class="zoom__stock__content">
            <a 
              v-for="value in zoom.candle" 
              :key="value" 
              :class="{ active: isZoomActive === value }"
              @click="loadChart(value, 'candlestick')">{{ value }}</a>
          </div>
        </div>
      </div>
    </div>
    <TableExchange/><!-- таблица только для примера, без данных -->
  </div>
</template>

<script>
  import Highcharts from 'highcharts';
  import TableExchange from './TableExchange';
  import AppTags from './AppTags';

  export default {
    name: 'ExchangePage',
    components: {
      TableExchange,
      AppTags
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
        zoom: {
          area: ['6h', '1d', '2d', '1w'],
          candle: ['5-min', '15-min', '30-min', '2-hr']
        },
        isZoomActive: '6h',
        title: 'Exchange',
        chart: null,
        nameId: 'exchange',
        data: {},
        source: '/data/exchanges/'+ this.id + '/' + this.currency+ '.json',
      }
    },
    watch: {
      '$route'() {
        this.fetchData('/data/exchanges.json');
        this.source = '/data/exchanges/'+ this.id + '/' + this.currency+ '.json';
        this.initChart(this.source, 'area');
      }
    },
    created() {
      this.fetchData('/data/exchanges.json');
      this.initChart(this.source, 'area');//type: 'candlestick',
    },
    beforeDestroy () {
      // Destroy chart if exists
      this.destroyChart();
    },
    methods: {
      loadChart (period, type) {
        this.initChart('/data/exchanges/'+ this.id + '/' + this.currency + '/' + period + '.json', type);
        this.isZoomActive = period;
      },
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
        this.title = this.data.name;
      },
      destroyChart () {
        if (this.chart) {
          this.chart.destroy()
        }
      },
      initChart (source, type) {
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
                    height: 25
                  },
                  inputEnabled: false,
                  verticalAlign: 'bottom',
                  y: 30
                },
                series: [{
                  name: this.data.name,
                  type: type,
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
    metaInfo () {
      return {
        title: this.title
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
    margin-right: -15px;
    margin-left: -15px;
    padding-bottom: 50px;
  }
  .block-info {
    padding: 15px;
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
  .tooltip-help {
    display: inline-block;
    margin: 0 12px;
  }
  .tooltip-help__link {
    height: 22px;
    width: 22px;
    display: inline-block;
    vertical-align: bottom;
  }
  .tooltip-help__content {
    width: 300px;
  }
  @media (max-width: 767.99px) {
    .blocks-info {
      flex-direction: column;
    }
    .block-info {
      width: 100%;
    }
    .block-info__head {
      width: 25%;
      display: inline-block;
    }
    .block-info__tags {
      display: inline-block;
    }
  }
  @media (max-width: 575.99px) {
    .tooltip-help__content {
      width: 200px;
    }
    .tooltip-help {
      margin: 0 6px;
    }
  }
  .zoom__label {
    color: #b1b1b1;
    font-weight: 500;
  }
  .zoom {
    padding-top: 36px;
    display: flex;
  }
  @media (max-width: 767.99px) {
    .zoom {
      flex-direction: column;
    }
  }
  .zoom__stock {
    display: flex;
    align-items: center;
    padding-right: 36px;
  }
  .zoom__stock__content {
    margin-left: 20px;
    overflow: hidden;
    border-radius: 100px;
    border: 2px solid var(--light-color);
    display: flex;
  }
  .zoom__stock__content > a {
    padding: 15px 12px;
    border-left: 1px solid var(--light-color);
    border-right: 1px solid var(--light-color);
    display: block;
    font-weight: 500;
  }
  .active,
  .zoom__stock__content > a:hover {
    color: #fff;
    background: var(--blue-color);
  }
</style>