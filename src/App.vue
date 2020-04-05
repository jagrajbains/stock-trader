<template>
  <div id="app" class="container">
    <appHeader></appHeader>
    <main class="row">
      <div class="col-lg-12">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header
  },
  name: 'app',
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
main {
  padding: 20px;
}
</style>
