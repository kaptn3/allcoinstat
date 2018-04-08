<template>
  <div class="PieChart">
    <AppHighcharts :options="options"/>
  </div>
</template>

<script>
  import AppHighcharts from './AppHighcharts';
  import Highcharts from 'highcharts';

  export default {
    name: 'PieChart',
    components: {
      AppHighcharts
    },
    props: {
      source: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        options: {
          chart: {
            plotBackgroundColor: null,
            borderColor: 'var(--light-color)',
            borderWidth: 2,
            plotShadow: false,
            type: 'pie',
            height: 380
          },
          title: {
              text: null
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  colors: pieColors,
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                      distance: -50,
                      filter: {
                          property: 'percentage',
                          operator: '>',
                          value: 4
                      }
                  }
              }
          },
          series: [{
              name: 'Share',
              data: null
          }]
        }
      }
    },
    created () {
      this.fetchData(this.source);
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
        this.options.series[0].data = data;
      }
    }
  };
  let pieColors = (function () {
      let colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

      for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color('#388dfe').brighten((i) / 10).get());
      }
      return colors;
    }());
</script>