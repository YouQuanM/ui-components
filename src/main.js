import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponent from './package'
import './assets/css/components/index.css'
Vue.use(GlobalComponent)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
