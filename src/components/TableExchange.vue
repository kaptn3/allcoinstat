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
        <td class="name">{{ value.name }}</td>
        <td class="market">{{ value.market }}</td>
        <td class="price">{{ value.price }}</td>
        <td class="volume">{{ value.volume }}</td>
        <td :class="colorValue(value.hour)" class="hour">{{ value.hour }}</td>
        <td :class="colorValue(value.day)" class="day">{{ value.day }}</td>
        <td :class="colorValue(value.seven_days)" class="seven_days">{{ value.seven_days }}</td>
        <td class="sale">buy</td>          
      </tr>
    </tbody>
  </AppTable>
</template>

<script>
  import AppTable from './AppTable';

  export default {
    name: 'TableSale',
    components: {
      AppTable
    },
    data () {
      return {
        tableData: {
          data: [
            { icon: '/img/bitcoin.png', name: 'Titcoin', market: '191,023,476,496.00', price: '11 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 6.39 },
            { icon: '/img/monero.png', name: 'Litcoin', market: '181,023,476,496.00', price: '1 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 3.39 },
            { icon: '/img/ripple.png', name: 'Bitcoin', market: '191,023,476,496.00', price: '11 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 6.39 },
            { icon: '/img/ethereum.png', name: 'Litcoin', market: '181,023,476,496.00', price: '1 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 3.39 },
            { icon: '', name: 'Bitcoin', market: '191,023,476,496.00', price: '11 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 6.39 },
            { icon: '', name: 'Litcoin', market: '181,023,476,496.00', price: '1 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 3.39 }
          ],        
          header: {
            num: '№', 
            icon: ' ', 
            name: 'Name', 
            market: 'Market Cap',
            price: 'Price',
            volume: 'Volume (24h)',
            hour: '% 1h',
            day: '% 24h',
            seven_days: '% 7d',
            sale: 'Sale'
          }
        }
      }
    },
    methods: {
      colorValue (value) {
        if (value > 0) {
          return 'price_plus'
        } else {
          return 'price_minus'
        }
      }
    }
  };
</script>