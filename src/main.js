import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import Store from './store/modules/index'


new Vue({
  el: '#app',
  router,
  store: Store,
  render: h => h(App)
})
