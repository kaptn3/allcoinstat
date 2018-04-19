<template>
  <v-popover 
    :open="isOpen"
    offset="16">
    <a @click="isOpen = true">{{ current }}</a>
    <template v-if="isOpen" slot="popover">
      <ul class="currencies-list">
        <li><a @click="change(0)">USD</a></li>
        <li><a @click="change(1)">BTC</a></li>
      </ul>
    </template>
  </v-popover>
</template>

<script>
  export default {
    name: 'ChooseCurrency',
    data () {
      return {
        current: 'USD',
        isOpen: false
      }
    },
    methods: {
      change (value) {
        switch(value) {
          case 0:
            this.current = 'USD';
            break;
          case 1:
            this.current = 'BTC';
            break;
          default: 
            this.current = 'USD';
            break;
        }
        this.isOpen = false;
      }
    }
  };
</script>

<style scoped>
  a {
    color: var(--blue-color);
  }
  .currencies-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>