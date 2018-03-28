<template>
  <div class="ExchangesPage">
    <h2>Trading volume by currency</h2>
    <p>Volume is arguably the most important metric for a cryptocurrency, because of the amount of ways it can be broken down. From volume, you can infer the direction and movements of a coin. It’s an essential metric for traders. Volume can examined in minute detail. </p>
    <div class="trading__content row justify-content-between">
      <div class="trading__table col-lg-5">
        <AppTable>
          <thead slot="table-header">
            <tr>
              <th 
                v-for="(value, key) in tableData.header" 
                :key="key"
                :class="key">{{ value }}</th>
            </tr>
          </thead>
          <tbody slot="table-body">
            <tr 
              v-for="(value, key) in tableData.data"
              :key="key">
              <td class="currency">
                <a :href="value.currency">{{ value.currency }}</a>
              </td>
              <td class="volume">{{ value.volume }}</td>
              <td class="share">{{ value.share }}</td>
            </tr>
          </tbody>
        </AppTable>
      </div>
      <div class="trading__pie col-lg-6">
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
  import AppTable from './AppTable';

  export default {
    name: 'ExchangesPage',    
    metaInfo: {
      title: 'Exchanges',
    },
    components: {
      AppHighcharts,
      AppTable
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
                { name: 'USD', y: 61.41 },
                { name: 'RUB', y: 11.84 },
                { name: 'JPY', y: 10.85 },
                { name: 'Other', y: 4.67 }
            ]
        }]
      },
      tableData: {
        header: {
          currency: 'Currency',
          volume: 'Volume 24',
          share: 'Share'
        },
        data: [
          { currency: 'USD', volume: '1234', share: '59%' },
          { currency: 'USD', volume: '1234', share: '59%' },
          { currency: 'USD', volume: '1234', share: '59%' },
          { currency: 'USD', volume: '1234', share: '59%' }
        ]
      }
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

<style>
  .trading__content {
    padding-bottom: 70px;
  }
  .highcharts-container {
    border: 2px solid var(--light-color);
  }
</style>