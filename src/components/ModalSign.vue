<template>
  <div class="Sign">
    <a href="javascript:void(0)" @click="open('login')">sign in</a> / <a href="javascript:void(0)" @click="open('sign')">sign up</a>
    <transition name="fade" mode="out-in">
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
                placeholder="Email address"
                required/>
              <AppInput 
                type="password" 
                name="password" 
                class="form-input" 
                placeholder="Password"
                required/>
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
          <form class="sign-up__form">
            <div class="modal__main">
              <AppButton class="btn btn_red btn__sign">Sign up with Google</AppButton>
              <AppButton class="btn btn_blue btn__sign">Sign up with Facebook</AppButton>
              <p class="modal__or">or</p>
              <AppInput 
                type="email" 
                name="email" 
                class="form-input" 
                placeholder="Email address"
                required/>
              <AppInput 
                type="password" 
                name="password" 
                class="form-input" 
                placeholder="Password"
                required/>
              <AppInput 
                type="password" 
                name="password" 
                class="form-input" 
                placeholder="Password again"
                required
                @blur="checkPasswords"/>
              <AppButton class="btn btn_light-blue btn__sign">Sign up</AppButton>
            </div>
          </form>
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

  export default {
    name: 'Modals',
    components: {
      ModalsTemplate,
      AppInput,
      AppButton
    },
    mixins: [toggle]
  }
</script>

<style scoped>
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
  .btn_light-blue {
    margin-top: 6px;
  }
  .btn__sign,
  .form-input {
    margin-bottom: 10px;
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