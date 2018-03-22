<template>
  <div class="ExchangesPage">
    <h2>Trading volume by currency</h2>
    <p>Volume is arguably the most important metric for a cryptocurrency, because of the amount of ways it can be broken down. From volume, you can infer the direction and movements of a coin. It’s an essential metric for traders. Volume can examined in minute detail. </p>
    <div class="currency__content">
      <div class="currency__table">Здесь таблица</div>
      <div class="currency__pie">
        <AppHighcharts :options="options"/>
      </div>
    </div>
    <h2>Trading volume by exchange</h2>
    <p>Volume is arguably the most important metric for a cryptocurrency, because of the amount of ways it can be broken down. From volume, you can infer the direction and movements of a coin. It’s an essential metric for traders. Volume can examined in minute detail. </p>
  </div>
</template>

<script>
  import AppHighcharts from './AppHighcharts';
  import Highcharts from 'highcharts/highstock';

  export default {
    name: 'ExchangesPage',
    components: {
      AppHighcharts
    },
    data () {
      return {
        options: {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
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
            data: [
                { name: 'Chrome', y: 61.41 },
                { name: 'Internet Explorer', y: 11.84 },
                { name: 'Firefox', y: 10.85 },
                { name: 'Edge', y: 4.67 }
            ]
        }]
      }
    }
  }
  };

  var pieColors = (function () {
    var colors = [],
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

  <style>
    .currency__content {
      display: flex;
    }
    .currency__table {
      width: 50%;
    }
    .currency__pie {
      width: 50%;
    }
    .highcharts-container {
      border: 2px solid var(--light-color);
    }
  </style>