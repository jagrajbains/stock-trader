<template>
  <div>
    <h1>Trade or view your stocks.</h1>
    <h6>You may save or load your data.</h6>
    <h6>Click on End Day to begin a new day.</h6>
    <br>
    <br>
    <div>Available Funds: {{ funds | currency }}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'funds'
    ])
  }
}
</script>