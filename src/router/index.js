import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from '@/views/Loading'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },

]

const router = new VueRouter({
  routes
})

export default router
