<template>
  <div class="AppTable">
    <div class="table-main">
      <table>
        <thead>
          <tr>
            <th class="num">№</th>
            <th class="icon"/>
            <th class="name">Name</th>
            <th class="market-cap">Market Cap</th>
            <th class="price">Price</th>
            <th class="volume-24h">Volume (24h)</th>
            <th class="p-1h">% 1h</th>
            <th class="p-24h">% 24h</th>
            <th class="p-7h">% 7d</th>
            <th class="sale">Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="num">1</td>
            <td class="icon"><img src="img/bitcoin.png" alt="Bitcoin"></td>
            <td class="name"><a href="#">Bitcoin</a></td>
            <td class="market-cap">$191,023,476,496.00</td>
            <td class="price">11 301,10</td>
            <td class="volume-24h">$6,250,120,000.00</td>
            <td class="percent p-1h">- 0.2 %</td>
            <td class="percent p-24h">- 1.46 %</td>
            <td class="percent p-7h">+ 6.39 %</td>
            <td class="sale">buy</td>
          </tr>
          <tr>
            <td class="num">1</td>
            <td class="icon"><img src="img/bitcoin.png" alt="Bitcoin"></td>
            <td class="name"><a href="#">Bitcoin</a></td>
            <td class="market-cap">$191,023,476,496.00</td>
            <td class="price">11 301,10</td>
            <td class="volume-24h">$6,250,120,000.00</td>
            <td class="percent p-1h">- 0.2 %</td>
            <td class="percent p-24h">- 1.46 %</td>
            <td class="percent p-7h">+ 6.39 %</td>
            <td class="sale">buy</td>
          </tr>
        </tbody>
      </table>
      <!--div class="table-main-row th-row">
        <div class="table-main-row-th num">№</div>
        <div class="table-main-row-th icon"/>
        <div class="table-main-row-th name">Name</div>
        <div class="table-main-row-th market-cap" data-sort="market-cap">Market Cap</div>
        <div class="table-main-row-th price" data-sort="price">Price</div>
        <div class="table-main-row-th volume-24h" data-sort="volume">Volume (24h)</div>
        <div class="table-main-row-th p-1h" data-sort="p1h">% 1h</div>
        <div class="table-main-row-th p-24h" data-sort="p24h">% 24h</div>
        <div class="table-main-row-th p-7h" data-sort="p7d">% 7d</div>
        <div class="table-main-row-th sale">Sale</div>
      </div>

      <div class="table-main-row data-row" onclick="mainTableClick(this);">
        <div class="table-main-row-td num fl">1</div>
        <div class="table-main-row-td icon"><img src="img/bitcoin.png" alt="Bitcoin"></div>
        <div class="table-main-row-td name"><a href="https://allcoinstat.com/en/currency/bitcoin">Bitcoin</a></div>
        <div class="table-main-row-td market-cap 1">$191,023,476,496.00</div>
        <div class="table-main-row-td price 1">11 301,10</div>
        <div class="table-main-row-td volume-24h">$6,250,120,000.00</div>
        <div class="table-main-row-td p-1h 1"><span class="p-minus">- 0.2 %</span></div>
        <div class="table-main-row-td p-24h 1"><span class="p-minus">- 1.46 %</span></div>
        <div class="table-main-row-td p-7h 1"><span class="p-plus">+ 6.39 %</span></div>
        <div class="table-main-row-td sale">buy</div>
      </div-->
    </div>    
    <AppButton class="btn btn-view">View more</AppButton>
  </div>
</template>

<script>
  import AppButton from './AppButton';
  import tableScript from '../assets/js/table';

  export default {
    name: 'AppTable',
    components: {
      AppButton
    }
  }
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
td {
  padding: 16px 0;
  font-weight: 500;
  color: var(--dark-gray-color);
}
td,
th {
  border-bottom: 1px solid var(--border-gray);
  text-align: right;
  transition: .3s all ease;
}
th {
  padding: 12px 0 16px;
  font-weight: bold;
  border-top: 4px solid transparent;
  &:hover {
    border-top-color: var(--blue-color);
  }
}
.price {
  font-weight: bold;
}
td.price {
  color: var(--blue-color);
}
.name {
  text-align: left;
}
.num,
.icon {
  text-align: center;
}
.icon {
  padding-left: 10px;
  padding-right: 10px;
}
.icon > img {
  vertical-align: top;
}
.td-hover,
th:hover,
tbody tr:hover {
  background: var(--hover-table-tr);
}

.AppTable {
  margin-bottom: 30px;
}
.table-main {
  display: table;
  width: 100%;
}
.table-main-row {
  display: table-row;
}
.table-main-row-th {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
  font-size: 16px;
  color: #000;
  border-bottom: 1px solid #d8d8d8;
  border-top: 4px solid #fff;
  padding: 15px 0;
}
.table-main-row-th.hover,
.table-main-row-th.sort {
  background: #f8f8fb;
  border-top: 4px solid #388dfe;
}
.table-main-row-th.num {
  width: 30px;
}
.table-main-row-th.icon {
  width: 44px;
}
.table-main-row-th.name {
  text-align: left;
}
.table-main-row-th.market-cap {
  width: 140px;
  cursor: pointer;
}
.table-main-row-th.price {
  width: 120px;
  cursor: pointer;
}
.table-main-row-th.volume-24h {
  width: 120px;
  cursor: pointer;
}
.table-main-row-th.p-1h,
.table-main-row-th.p-24h,
.table-main-row-th.p-7h {
  width: 110px;
  text-align: center;
  cursor: pointer;
}
.table-main-row-th.sale {
  width: 90px;
}
.table-main-row-td {
  display: table-cell;
  vertical-align: middle;
  font-weight: 500;
  font-size: 15px;
  color: #000;
  border-bottom: 1px solid #d8d8d8;
  padding: 15px 0;
}
.table-main-row-td.hover,
.table-main-row-td.sort {
  background: #f8f8fb;
}
.table-main-row-td.num {
  text-align: center;
  color: #a8b2b9;
}
.table-main-row-td.num.fl {
  color: #000;
}
.table-main-row-td.price {
  text-align: center;
  color: #388dfe;
}
.table-main-row-td.name a {
  color: #000;
  text-decoration: none;
}
.table-main-row-td.market-cap,
.table-main-row-td.volume-24h {
  color: #404040;
}
.table-main-row-td.p-1h,
.table-main-row-td.p-24h,
.table-main-row-td.p-7h {
  text-align: center;
  white-space: pre;
}
.table-main-row-td.p-1h .p-plus,
.table-main-row-td.p-24h .p-plus,
.table-main-row-td.p-7h .p-plus {
  color: #20dc86;
}
.table-main-row-td.p-1h .p-minus,
.table-main-row-td.p-24h .p-minus,
.table-main-row-td.p-7h .p-minus {
  color: #f55;
}
.table-main-row-td.sale {
  text-align: center;
}
@media (max-width: 510px) {
  .p-24h,
  .p-7h {
    display: none;
  }
}
@media (max-width: 730px) {
  .volume-24h {
    display: none;
  }
}
@media (max-width: 890px) {
  .market-cap {
    display: none;
  }
}
.btn-view {
  margin: 10px auto;
}
</style>