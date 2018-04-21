<template>
  <div class="ExchangePage">
    <h2>{{ data.name }}</h2>
    <div class="blocks-info row">
      <div class="block-info col-lg col-xl-2">
        <span class="block-info__head">Vol 24</span>
        <span class="block-info__value">$ 2222</span>
      </div>
      <div class="block-info col-lg col-xl-3">
        <span class="block-info__head">Website</span>
        <a :href="data.site" class="block-info__value" target="_blank">{{ data.site }}</a>
        <v-popover offset="16" class="tooltip-help">
          <a class="tooltip-help__link"><img src="/assets/ui-img/info.svg"></a>
          <template slot="popover"> 
            <div class="tooltip-help__content">Volume is arguably the most important metric for a cryptocurrency, because of the amount of ways it can be broken down.</div>
          </template>
        </v-popover>
      </div>
      <div class="block-info col-lg col-xl-2">
        <span class="block-info__head">Twitter</span>
        <a :href="'//twitter.com/' + data.twitter" class="block-info__value" target="_blank">@{{ data.twitter }}</a>
      </div>
      <div class="block-info col-lg col-xl-2">
        <span class="block-info__head">Country</span>
        <span class="block-info__value">{{ data.country }}</span>
      </div>
      <div class="block-info col-lg col-xl-3">
        <span class="block-info__head">Tags</span>
        <AppTags :tags="data.tags" class="block-info__tags"/>
      </div>
    </div>
    <div class="chart">
      <div :id="nameId" />
      <div class="zoom">
        <div class="zoom__stock">
          <span class="zoom__label">Zoom</span>
          <div class="zoom__stock__content zoom__stock__content-area">
            <a 
              v-for="value in zoom.area" 
              :key="value" 
              :class="{ active: isZoomActive === value }"
              class="col" 
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
              class="col"
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
          area: ['All', '6h', '1d', '2d', '4d', '1w', '2w', '1m'],
          candle: ['5-min', '15-min', '30-min', '2-hr', '4-hr', '1-day', '2-day']
        },
        isZoomActive: '6h',
        title: 'Exchange',
        chart: null,
        nameId: 'exchange',
        data: {},
        source: '/data/exchanges/'+ this.id + '/' + this.currency + '/6h.json',
      }
    },
    watch: {
      '$route'() {
        this.fetchData('/data/exchanges.json');
        this.source = '/data/exchanges/'+ this.id + '/' + this.currency + '/6h.json';
        this.initChart(this.source, 'area');
      }
    },
    created() {
      this.fetchData('/data/exchanges.json');
      this.initChart(this.source, 'area');
    },
    beforeDestroy () {
      // Destroy chart if exists
      this.destroyChart();
    },
    methods: {
      loadChart (period, type) {
        period = period.toLowerCase();
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
                  enabled: false,
                  inputEnabled: false
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
    padding-top: 15px;
    padding-bottom: 15px;
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
  .zoom {
    display: flex;
    flex-wrap: wrap;
  }
  .zoom__label {
    color: #b1b1b1;
    font-weight: 500;
    margin-right: 20px;
  }
  .zoom__stock {
    padding-top: 36px;
    display: flex;
    align-items: center;
  }
  .zoom__stock__content {
    overflow: hidden;
    border-radius: 100px;
    border: 2px solid var(--light-color);
    display: flex;
  }
  .zoom__stock__content-area {
    margin-right: 36px;
  }
  .zoom__stock__content > a {
    border-left: 1px solid var(--light-color);
    border-right: 1px solid var(--light-color);
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50px;
    padding: 0;
    width: 64px;
  }
  .zoom__stock__content-area > a {
    width: 50px;
  }
  .active,
  .zoom__stock__content > a:hover {
    color: #fff;
    background: var(--blue-color);
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
    .zoom__stock {
      align-items: flex-start;
      flex-direction: column;
    }
    .zoom__label {
      padding-bottom: 8px;
    }
  }
  @media (max-width: 575.99px) {
    .tooltip-help__content {
      width: 200px;
    }
    .tooltip-help {
      margin: 0 6px;
    }
    .zoom__stock {
      width: 100%
    }
    .zoom__stock__content {
      width: 100%;
    }
    .zoom__stock__content > a {
      font-size: .875rem;
      width: 100%;
    }
  }
</style>