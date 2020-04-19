<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to='/' class="navbar-brand"><a>Stock Trader</a></router-link>
      <ul class="navbar-nav mr-auto">
        <router-link to='/portfolio' class="nav-link" activeClass='active' tag="li"><a>Portfolio</a></router-link>
        <router-link to='/stocks' class="nav-link" activeClass='active' tag="li"><a>Stocks</a></router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <div @click="endDay" class="endDay-btn">End Day</div>
        </li>
        <li @click="isOpen = !isOpen" class="nav-item dropdown">
          <a 
          class="nav-link dropdown-toggle" 
          href="#" id="navbarDropdown" 
          role="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" :class="{show: isOpen}" aria-labelledby="navbarDropdown">
            <div class="dropdown-item" @click="saveData">Save Data</div>
            <div class="dropdown-item" @click="loadData">Load Data</div>
          </div>
        </li>
      </ul>
      <strong>Funds: {{ funds | currency }}</strong>
    </nav>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks',
      'loadAsyncData'
    ]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data)
    },
    loadData() {
      this.loadAsyncData()
    }
  }
}
</script>
<style scoped>
.endDay-btn {
  color: red;
  cursor: pointer;
  padding: 8px;
}
.endDay-btn:hover {
  color: green;
}
</style>