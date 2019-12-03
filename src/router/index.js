import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SampleRouter from './modules/sample'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  ...SampleRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
