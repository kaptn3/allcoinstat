<template>
  <div class="Modals">
    <AppButton 
      v-if="name === 'addCoin'" 
      text="+ Add Coin" 
      class="btn" 
      @click="open(name)"/>
    <div v-else>
      <a href="javascript:void(0)" @click="open('login')">sign in</a> / <a href="javascript:void(0)" @click="open('sign')">sign up</a>
    </div>
    <transition name="fade" mode="out-in">
      <ModalsTemplate 
        v-if="modalName === 'login'" 
        key="modal1" 
        @close="close">
        <h3 slot="header">Sign in</h3>
        <div slot="main">
          <form>
            <div class="modal__main">
              <AppButton class="btn btn_red btn__sign" text="Login with Google"/>
              <AppButton class="btn btn_blue btn__sign" text="Login with Facebook"/>
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
              <AppButton class="btn btn_light-blue btn__sign" text="Sign in"/>
            </div>
          </form>
          <footer class="modal__footer">
            <a href="#">Forgot you password</a>
            <p>Do not have an account? <a href="javascript:void(0)" @click="open('sign')">Create now</a></p> 
          </footer>  
        </div>
      </ModalsTemplate>
      <ModalsTemplate 
        v-else-if="modalName === 'sign'" 
        key="modal2" 
        @close="close">
        <h3 slot="header">Sign up</h3>
        <div slot="main">
          <form>
            <div class="modal__main">
              <AppButton class="btn btn_red btn__sign" text="Sign up with Google"/>
              <AppButton class="btn btn_blue btn__sign" text="Sign up with Facebook"/>
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
              <AppButton class="btn btn_light-blue btn__sign" text="Sign up"/>
            </div>
          </form>
        </div>
      </ModalsTemplate>
      <ModalsTemplate 
        v-else-if="modalName === 'addCoin'" 
        key="modal3" 
        @close="close">
        <h3 slot="header">Choose coin and add to the watchlist</h3>
        <form slot="main">
          <div class="modal__main modal__main_whathlist">        
            <div class="modal__main__input">
              <AppInput/>  
            </div>
            <AppButton class="btn" text="Add coin"/>
          </div>
        </form>
      </ModalsTemplate>
    </transition>
  </div>
</template>

<script>
  import { toggle } from './mixins/toggle';
  import ModalsTemplate from './ModalsTemplate';
  import AppInput from './AppInput';
  import AppButton from './AppButton';

  export default {
    name: 'Modal',
    components: {
      ModalsTemplate,
      AppInput,
      AppButton
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
  .modal__or {
    overflow: hidden;
    text-align: center;
    color: #9b9b9b;
    font-size: 1rem;
    font-weight: 300;
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
      opacity: .4px;
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
</style>