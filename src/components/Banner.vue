<template>
  <div class="banner">
    <div class="banner_pink">
      <h1>BANNER</h1>
    </div>
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
.banner_pink,
.banner__content {
  opacity: .4;
  height: 90px;
  text-align: center;
}
.banner__content {
  background: linear-gradient(to right, #1c31ef, #50ed17);
  width: 50%;
}
.banner_pink {
  background: linear-gradient(to right, #e61cef, #ed1717);
  width: 100%;
}
</style>