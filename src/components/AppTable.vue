<template>
  <div class="AppTable">
    <div class="table-main">
      <table>
        <thead>
          <tr>
            <th 
              v-for="(value, key) in tableData.header" 
              :key="key"
              :class="key">{{ value }}</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(value, key) in tableData.data"
            :key="key">
            <td>{{ key + 1 }}</td>
            <td 
              v-for="(value, key) in value"
              :key="key"
              :class="key">{{ value }}</td>
            <td class="sale">buy</td>          
          </tr>
        </tbody>
      </table>      
      <AppButton class="btn btn-view">View more</AppButton>
    </div>    
  </div>
</template>

<script>
  import AppButton from './AppButton';
  import tableScript from '../assets/js/table';

  export default {
    name: 'AppTable',
    components: {
      AppButton
    },
    props: {
      tableData: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
td {
  padding: 16px 0;
  font-weight: 500;
  color: var(--dark-gray-color);
}
td,
th {
  border-bottom: 1px solid var(--border-gray);
  text-align: right;
  transition: .3s all ease;
}
th {
  padding: 12px 0 16px;
  font-weight: bold;
  border-top: 4px solid transparent;
  &:hover {
    border-top-color: var(--blue-color);
  }
}
.price {
  font-weight: bold;
}
td.price {
  color: var(--blue-color);
}
.name {
  text-align: left;
}
.num,
.icon {
  text-align: center;
}
.icon {
  padding-left: 10px;
  padding-right: 10px;
}
.icon > img {
  vertical-align: top;
}
.td-hover,
th:hover,
tbody tr:hover {
  background: var(--hover-table-tr);
}
.AppTable {
  margin-bottom: 30px;
}
.table-main-row-td.p-1h,
.table-main-row-td.p-24h,
.table-main-row-td.p-7h {
  text-align: center;
  white-space: pre;
}
@media (max-width: 510px) {
  .p-24h,
  .p-7h {
    display: none;
  }
}
@media (max-width: 730px) {
  .volume-24h {
    display: none;
  }
}
@media (max-width: 890px) {
  .market-cap {
    display: none;
  }
}
.btn-view {
  margin: 10px auto;
}
</style>