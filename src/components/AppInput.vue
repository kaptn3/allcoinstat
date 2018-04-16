<template>
  <div class="AppInput">
    <input class="AppInput__field" v-on="inputListeners">
  </div>
</template>

<script>
  export default {
    name: 'AppInput',
    computed: {
      inputListeners: function () {
        var vm = this
        return Object.assign({},
          this.$listeners,
          {
            input: function (event) {
              vm.$emit('input', event.target.value)
            }
          }
        )
      }
    }
  };
</script>

<style scoped>
.AppInput {
  border-radius: 100px;
  border: solid 2px #efefef;
}
.AppInput__field {
  padding: 0 24px;
  border-radius: 100px;
  height: 50px;
  width: 100%;
  font-size: 15px;
  transition: .3s all ease;
  color: var(--dark-gray-color);
  outline: 0;
  border: none;
}
.form-comment {
  border-radius: 6px;
}
.form-comment > .AppInput__field {
  border-radius: 6px;
  padding: 15px 24px 25px 24px;
  min-height: 90px;
  line-height: 1.7;
}
.form-comment input::-webkit-input-placeholder {
  opacity: .7;
}
.form-comment input::-moz-placeholder {
  opacity: .7;
}
.form-comment input:-moz-placeholder {
  opacity: .7;
}
.form-comment input:-ms-input-placeholder {
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
.form-comment input:focus,
.AppInput:focus {
  border-color: #80bdff;
}
.error,
.error:focus {
  border: solid 2px var(--red-color);
}
</style>