<template>
  <button @click="onClick || $emit('click')">
    <slot>Button</slot>
  </button>
</template>

<script>
  export default {
    name: 'AppButton',
    props: {
      onClick: {
        type: Function,
        default: null
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
    display: block;
    &:hover,
    &:focus {
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
    width: 160px;
  }
  .btn-add,
  .btn-view {
    &:hover,
    &:focus {
      opacity: 1;
      color: var(--blue-color);
    }
  }
  .disabled {
    cursor: default;
    pointer-events: none;
    opacity: .5;
  }
  @media (max-width: 767.99px) {
    .btn,
    .btn-view {
      width: 100%;
    }
  }
</style>