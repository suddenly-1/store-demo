// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

import 'swiper/dist/css/swiper.css'
import 'assets/scss/index.scss'

fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.1,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 3
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
