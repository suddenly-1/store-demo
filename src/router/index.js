import Vue from 'vue'
import Router from 'vue-router'
import home from 'pages/home'
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
