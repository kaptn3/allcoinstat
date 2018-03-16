<template>
  <button @click="$emit('click')">{{ text }}</button>
</template>

<script>
  export default {
    name: 'AppButton',
    props: {
      text: {
        type: String,
        default: 'Кнопка'
      }
    }
  }
</script>

<style scoped>
  .btn {
    text-decoration: none;
    color: #fff;
    width: 200px;
    height: 50px;
    font-size: calc((15 / 16) * 1rem);
    font-weight: 500;
    border-radius: 100px;
    transition: .3s all ease;
    background-color: var(--blue-color);
    line-height: 0;
    &:hover {
      opacity: .8;
      color: #fff;
    }
  }
  .btn_red {
    background-color: #e0523b;
  }
  .btn_blue {
    background-color: #3968b5;
  }
  .btn_light-blue,
  .btn_red,
  .btn_blue {
    width: 100%;
  }
  .btn-add,
  .btn-view {
    color: var(--dark-gray-color);
    background-color: #fff;
    border: solid 2px var(--light-color);
  }
  .btn-view {
    border-radius: 6px;
    max-width: 160px;
  }
  .btn-add:hover,
  .btn-view:hover {
    opacity: 1;
    color: var(--blue-color);
  }
  .disabled {
    cursor: default;
    pointer-events: none;
    opacity: .5;
  }
</style>