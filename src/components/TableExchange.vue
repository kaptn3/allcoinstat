<template>
  <div class="table-exchange">
    <div class="mobile-icons">
      <div class="mobile-icons__head" />
      <div v-for="(value, key) in tableData.data"
           :key="key"
           class="icon">
        <img :src="value.icon">
      </div>
    </div>
    <AppTable :text-button="'View full chart'">
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
          <td class="name"><router-link :to="{ name: 'exchange', params: { currency: value.short } }" class="link">{{ value.name }}</router-link></td>
          <td class="pair">{{ value.pair }}</td>
          <td class="priceBtc">{{ value.priceBtc }}</td>
          <td class="volume">{{ value.volume }}</td>
          <td class="calcPrice">{{ value.calcPrice }}</td>
          <td class="calc24">{{ value.calc24 }}</td>          
        </tr>
      </tbody>
    </AppTable>
  </div>
</template>

<script>
  import AppTable from './AppTable';  
  import tableScript from '../assets/js/tableScroll.js';

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
            name: 'Market',
            pair: 'Pair',
            priceBtc: 'Price BTC',
            volume: '24h volume BTC',
            calcPrice: 'Calc Price',
            calc24: 'Calc 24h volume'
          }
        }
      }
    },
    mounted () {
      this.fetchData('/data/exchanges/tableData.json');
      tableScript.tableScroll();
    },
    methods: {
      fetchData (source) {
        if (source) {
          fetch(source)
            .then(response => response.json())
            .then(data => {
              this.distribution(data);
            })
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
  .table-exchange {
    position: relative;
  }
  .mobile-icons {
    position: absolute;
    left: -1px;
    top: 0;
    display: none;
    background: #fff;
    box-shadow: 12px 0 8px -5px rgba(0, 0, 0, .16);
  }
  .mobile-icons > div {
    padding: 15px 10px 16px 10px;
    border-bottom: 1px solid var(--border-gray);
  }
  div.mobile-icons__head {
    padding: 0;
  }
</style>