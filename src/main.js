import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/store';
import VueResource from 'vue-resource'

console.log(process.env.VUE_APP_BASE_URI)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://stock-trader-a4e2d.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '\u20B9' + value.toLocaleString('en-IN');
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
