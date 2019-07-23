<template>
  <div v-if="data" class="CurrencyPageExchange">
    <h2>Exchanges {{ data.name.toLowerCase() }} markets</h2>
    <p>Trading in Ethereum, or any other financial asset like crude oil, offers many opportunities. However, it can be difficult to navigate between brokers, spreads and sky-high management fees. That’s why managing your own investments based on price variances makes sense for many trading beginners. </p>

    <AppTable :text-button="'View all'" class="currency__exchanges">
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
          <td class="icon fix-mobile"><img :src="value.icon"></td>
          <td class="name"><router-link :to="{ name: 'exchange', params: { id: key.toLowerCase() } }" class="link">{{ key }}</router-link></td>

          <td v-for="(value, key) in value.data" :key="key" :class="key">{{ value }}</td> 
        </tr>
      </tbody>
    </AppTable>
  </div>
</template>

<script>
  import AppTable from './AppTable';

  export default {
    name: 'CurrencyPage',
    components: {
      AppTable
    },
    data () {
      return {
        data: null,
        tableData: {
          header: {
            "icon": "",
            "name": "Name",
            "pair": "Pair", 
            "price-pair": "Price in pair",
            "price-usd": "Price in USD",
            "day-high": "24 high",
            "day-low": "24 low",
            "volume": "Volume (24h)",
            "volume-perc": "Volume(%)"
        },
          data: null
        },
        source: ['/data/currencies/'+ this.$route.params.id + '/currency.json', '/data/currencies/'+ this.$route.params.id + '/exchanges.json']
      }
    },
    mounted () {
      this.fetchData(this.source);
    },
    methods: {
      fetchData (source) {
        for (let i = 0; i < 2; i++) {
          if (source[i]) {
            fetch(source[i])
              .then(response => response.json())
              .then(data => {
                this.distribution(data, source[i]);
              })
          }
        }
      },
      distribution (data, source) {
        if (source === this.source[0]) {
          this.data = data;
        } else {
          this.tableData.data = data;
        }
      }
    }
  };
</script>

<style scoped>
  .currency__exchanges {
    margin-top: 30px;
  }
  th {
    white-space: nowrap;
  }
</style>