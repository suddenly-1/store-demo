import Vue from 'vue'
import Router from 'vue-router'
import home from 'pages/home'
import category from 'pages/category'
import cart from 'pages/cart'
import personal from 'pages/personal'
import particulars from 'pages/particulars'
import search from 'pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: home
    },
    {
      name: 'category',
      path: '/category',
      component: category
    },
    {
      name: 'cart',
      path: '/cart',
      component: cart
    },
    {
      name: 'personal',
      path: '/personal',
      component: personal
    },
    {
      name: 'particulars',
      path: '/particulars',
      component: particulars
    },
    {
      name: 'search',
      path: '/search',
      component: search
    },
    {
      path: '*',
      redirect: 'home'
    }
  ]
})
