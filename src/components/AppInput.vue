<template>
  <div class="AppInput">
    <slot name="content">
      <input class="AppInput__field" v-on="inputListeners">
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'AppInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        default: 'input'
      },
      placeholder: {
        type: String,
        default: 'Search'
      }
    },
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
  width: 100%;
}
input {
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
input::-webkit-input-placeholder {
  opacity: .7;
}
input::-moz-placeholder {
  opacity: .7;
}
input:-moz-placeholder {
  opacity: .7;
}
input:-ms-input-placeholder {
  opacity: .7;
}
input:focus {
  border-color: #80bdff;
}
.error,
.error:focus {
  border: solid 2px var(--red-color);
}
.form-comment > input {
  border-radius: 6px;
  padding: 15px 24px 25px 24px;
  min-height: 90px;
  line-height: 1.7;
}
</style>