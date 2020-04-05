<template>
  <div class="col col-mb-4 mb-3">
    <div class="card border-success">
      <div class="card-header">
        <h3 class="card-title">{{ stock.name }}</h3>
        <h5 class="card-subtitle mb-2 text-muted">Price: {{ stock.price }}</h5>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="buyStocks" :disabled="quantity <= 0 || !Number.isInteger(Number(quantity))">Buy</button>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  props: [
    'stock'
  ],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStocks() {
      let order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity)
      };
      console.log(order)
      this.quantity = 0
    }
  }
}
</script>