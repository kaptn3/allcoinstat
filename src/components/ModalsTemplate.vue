<template>
  <div class="modal">
    <div class="modal__wrapper" @click.self="$emit('close')">
      <div class="modal__container">
        <span class="modal__close" @click="$emit('close')"><img src="../assets/ui-img/close.svg"></span>
        <header class="modal__header">
          <slot name="header">
            <h1>Form</h1>
          </slot>
        </header>        
        <slot name="main"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalsTemplate'
  }
</script>

<style scoped>
.modal {
  position: absolute;
  z-index: 889;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  transition: opacity .3s ease;
}
.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.modal__container {
  width: 450px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  position: relative;
  border-radius: 10px;
  padding: 28px 40px;
}
.add-coin .modal__container {
  width: 600px;
  margin-bottom: auto;
  margin-top: auto;
}
.modal__header {
  margin-bottom: 28px;
}  
.modal__close {
  position: absolute;
  right: 25px;
  top: 25px;
  display: block;
  height: 20px;
  width: 20px;
  cursor: pointer;
}
@media (max-height: 600px) {
  .modal__wrapper {
    align-items: flex-start;
  }
}
@media (max-width: 767.99px) {
  .modal__wrapper {
    align-items: flex-start;
    background-color: #fff;
  }
  .modal__footer {
    flex-direction: column;
    align-items: center;
  }
  .modal__close {
    top: 23px;
    right: 23px;
  }
  .modal__container,
  .add-coin .modal__container {
    box-shadow: none;
    padding: 28px 20px;
    border-radius: 0;
  }
}
.modal__main {
  display: flex;
  flex-wrap: wrap;
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
</style>