<template>
  <div class="top-header">
    <h1>CryptoCurrency Market</h1>
  </div>
</template>

<script>
  export default {
    name: 'TopHeader'
  }
</script>

<style scoped>
  .top-header {
    border-top: 2px solid var(--light-color);
    text-align: center;
    color: var(--black-color);
    h1 {
      margin: 30px;
      font-weight: 500;
    }
  }
</style>