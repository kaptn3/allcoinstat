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
      }
    }
  }
</script>