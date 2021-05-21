import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from '@/views/Loading'
import Pokedex from '@/views/Pokedex'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },
  {
    path : '/pokendex',
    name : "Pokedex",
    component : Pokedex
  }

]

const router = new VueRouter({
  routes
})

export default router
