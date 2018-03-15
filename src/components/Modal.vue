<template>
  <div>
    <button @click="open(login)">{{ login }}</button>
    <transition name="fade" mode="out-in">
      <ModalTemp v-if="modalName === 'login'" key="modal1" @close="close">
        <h3 slot="header">Sign in</h3>
        <div slot="main">
          <form>
            <div class="modal__main">
              <ButtonApp class="btn btn_red" text="Login with Google"/>
              <ButtonApp class="btn btn_blue" text="Login with Facebook"/>
              <p class="modal__or">or</p>
              <InputForm 
                type="email" 
                name="email" 
                class="form-input" 
                placeholder="Email address"/>
              <InputForm 
                type="password" 
                name="password" 
                class="form-input" 
                placeholder="Password"/>
              <ButtonApp class="btn btn_light-blue" text="Sign in"/>
            </div>
          </form>
          <footer class="modal__footer">
            <a href="#">Forgot you password</a>
            <p>Do not have an account? <a href="#" @click="open('sign')">Create now</a></p> 
          </footer>  
        </div>
      </ModalTemp>
      <ModalTemp v-if="modalName === 'sign'" key="modal2" @close="close">
        <h3 slot="header">Sign up</h3>
        <div slot="main">
          <form>
            <div class="modal__main">
              <ButtonApp class="btn btn_red" text="Sign up with Google"/>
              <ButtonApp class="btn btn_blue" text="Sign up with Facebook"/>
              <p class="modal__or">or</p>
              <InputForm 
                type="email" 
                name="email" 
                class="form-input" 
                placeholder="Email address"/>
              <InputForm 
                type="password" 
                name="password" 
                class="form-input" 
                placeholder="Password"/>
              <InputForm 
                type="password" 
                name="password" 
                class="form-input" 
                placeholder="Password again"/>
              <ButtonApp class="btn btn_light-blue" text="Sign up"/>
            </div>
          </form>
        </div>
      </ModalTemp>
    </transition>
  </div>
</template>


<script>
  import { toggle } from './mixins/toggle';
  import ModalTemp from './ModalTemp';
  import InputForm from './InputForm';
  import ButtonApp from './ButtonApp';

  export default {
    name: 'Modal',
    components: {
      ModalTemp,
      InputForm,
      ButtonApp
    },
    mixins: [toggle],
    props: {
      login: {
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
    margin-top: 50px;
    margin-bottom: 50px;
  }
  a {
    color: #388dfe;
  }
  a,
  p {
    font-size: calc((12 / 16) * 1rem);
    margin: 0;
    line-height: 1.5;
  }
</style>