<template>
  <div class="AppTags">
    <a v-for="(value, key) in tags" :key="key" class="tag" href="value.link">#{{ key }}</a>
  </div>
</template>

<script>
  export default {
    name: 'AppTags',
    props: {
      tags: {
        type: Object,
        default: null
      }
    }
  };
</script>

<style scoped>
  .tag,
  .tag:visited {
    font-weight: bold;
    transition: .3s all ease;
    padding: 6px 10px;
    border-radius: 100px;
    color: var(--blue-color);
    border: 1px solid var(--blue-color);
    display: inline-block;
    margin-right: 10px;
  }
  .tag:hover,
  .tag:focus {
    color: #fff;
    background-color: var(--blue-color);
  }
</style>