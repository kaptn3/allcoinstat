<template>
  <div class="UiPage">
    <div class="row colors-btns">
      <div class="col-4">
        <h4>Colors</h4>
        <div class="blocks">
          <div class="block__div">
            <div class="block blue"/>
            <p class="block__hex">388dfe</p>
            <p class="block__rbg">56 141 254</p>
          </div>
          <div class="block__div">
            <div class="block black"/>
            <p class="block__hex">000000</p>
            <p class="block__rbg">0 0 0</p>
          </div>
          <div class="block__div">
            <div class="block light-gray"/>
            <p class="block__hex">a8b2b9</p>
            <p class="block__rbg">168 178 185</p>
          </div>
          <div class="block__div">
            <div class="block dark-gray"/>
            <p class="block__hex">404040</p>
            <p class="block__rbg">25 25 25</p>
          </div>
          <div class="block__div">
            <div class="block red"/>
            <p class="block__hex">ff5555</p>
            <p class="block__rbg">56 141 254</p>
          </div>
          <div class="block__div">
            <div class="block green"/>
            <p class="block__hex">20dc86</p>
            <p class="block__rbg">32 220 134</p>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>Buttons</h4>
        <div class="row">
          <div class="col">
            <AppButton class="btn">Send comment</AppButton>
            <AppButton class="btn btn-add">Add to portfolio</AppButton>
            <AppButton class="btn btn-view">View all</AppButton>            
          </div>
          <div class="col">
            <AppButton class="btn">Send comment</AppButton>
            <AppButton class="btn btn-add">Add to portfolio</AppButton>
            <AppButton class="btn btn-view">View all</AppButton>
          </div>
          <div class="col">
            <AppButton class="btn disabled" disabled>Send comment</AppButton>
            <AppButton class="btn btn-add disabled" disabled>Add to portfolio</AppButton>
            <AppButton class="btn btn-view disabled" disabled>View all</AppButton>
          </div>
        </div>
      </div>
    </div><!-- end color and buttons -->

    <div class="row">
      <div class="col">
        <h4>Fonts</h4>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <p>Text</p>
      </div>
      <div class="col">
        <h2>Header 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

    <div class="Navigation">
      <h4>Navigation</h4>
      <TheCryptoMenu/>
    </div>

    <div class="row tags-zoom">
      <div class="col tags">
        <h4>Tags </h4>
        <AppTags/>
      </div>
      <div class="col">
        <h4>Zoom </h4>
      </div>
    </div>

    <div class="col-4">
      <SearchCrypto/>
    </div>

    <div>
      <AppInput class="col-4"/>
    </div>

    <div class="links">
      <h4>Links</h4>
      <p>Lorem ipsum dolor sit <a href="#">amet</a>, consectetur adipisicing elit, sed do eiusmod
      tempor <a href="#">incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div class="tables">
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
    </div>
  </div>
</template>

<script>
  import AppButton from './AppButton';
  import TheCryptoMenu from './TheCryptoMenu';
  import AppTags from './AppTags';
  import SearchCrypto from './SearchCrypto';
  import AppInput from './AppInput';
  import AppTable from './AppTable';

  export default {
    name: 'UiPage',
    components: {
      AppButton,
      TheCryptoMenu,
      AppTags,
      SearchCrypto,
      AppInput,
      AppTable
    },
    data () {
      return {
        tableData: {
          data: [
            { icon: 'https://img.icons8.com/offices/16/000000/bitcoin.png', name: 'Titcoin', market: '191,023,476,496.00', price: '11 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 6.39 },
            { icon: 'https://img.icons8.com/offices/16/000000/bitcoin.png', name: 'Litcoin', market: '181,023,476,496.00', price: '1 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 3.39 },
            { icon: 'https://img.icons8.com/offices/16/000000/bitcoin.png', name: 'Bitcoin', market: '191,023,476,496.00', price: '11 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 6.39 },
            { icon: 'https://img.icons8.com/offices/16/000000/bitcoin.png', name: 'Litcoin', market: '181,023,476,496.00', price: '1 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 3.39 },
            { icon: 'https://img.icons8.com/offices/16/000000/bitcoin.png', name: 'Bitcoin', market: '191,023,476,496.00', price: '11 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 6.39 },
            { icon: 'https://img.icons8.com/offices/16/000000/bitcoin.png', name: 'Litcoin', market: '181,023,476,496.00', price: '1 301,10', volume: '6,250,120,000.00', hour: -0.2, day: -1.46, seven_days: 3.39 }
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

<style scoped>
  .Navigation,
  .tags-zoom,
  .links {
    padding: 30px 0;
  }
  .tags {
    display: flex;
  }
  .blocks {
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
  }
  .block {
    width: 100px;
    height: 100px;
    margin-right: 5px;
    margin-top: 5px;
  }
  .block__hex {
    font-size: 1.125rem;
    margin: 0;
  }
  .block__rbg {
    font-size: .75rem;
    opacity: .5;
  }
  .blue {
    background-color: var(--blue-color);
  }
  .black {
    background-color: var(--black-color);
  }
  .light-gray {
    background-color: var(--light-gray-color);
  }
  .dark-gray {
    background-color: var(--dark-gray-color);
  }
  .red {
    background-color: var(--red-color);
  }
  .green {
    background-color: var(--green-color);
  }
  .btn {
    margin: 15px 0;
  }
</style>