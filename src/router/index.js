import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
