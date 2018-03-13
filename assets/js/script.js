Vue.component('row', {
  template: `<div class="table-main-row data-row" onclick="mainTableClick(this);">
        <div class="table-main-row-td num fl">1</div>
        <div class="table-main-row-td icon"><img src="img/bitcoin.png" alt="Bitcoin"></div>
        <div class="table-main-row-td name"><a href="https://allcoinstat.com/en/currency/bitcoin">Bitcoin</a></div>
        <div class="table-main-row-td market-cap 1">$191,023,476,496.00</div>
        <div class="table-main-row-td price 1">       11 301,10         
          </div>
        <div class="table-main-row-td volume-24h">$6,250,120,000.00</div>
        <div class="table-main-row-td p-1h 1"><span class="p-minus">- 0.2 %</span></div>
        <div class="table-main-row-td p-24h 1"><span class="p-minus">- 1.46 %</span></div>
        <div class="table-main-row-td p-7h 1"><span class="p-plus">+ 6.39 %</span></div>
        <div class="table-main-row-td sale">buy</div>
      </div>`
});

Vue.component('modal', {
  template: '#modal-template'
});

// select
Vue.component('v-select', VueSelect.VueSelect);

new Vue({
  el: '#app',
  data: {
    showModal: '',
    crypt: [],
    options: [
      {
        title: 'Read',
        short: 'RE'
      },
      {
        title: 'Fear',
        short: 'FE'
      }
    ]
  },
  methods: {
    open: function (name) {
      document.body.classList.add('open-modal');
      this.showModal = name;
    },
    close: function () {
      document.body.classList.remove('open-modal');
      this.showModal = '';
    }
  }
});


