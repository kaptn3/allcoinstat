<template>
  <div class="Modals">
    <a href="javascript:void(0)" @click="open('mobileMenu')"><img src="../assets/ui-img/menu.svg"></a>
    <transition name="fade" mode="out-in">
      <!-- mobile menu -->
      <ModalsTemplate
        v-if="modalName === 'mobileMenu'"
        key="modal4"
        @close="close">
        <div slot="header" class="header__logo">
          <a href="/"><img src="../assets/img/logo.svg"></a> 
        </div> 
        <div slot="main" class="modal__main">
          <div class="modal__main__menu" @click="close">
            <TheTopMenu/>
          </div>
          <ModalSign class="modal__mobile-login"/>
        </div>
      </ModalsTemplate>
    </transition>
  </div>
</template>

<script>
  import { toggle } from './mixins/toggle';
  import ModalsTemplate from './ModalsTemplate';
  import AppInput from './AppInput';
  import AppButton from './AppButton';
  import TheTopMenu from './TheTopMenu';
  import ModalSign from './ModalSign';

  export default {
    name: 'ModalMobileMenu',
    components: {
      ModalsTemplate,
      AppInput,
      AppButton,
      TheTopMenu,
      ModalSign
    },
    mixins: [toggle],
    props: {
      name: {
        type: String,
        default: 'none'
      }
    },
    computed: {
      checkPasswords () {
        let form = document.querySelector('.sign-up__form');
        let inputs = form.querySelectorAll('input[type=password]');
        if (inputs[0] === inputs[1]) {
          return true;
        } else {
          return false;
        }
      }
    }
  };
</script>

<style scoped>
  .Modals {
    width: auto;
  }
  .header__logo {
    text-align: center;
  }
  .header__logo > a {
    display: inline-block;
  }
  .modal__main__menu {
    width: 100%;
  }
</style>