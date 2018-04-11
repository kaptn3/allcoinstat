<template>
  <AppTooltip class="Language">
    <span slot="link">Change language</span>
    <ul slot="content" class="lang-list">
      <li 
        v-for="(value, key) in languages" 
        :key="value.link" class="lang-list__item">
        <a :href="value.link">{{ key }}</a>
      </li>
    </ul>
  </AppTooltip>
</template>

<script>
  import AppTooltip from './AppTooltip';

  export default {
    name: 'Language',
    components: {
      AppTooltip
    },
    data () {
      return {
        languages: {
          RU: {
            link: '/'
          },
          EN: {
            link: '/'
          },
          SU: {
            link: '/'
          }
        }
      }
    }
  }
</script>

<style scoped>
.lang-list {
  padding: 0;
  margin: 0;
}
.lang-list__item {
  padding: 12px 14px;
  list-style: none;
  font-weight: 500;
  color: var(--dark-gray-color);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>