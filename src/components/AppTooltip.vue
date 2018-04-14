<template>
  <div v-on-clickaway="hide" class="AppTooltip">
    <a @click="show(idTooltip)">
      <slot name="link">Open</slot>
    </a>
    <transition name="fade">
      <div v-if="tooltip" class="tooltip-content">
        <slot name="content">
          Tooltip
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import { toggle } from './mixins/toggle';
  import { mixin as clickaway } from 'vue-clickaway';

  export default {
    name: 'AppTooltip',
    mixins: [ toggle, clickaway ],
    props: {
      idTooltip: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style scoped>
a {
  display: inline-block;
}
.AppTooltip {
  position: relative;
}
.tooltip-content {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.2);
  padding: 14px;
  bottom: 32px;
  &::after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-top-color: #fff;
    border-width: 10px;
    margin-left: -10px;
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
</style>