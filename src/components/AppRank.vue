<template>
  <span class="AppRank">
    <slot>-</slot> Rank
  </span>
</template>

<script>
  export default {
    name: 'AppRank'
  }
</script>

<style scoped>
  .AppRank {
    margin-left: 10px;
    font-weight: 500;
    text-align: center;
    padding: 6px 15px;
    border-radius: 100px;
    border: solid 2px var(--light-color);
  }
</style>