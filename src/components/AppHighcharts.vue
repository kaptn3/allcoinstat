<template>
  <div class="Highcharts"/>
</template>

<script>
  import Highcharts from 'highcharts/highstock';
  import stockInit from 'highcharts/modules/stock';

  export default {
    name: 'Highcharts',
    props: {
      options: {
        type: Object,
        default: null
      },
      source: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        chart: null
      }
    },
    mounted() {
      this.chart = new Highcharts.stockChart(this.$el, this.options);
      this.addData();
    },
    beforeDestroy () {
    // Destroy chart if exists
      if (this.chart) {
        this.chart.destroy()
      }
    },
    methods: {
      addData() {
        this.chart.showLoading('Loading data from server...');
        if (this.source) {
          fetch(this.source)
              .then(response => response.json())
              .then(data => {
                this.chart.series[0].setData(data);
                this.chart.hideLoading();
              })
              .catch(error => console.error(error));
        } else {
          this.chart.showLoading('No data');
        }
      },
      addData2() {
        if (this.chart.series.length) {
            this.chart.series[0].remove();
        }
        if (this.source) {
          fetch(this.source)
            .then(response => response.json())
            .then(data => {
              if (this.chart.series.length == 0) {
                this.chart.addSeries({
                  name: 'AAPL',
                  type: 'area',
                  data: data,
                  //pointStart: Date.UTC(2018, 1, 1),// если не будет времени в api
                  //pointInterval: 1000 * 600,       // то будет необходим интервал и просто знач
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
                });
              }
            })
            .catch(error => console.error(error));
        } else {
          this.chart.showLoading('No data');
        }
      }
    }
  }
</script>