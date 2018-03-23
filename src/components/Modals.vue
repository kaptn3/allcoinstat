<template>
  <div :class="name" class="Modals">
    <AppButton 
      v-if="name === 'addCoin'" 
      class="btn" 
      @click="open(name)">+ Add Coin</AppButton>
    <a v-else-if="name === 'mobileMenu'" href="javascript:void(0)" @click="open('mobileMenu')"><img src="../assets/ui-img/menu.svg"></a>
    <div v-else>
      <a href="javascript:void(0)" @click="open('login')">sign in</a> / <a href="javascript:void(0)" @click="open('sign')">sign up</a>
    </div>
    <transition name="fade" mode="out-in">
      <!-- login -->
      <ModalsTemplate 
        v-if="modalName === 'login'" 
        key="modal1" 
        @close="close">
        <h3 slot="header">Sign in</h3>
        <div slot="main">
          <form>
            <div class="modal__main">
              <AppButton class="btn btn_red btn__sign">Login with Google</AppButton>
              <AppButton class="btn btn_blue btn__sign">Login with Facebook</AppButton>
              <p class="modal__or">or</p>
              <AppInput 
                type="email" 
                name="email" 
                class="form-input" 
                placeholder="Email address"/>
              <AppInput 
                type="password" 
                name="password" 
                class="form-input" 
                placeholder="Password"/>
              <AppButton class="btn btn_light-blue btn__sign">Sign in</AppButton>
            </div>
          </form>
          <footer class="modal__footer">
            <a href="#">Forgot you password</a>
            <p>Do not have an account? <a href="javascript:void(0)" @click="open('sign')">Create now</a></p> 
          </footer>  
        </div>
      </ModalsTemplate>
      <!-- sign -->
      <ModalsTemplate 
        v-else-if="modalName === 'sign'" 
        key="modal2" 
        @close="close">
        <h3 slot="header">Sign up</h3>
        <div slot="main">
          <form>
            <div class="modal__main">
              <AppButton class="btn btn_red btn__sign">Sign up with Google</AppButton>
              <AppButton class="btn btn_blue btn__sign">Sign up with Facebook</AppButton>
              <p class="modal__or">or</p>
              <AppInput 
                type="email" 
                name="email" 
                class="form-input" 
                placeholder="Email address"/>
              <AppInput 
                type="password" 
                name="password" 
                class="form-input" 
                placeholder="Password"/>
              <AppInput 
                type="password" 
                name="password" 
                class="form-input" 
                placeholder="Password again"/>
              <AppButton class="btn btn_light-blue btn__sign">Sign up</AppButton>
            </div>
          </form>
        </div>
      </ModalsTemplate>
      <!-- mobile menu -->
      <ModalsTemplate
        v-else-if="modalName === 'mobileMenu'"
        key="modal4"
        @close="close">
        <div slot="header" class="header__logo">
          <a href="/"><img src="../assets/img/logo.svg"></a> 
        </div> 
        <div slot="main" class="modal__main">
          <TheTopMenu/>
          <Modals name="login" class="modal__mobile-login"/>
        </div>
      </ModalsTemplate>
      <!-- add coin -->
      <ModalsTemplate 
        v-else-if="modalName === 'addCoin'" 
        key="modal3"
        class="add-coin"
        @close="close">
        <h3 slot="header">Choose coin and add to the watchlist</h3>
        <div slot="main" class="modal__main">        
          <InputCrypto class="modal__main__input"/>
          <AppButton class="btn">+ Add coin</AppButton>
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
  import TheTopMenu from './TheTopMenu';

  export default {
    name: 'Modals',
    components: {
      ModalsTemplate,
      AppInput,
      AppButton,
      InputCrypto,
      TheTopMenu
    },
    mixins: [toggle],
    props: {
      name: {
        type: String,
        default: 'none'
      }
    }
  };
</script>

<style scoped>
  .Modals {
    width: auto;
  }
  @media (max-width: 767.99px) {
    .addCoin {
      width: 100%;
    }
  }
  .modal__main {
    display: flex;
    flex-wrap: wrap;
  }
  .modal__or {
    overflow: hidden;
    text-align: center;
    color: #9b9b9b;
    font-size: 1rem;
    font-weight: 300;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .modal__or {
    &::after,
    &::before {
      content: '';
      position: relative;
      display: inline-block;
      width: 50%;
      height: 1px;
      vertical-align: middle;
      background-clip: content-box;
      background-color: #d8d8d8;
      opacity: .4;
    }
    &::before {
      left: -.5em;
      margin: 0 0 0 -50%;
    }
    &::after {
      left: .5em;
      margin: 0 -50% 0 0;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .modal__footer {
    display: flex;
    justify-content: space-between;
    color: #333;
    margin-top: 40px;
    margin-bottom: 0;
  }
  .modal__footer > a {
    color: #388dfe;
  }
  .modal__footer > a,
  .modal__footer > p {
    font-size: calc((12 / 16) * 1rem);
    margin: 0;
    line-height: 1.5;
  }
  .btn__sign,
  .form-input {
    margin-bottom: 10px;
  }
  .modal__main__input {
    margin-right: 20px;
    max-width: 100%;
    flex-grow: 1;
  }
  @media (max-width: 767.99px) {
    .modal__main__input {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }  
  .header__logo {
    text-align: center;
  }
  .header__logo > a {
    display: inline-block;
  }
  .modal__mobile-login {
    margin: 20px auto 0 auto;
    font-weight: bold;
    color: var(--blue-color);
  }
</style>