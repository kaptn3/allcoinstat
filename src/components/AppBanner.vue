<template>
  <div class="banner">
    <div/>
  </div>
</template>

<script>
  export default {
    name: 'Banner'
  };
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
}
.banner > div {
  opacity: .4;
  height: 90px;
  text-align: center;
  background: linear-gradient(to right, #e61cef, #ed1717);
  width: 100%;
}
</style>