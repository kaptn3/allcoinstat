<template>
  <div class="AppTags">
    <a v-for="(value, key) in tags" :key="key" class="tag" href="value.link"># {{ key }}</a>
  </div>
</template>

<script>
  export default {
    name: 'AppTags',
    data () {
      return {
        tags: {
          tag: {
            link: '/'
          },
          longtag: {
            link: '/'
          },
          longtags: {
            link: '/'
          }
        }
      }
    }
  };
</script>

<style scoped>
  .AppTags {
    display: flex;
  }
  .tag,
  .tag:visited {
    font-weight: bold;
    transition: .3s all ease;
    padding: 6px 10px;
    border-radius: 100px;
    color: var(--blue-color);
    border: 1px solid var(--blue-color);
  }
  .tag:hover,
  .tag:focus {
    color: #fff;
    background-color: var(--blue-color);
  }
</style>