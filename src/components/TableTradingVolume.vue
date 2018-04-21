<template>
  <div class="col-lg-5">
    <AppTable :name-table="typeData">
      <thead slot="table-header">
        <tr>
          <th class="name">{{ typeData[0].toUpperCase() + typeData.substring(1) }}</th>
          <th 
            v-for="(value, key) in tableHeader" 
            :key="key"
            :class="key">{{ value }}</th>
        </tr>
      </thead>
      <tbody slot="table-body">
        <tr 
          v-for="(value, key) in data"
          :key="key">
          <td v-if="typeData === 'exchange'" class="name">
            <router-link :to="'/exchange/' + value.name.toLowerCase()" class="link">{{ value.name }}</router-link>            
          </td>
          <td v-if="typeData === 'currency'" class="name">{{ value.name }}</td>
          <td class="volume">$ {{ value.volume }}</td>
          <td class="share">{{ value.y }}%</td>
        </tr>
      </tbody>
    </AppTable>
  </div>
</template>

<script>
  import AppTable from './AppTable';

  export default {
    name: "TableTradingVolume",
    components: {
      AppTable
    },
    props: {
      source: {
        type: String,
        default: null
      },
      typeData: {
        type: String,
        default: 'currency'
      }
    },
    data () {
      return {
        data: null,
        tableHeader: {
          volume: 'Volume 24',
          share: 'Share'
        }
      }
    },
    created () {
      this.fetchData(this.source);
    },
    methods: {
      fetchData (source) {
        if (source) {
          fetch(source)
            .then(response => response.json())
            .then(data => {
              this.distribution(data);
            })
            .catch(error => console.error(error));
        } else {
          console.log('No source');
        }
      },
      distribution (data) {
        this.data = data;
      }
    }
  };
</script>

<style scoped>
  .link {
    color: var(--blue-color);
  }
  .share,
  .volume {
    text-align: right;
  }
</style>