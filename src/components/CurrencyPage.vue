<template>
  <div v-if="data" class="CurrencyPage">
    <div class="currency__top row justify-content-between">
      <div class="currency__header">
        <img :src="'//allcoinstat.com/img/icons/32x32/' + data.name.toLowerCase() + '.png'" class="multiselect__element__icon">
        <h2>{{ data.name }} ({{ data.short.toUpperCase() }})</h2>
        <AppRank>{{ data.rank }}</AppRank>
      </div>
      <div class="col currency__data">
        <span class="currency__data__label">MarketCap</span>
        <span class="currency__data__amount">{{ data.market[0] }} <span :class="colorValue(data.market[1])">({{ data.market[1] }}%)</span></span>    
        <span class="currency__data__label">24 high</span>
        <span class="currency__data__amount">{{ data.dayHigh }}</span>
        <span class="currency__data__label">24 low </span>
        <span class="currency__data__amount">{{ data.dayLow }}</span>
        <span class="currency__data__label">coins</span>
        <span class="currency__data__amount">{{ data.coin }}</span>
      </div>
    </div>
    <div class="row justify-content-between currency__btns">
      <AppButton class="btn">Buy / Sell Instantly!</AppButton>
      <AppButton class="btn btn-add">+ Add Portfolio</AppButton>
    </div>
    <Menu class="currency__menu"/>
    <h2>Exchanges {{ data.name.toLowerCase() }} markets</h2>
    <p>Trading in Ethereum, or any other financial asset like crude oil, offers many opportunities. However, it can be difficult to navigate between brokers, spreads and sky-high management fees. That’s why managing your own investments based on price variances makes sense for many trading beginners. </p>

    <AppTable :show-button="true" :text-button="'View all'" class="currency__exchanges">
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
          <td class="icon fix-mobile"><img :src="'//allcoinstat.com/img/icons/16x16/' + key.toLowerCase() + '.png'"></td>
          <td class="name"><router-link :to="{ name: 'exchange', params: { id: key.toLowerCase() } }" class="link">{{ key }}</router-link></td>

          <td v-for="(value, key) in value" :key="key" :class="key">{{ value }}</td> 
        </tr>
      </tbody>
    </AppTable>
  </div>
</template>

<script>
  import Menu from './TheCryptoMenu';
  import AppButton from './AppButton';
  import AppRank from './AppRank';
  import AppTable from './AppTable';

  export default {
    name: 'CurrencyPage',
    components: {
      Menu,
      AppButton,
      AppRank,
      AppTable
    },
    props: {
      id: {
        type: String,
        default: 'btc'
      }
    },
    data () {
      return {
        data: null,
        title: 'Currency',
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
        source: ['/data/currencies/'+ this.id + '/currency.json', '/data/currencies/'+ this.id + '/exchanges.json']
      }
    },
    watch: {
      '$route'() {
        this.source[0] = '/data/currencies/'+ this.id + '/currency.json';
        this.source[1] = '/data/currencies/'+ this.id + '/exchanges.json';
        this.fetchData(this.source);
      }
    },
    created () {
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
              .catch(error => console.error(error));
          } else {
            console.log('No source');
          }
        }
      },
      distribution (data, source) {
        if (source === this.source[0]) {
          this.data = data;          
          this.title = this.data.name;
        } else {
          this.tableData.data = data;
        }
      },
      colorValue (value) {
        if (value > 0) {
          return 'green'
        } else {
          return 'red'
        }
      }
    },    
    metaInfo () {
      return {
        title: this.title
      }
    },
  };
</script>

<style scoped>
  .red {
    color: var(--red-color);
  }
  .green {
    color: var(--green-color);
  }
  .currency__header {
    display: flex;
    align-items: center;
    padding-left: 15px;
  }
  .currency__header h2 {
    margin: 0;
  }
  .currency__data {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 500;
  }
  .currency__data__label {
    color: var(--light-gray-color);
    margin-left: 10px;
  }
  .currency__data__amount {
    margin-left: 10px;
  }
  .currency__menu,
  .currency__top {
    margin-bottom: 44px;
  }
  .currency__btns {
    margin: 0;
    padding-bottom: 40px;
  }
  .currency__exchanges {
    margin-top: 30px;
  }
  @media (max-width: 767.99px) {
    .currency__data {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 991.99px) {
    .currency__top {
      flex-direction: column;
    }
    .currency__data {
      justify-content: center;
      padding-top: 46px;
      flex-basis: auto;
    }
    .currency__data span {
      padding-bottom: 12px;
    }
    .btn {
      margin-bottom: 10px;
    }
  }
</style>