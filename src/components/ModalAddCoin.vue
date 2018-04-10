<template>
  <div class="add-coin">
    <AppButton
      class="btn" 
      @click="open(name)">+ Add Coin</AppButton>
    <transition name="fade" mode="out-in">
      <ModalsTemplate 
        v-if="modalName === 'addCoin'" 
        key="modal3"
        class="add-coin"
        @close="close">
        <h3 slot="header">Choose coin and add to the watchlist</h3>
        <div slot="main" class="modal__main">      
          <InputCrypto class="modal__main__input" required/>
          <AppButton class="btn btn__add-coin" @click="success"><span class="btn-text">+ Add coin</span></AppButton>
        </div>
      </ModalsTemplate>
    </transition>
  </div>
</template>

<script>
  import { toggle } from './mixins/toggle';
  import ModalsTemplate from './ModalsTemplate';
  import AppInput from './AppInput';
  import InputCrypto from './InputCrypto';
  import AppButton from './AppButton';

  export default {
    name: 'Modals',
    components: {
      ModalsTemplate,
      AppInput,
      AppButton,
      InputCrypto
    },
    mixins: [toggle],
    data () {
      return {
        name: 'addCoin'
      }
    },
    methods: {
      success () {
        let button = document.querySelector('.btn__add-coin');
        document.querySelector('.btn-text').remove();
        button.style.background = 'var(--green-color)';
        let tick = document.createElement('img');
        tick.src = '/assets/ui-img/tick.svg';
        tick.style.height = '60%';
        button.appendChild(tick);
      },
    }
  };
</script>

<style scoped>
  @media (max-width: 767.99px) {
    .addCoin {
      width: 100%;
    }
  }
</style>