<template>
  <div class="banner">
    <div>
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
.banner_pink > div,
.banner__content > div {
  opacity: .4;
  height: 90px;
  text-align: center;
}
.banner__content > div {
  background: linear-gradient(to right, #1c31ef, #50ed17);
  width: 50%;
}
.banner_pink > div {
  background: linear-gradient(to right, #e61cef, #ed1717);
  width: 100%;
}
h1 {
  margin: 0;
}
</style>