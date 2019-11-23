import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyComponent from './package'
import './assets/css/reset.css'
import './package/style/index.css'
Vue.use(MyComponent)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
