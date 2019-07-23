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
        this.chart = new Highcharts[this.typeChart](this.$el, this.options);
      }
    },
    beforeDestroy () {
      // Destroy chart if exists
      if (this.chart) {
        this.chart.destroy()
      }
    }
  };
</script>