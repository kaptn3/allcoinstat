<template>
  <div class="Highcharts"/>
</template>

<script>
  import Highcharts from 'highcharts';
  import stockInit from 'highcharts/modules/stock';
  stockInit(Highcharts);

  export default {
    name: 'AppHighcharts',
    props: {
      typeChart: {
        type: String,
        default: 'chart'
      },
      source: {
        type: String,
        default: null
      },
      options: {
        type: Object,
        required: true
      }/*,
      callback: Function*/
    },
    watch: {
      options: {
        handler (newValue, oldValue) {
          this.chart.showLoading('Loading data from server...');
          this.chart.update(newValue);
          this.chart.hideLoading();
        },
        deep: true
      }
    },
    mounted () {
      // Check wheather the chart configuration object is passed, as well as the constructor is valid
      if (this.options && Highcharts[this.typeChart]) {
        this.chart = new Highcharts[this.typeChart](this.$el, this.options)
        if (this.source) {
          this.addData();
        }
      } else {
        (!this.options) ? console.warn('The "options" parameter was not passed.') : console.warn(`'${this.typeChart}' constructor-type is incorrect. Sometimes this error is casued by the fact, that the corresponding module wasn't imported.`)
      }
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
      }
    }
  };
</script>