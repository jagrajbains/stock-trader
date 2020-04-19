<template>
  <div class="col col-mb-4 mb-3">
    <div class="card border-info">
      <div class="card-header">
        <h3 class="card-title">{{ stock.name }}</h3>
        <h5 class="card-subtitle mb-2 text-muted">
          Price: {{ stock.price }} | Quantity: {{ stock.quantity }}
        </h5>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" min="0" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="float-right">
          <button 
          class="btn btn-info" 
          @click="sellStocks" 
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(Number(quantity))">
          {{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  props: [
    'stock'
  ],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    ...mapActions({
      placeSellStock: 'sellStocks'
    }),
    sellStocks () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSellStock(order)
      this.quantity = 0
    }
  }
}
</script>