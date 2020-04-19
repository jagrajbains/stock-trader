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
          <a class="nav-link" href="#">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a 
          class="nav-link dropdown-toggle" 
          href="#" id="navbarDropdown" 
          role="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
      <strong>Funds: {{ funds }}</strong>
    </nav>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>