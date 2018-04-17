<template>
  <div class="top-header">
    <h1>CryptoCurrency Market</h1>
  </div>
</template>

<script>
  export default {
    name: 'TheTopHeading'
  }
</script>

<style scoped>
  .top-header {
    border-top: 2px solid var(--light-color);
    text-align: center;
    color: var(--black-color);
  }
  .top-header h1 {
    margin: 30px;
    font-weight: 500;
  }
  @media (max-width: 575.99px) {
    .top-header h1 {
      font-size: calc((24 / 16) * 1rem);
    }
  }
</style>