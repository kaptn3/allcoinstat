<template>
  <div class="AppTable">
    <div class="table-main">
      <table>
        <slot name="table-header"/>
        <slot name="table-body">
          <tr><td>No data!</td></tr>
        </slot>
      </table>      
      <AppButton v-if="showButton" class="btn btn-view">View more</AppButton>
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
      showButton: {
        type: Boolean,
        default: false
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
  padding: 16px 7px;
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
  padding: 12px 7px 16px 7px;
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
.name,
.currency {
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
.price_plus {
  color: var(--green-color);
}
.price_minus {
  color: var(--red-color);
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