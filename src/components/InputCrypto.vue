<template>
  <multiselect 
    v-model="value" 
    :options="options" 
    :custom-label="nameWithLang" 
    placeholder="Search" 
    label="name" 
    track-by="name">
    <template slot="option" slot-scope="props">
      <img 
        :src="'img/' + props.option.icon"
        class="multiselect__element__icon"> 
      <span class="multiselect__element__short">{{ props.option.short }}</span>
      <span>{{ props.option.name }}</span>
    </template>
  </multiselect>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    name: 'InputCrypto',
    components: {
      Multiselect
    },
    data () {
      return {
        options: [
          { icon: 'bitcoin.png', short: 'BTC', name: 'Bitcoin' },
          { icon: 'ethereum.png', short: 'ETH', name: 'Ethereum' },
          { icon: 'monero.png', short: 'HMR', name: 'Monero' },
          { icon: 'ripple.png', short: 'XMR', name: 'Ripple' },
          { icon: 'bitcoin.png', short: 'BTC', name: 'Bitcoin' }
        ]
      }
    },
    methods: {
      nameWithLang ({ name }) {
        return `${name}`
      }
    }
  };
</script>

<style>
  .multiselect {
    position: relative;
  }
  .multiselect__input {
    padding: 0 24px;
    height: 50px;
    width: 100%;
    border-radius: 100px;
    border: solid 2px #efefef;
    font-size: 15px;
    transition: .3s all ease;
    color: var(--dark-gray-color);
    outline: 0;
  }
  .multiselect__input::-webkit-input-placeholder {
    opacity: .7;
  }
  .multiselect__input::-moz-placeholder {
    opacity: .7;
  }
  .multiselect__input:-moz-placeholder {
    opacity: .7;
  }
  .multiselect__input:-ms-input-placeholder {
    opacity: .7;
  }
  .multiselect__input:focus {
    border-color: #80bdff;
  }
  .multiselect__content {
    position: absolute;
    background-color: #fff;
    color: var(--dark-gray-color);
    padding: 8px 0;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
    z-index: 100;
    width: 100%;
  }
  .multiselect__element {
    list-style: none;
    padding: 10px 0 10px 24px;
    &:hover {
      background-color: var(--light-color);
      cursor: pointer;
    }
  }
  .multiselect__element__short {
    margin-right: 18px;
    color: var(--light-gray-color);
  }
  .multiselect__element__icon {
    vertical-align: top;
    margin-right: 8px;
  }
</style>