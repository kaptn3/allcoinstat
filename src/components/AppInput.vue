<template>
  <input class="AppInput">
</template>

<script>
  export default {
    name: 'AppInput'
  }
</script>

<style scoped>
.AppInput,
.form-comment {
  padding: 0 24px;
  height: 50px;
  width: 100%;
  border-radius: 100px;
  border: solid 2px #efefef;
  font-size: 15px;
  transition: .3s all ease;
  color: var(--dark-gray-color);
  outline: 0;
}
.form-comment {
  border-radius: 6px;
  padding: 15px 24px 25px 24px;
  min-height: 90px;
  line-height: 1.7;
}
.form-comment::-webkit-input-placeholder {
  opacity: .7;
}
.form-comment::-moz-placeholder {
  opacity: .7;
}
.form-comment:-moz-placeholder {
  opacity: .7;
}
.form-comment:-ms-input-placeholder {
  opacity: .7;
}
.AppInput::-webkit-input-placeholder {
  opacity: .7;
}
.AppInput::-moz-placeholder {
  opacity: .7;
}
.AppInput:-moz-placeholder {
  opacity: .7;
}
.AppInput:-ms-input-placeholder {
  opacity: .7;
}
.form-comment:focus,
.AppInput:focus {
  border-color: #80bdff;
}
</style>