<template>
  <AppTable :show-button="true" :text-button="'View full chart'">
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
        <td class="num">{{ key + 1 }}</td>
        <td class="icon"><img :src="value.icon"></td>
        <td class="market"><router-link :to="{ name: 'exchange', params: { currency: value.short } }" class="link">{{ value.name }}</router-link></td>
        <td class="pair">{{ value.pair }}</td>
        <td class="priceBtc">{{ value.priceBtc }}</td>
        <td class="volume">{{ value.volume }}</td>
        <td class="calcPrice">{{ value.calcPrice }}</td>
        <td class="calc24">{{ value.calc24 }}</td>          
      </tr>
    </tbody>
  </AppTable>
</template>

<script>
  import AppTable from './AppTable';

  export default {
    name: 'TableExchange',
    components: {
      AppTable
    },
    data () {
      return {
        tableData: {
          data: null,   
          header: {
            num: '№', 
            icon: ' ',
            market: 'Market',
            pair: 'Pair',
            priceBtc: 'Price BTC',
            volume: '24h volume BTC',
            calcPrice: 'Calc Price',
            calc24: 'Calc 24h volume'
          }
        }
      }
    },
    created () {
      this.fetchData('/data/exchanges/tableData.json');
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
        this.tableData.data = data;
      }
    }
  };
</script>

<style scoped>
  .router-link-exact-active {
    color: var(--blue-color);
  }
</style>