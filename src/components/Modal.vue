<template>
  <div>
    <button @click="open(login)">{{ login }}</button>
    <transition name="modal" mode="out-in">
      <ModalTemp v-if="modalName === 'login'" key="modal1" @close="close">
        <h3 slot="header">Sign in</h3>
        <form slot="main">
          <div class="modal__main">
            <div class="modal__signup-api">
              <ButtonApp class="btn btn_red" text="Login with Google"/>
              <ButtonApp class="btn btn_blue" text="Login with Facebook"/>
            </div>
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
        <footer slot="footer" class="modal__footer">
          <a href="#">Forgot you password</a>
          <p>Do not have an account? <a href="#" @click="open('sign')">Create now</a></p> 
        </footer>  
      </ModalTemp>
      <ModalTemp v-if="modalName === 'sign'" key="modal2" @close="close">
        <div slot="header"><h1>Второй</h1></div>
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
    font-size: 16px;
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
  .btn_blue,
  .btn_red,
  .btn_light-blue,
  .form-input {
    max-width: 100%;
  }
  .open-modal {
    overflow: hidden;
  }
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .modal__footer {
    display: flex;
    justify-content: space-between;
    color: #333;
    margin-top: 50px;
    margin-bottom: 50px;
    a,
    p {
      font-size: 12px;
      margin: 0;
      line-height: 1.5;
      a {
        color: #388dfe;
        text-decoration: none;
      }
    }
  }
</style>