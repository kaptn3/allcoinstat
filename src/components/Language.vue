<template>
  <v-popover offset="16">
    <a>Change language</a>
    <template slot="popover"> 
      <ul class="lang-list">
        <li 
          v-for="(value, key) in languages" 
          :key="value.link" class="lang-list__item">
          <a :href="value.link">{{ key }}</a>
        </li>
      </ul>
    </template>
  </v-popover>
</template>

<script>
  export default {
    name: 'Language',
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

<style>
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