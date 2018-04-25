<template>
  <div class="SearchCrypto">
    <multiselect 
      v-model="value" 
      :options="options" 
      :custom-label="nameWithLang"
      :loading="isLoading"
      :max-height="400"
      placeholder="Search" 
      label="name" 
      track-by="name"
      @search-change="fetchData('/data/currencies.json')"
      @open="check('focus')"
      @input="check"
      @close="check('close')">
      <template slot="option" slot-scope="props">
        <router-link v-if="links" :to="{ name: 'overview', params: { id: props.option.short } }" class="options__link">
          <img :src="props.option.icon" class="multiselect__element__icon"> 
          <span class="multiselect__element__short">{{ props.option.short }}</span>
          <span>{{ props.option.name }}</span>
        </router-link>
        <span v-else class="options__link">
          <img :src="props.option.icon" class="multiselect__element__icon"> 
          <span class="multiselect__element__short">{{ props.option.short }}</span>
          <span>{{ props.option.name }}</span>
        </span>
      </template>
      <span slot="noResult">No elements found.</span>s
    </multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    name: 'SearchCrypto',
    components: {
      Multiselect
    },    
    props: {
      links: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        value: [],
        options: [],
        isLoading: false
      }
    },
    methods: {
      nameWithLang ({ name }) {
        return `${name}`
      },
      fetchData (source) {
        if (source) {
          this.isLoading = true;
          fetch(source)
            .then(response => response.json())
            .then(data => {
              this.options = data;
              this.isLoading = false;
            })
            .catch(error => console.error(error));
        } else {
          console.log('No source');
        }
      },
      clearData () {
        this.options = []
      },
      check (value) {
        if (value) {
          this.$emit('get', value);
        } else {
          this.$emit('get', this.value);
        }
        this.clearData();
      }
    }
  };
</script>

<style>
  .multiselect {
    position: relative;
  }
  .multiselect__tags {
    border-radius: 100px;
    border: solid 2px #efefef;
    overflow: hidden;
  }
  @media (max-width: 767.99px) {
    .multiselect {
      width: 100%;
    }
  }
  .multiselect__input {
    padding: 0 24px;
    height: 50px;
    width: 100%;
    font-size: 15px;
    transition: .3s all ease;
    color: var(--dark-gray-color);
    outline: 0;
    border: none;
  }
  .multiselect__input::-webkit-input-placeholder {
    opacity: .7;
  }
  .multiselect__input::-moz-placeholder {
    opacity: .7;
  }
  .multiselect__input:-moz-placeholder {
    opacity: .7;
  }
  .multiselect__input:-ms-input-placeholder {
    opacity: .7;
  }
  .multiselect__input:focus {
    border-color: #80bdff;
  }
  .multiselect__content {
    position: absolute;
    background-color: #fff;
    color: var(--dark-gray-color);
    padding: 0;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
    z-index: 100;
    width: 100%;
    list-style: none;
    margin: 0;
    overflow-y: auto;
  }
  .multiselect__option {
    display: inline-block;
    width: 100%;
  }
  .options__link {
    padding: 10px 0 10px 24px;
    display: block;
  }
  @media (max-width: 767.99px) {
    .multiselect__option {
      padding: 10px 0 10px 0;
    }
  }
  .multiselect__option a {
    &:hover {
      color: inherit;
    }
  }
  .multiselect__element {
    &:hover {
      background-color: var(--light-color);
      cursor: pointer;
    }
  }
  .multiselect__element__short {
    display: inline-block;
    margin-right: 18px;
    color: var(--light-gray-color);
    width: 32px;
    text-transform: uppercase;
  }
  .multiselect__element__icon {
    vertical-align: top;
    margin-right: 8px;
  }
</style>