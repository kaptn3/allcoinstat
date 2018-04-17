<template>
  <div class="add-coin">
    <AppButton
      class="btn" 
      @click="open(name);">+ Add Coin</AppButton>
    <transition name="fade" mode="out-in">
      <ModalsTemplate 
        v-if="modalName === 'addCoin'" 
        key="modal3"
        class="add-coin"
        @close="close();resetButton();">
        <h3 slot="header">Choose coin and add to the watchlist</h3>
        <div slot="main" class="modal__main">      
          <SearchCrypto class="modal__main__input" required @get="getValue"/>
          <AppButton :style="{ background: 'var(--' + button.color + '-color)' }" class="btn btn__add-coin" @click="addCoin">
            <img v-if="button.success" class="btn__tick" src="/assets/ui-img/tick.svg">
            <span v-else class="btn-text">+ Add coin</span>
          </AppButton>
        </div>
      </ModalsTemplate>
    </transition>
  </div>
</template>

<script>
  import { toggle } from './mixins/toggle';
  import ModalsTemplate from './ModalsTemplate';
  import AppInput from './AppInput';
  import SearchCrypto from './SearchCrypto';
  import AppButton from './AppButton';

  export default {
    name: 'Modals',
    components: {
      ModalsTemplate,
      AppInput,
      AppButton,
      SearchCrypto
    },
    mixins: [toggle],
    data () {
      return {
        name: 'addCoin',
        value: null,
        button: {
          success: false,
          color: 'blue'
        }
      }
    },
    methods: {
      addCoin () {
        if (this.value) {
          this.button.success = true;
          this.button.color = 'green';
        }
      },
      resetButton () {
        this.value = null;
        this.button.success = false;
        this.button.color = 'blue';
      },
      getValue (newValue) {
        if (newValue === 'focus') {
          this.resetButton();
        } else {
          this.value = newValue;
        }
      }
    }
  };
</script>

<style scoped>
  @media (max-width: 767.99px) {
    .addCoin {
      width: 100%;
    }
  }
  .green-btn {
    background-color: var(--green-color);
  }
  .btn__tick {
    height: 60%;
  }
</style>