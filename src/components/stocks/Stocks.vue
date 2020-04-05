<template>
  <div class="row row-cols-1 row-cols-md-2">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
  </div>
</template>
<script>
import Stock from './Stock.vue';
export default {
  components: {
    Stock
  },
  data() {
    return {
      stocks: [
      {id: 1, name: 'BMW', price: 200},
      {id: 2, name: 'Google', price: 400},
      {id: 3, name: 'Twitter', price: 20},
      {id: 4, name: 'Facebook', price: 300}
      ]
    }
  }
}
</script>