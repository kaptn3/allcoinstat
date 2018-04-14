<template>
  <div class="CurrencyPageOverview">
    <h1>Overview {{ $route.params.id }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'CurrencyPageOverview',
    props: {
      id: {
        type: String,
        default: 'btc'
      }
    }
  };