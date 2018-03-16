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
  position: fixed;
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
  max-width: 450px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  position: relative;
  border-radius: 10px;
  padding: 28px 40px;
}
.modal__header {
  margin-bottom: 28px;
}  
.modal__close {
  position: absolute;
  right: 20px;
  top: 20px;
  display: block;
  height: 15px;
  width: 15px;
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
  }
  .modal__footer {
    flex-direction: column;
    align-items: center;
  }
  .modal__close {
    top: 23px;
    right: 23px;
  }
  .modal__container {
    box-shadow: none;
    padding: 28px 20px;
    border-radius: 0;
  }
}
</style>