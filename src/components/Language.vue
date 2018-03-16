<template>
  <div class="Language">
    <a href="javascript:void(0)" @click="toggleShow">Change language</a>
    <transition name="fade">
      <div v-if="isShowing" class="lang-block">
        <ul class="lang-list">
          <li 
            v-for="(value, key) in languages" 
            :key="value.link" class="lang-list__item">
            <a :href="value.link">{{ key }}</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  import { toggle } from './mixins/toggle';

  export default {
    name: 'Language',
    mixins: [toggle],
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
.Language {
  position: relative;
}
.lang-block {
  position: absolute;
  transform: translate3d(100%, -120%, 0);
  background-color: #fff;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.2);
  &::after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-top-color: #fff;
    border-width: 10px;
    margin-left: -10px;
  }
}
.lang-list {
  padding: 14px 0;
}
.lang-list__item {
  padding: 12px 28px;
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