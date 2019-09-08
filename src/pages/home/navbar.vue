<template>
  <div class="navbar">
    <div class="loading" v-if="!pages.length">
      <base-loading class="baseLoading"></base-loading>
    </div>
    <swiper :options="swiperOptions" v-else>
      <swiper-slide v-for="(navs, index) of pages" :key="index">
        <ul class="navbar-list">
          <li class="navbar-item" v-for="item of navs" :key="item.id">
            <img :src="item.picUrl" class="navbar-img">
            <p class="navbar-name">{{item.name}}</p>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import BaseLoading from 'base/loading'
import { getHomeNavbar } from 'api/home'

export default {
  name: 'BaseNavbar',
  components: {
    BaseLoading
  },
  data () {
    return {
      navbars: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.navbars.forEach((item, index) => {
        const navs = Math.floor(index / 10)
        if (!pages[navs]) {
          pages[navs] = []
        }
        pages[navs].push(item)
      })
      return pages
    }
  },
  methods: {
    gitNavbarData () {
      getHomeNavbar().then(data => {
        this.navbars = data
      })
    }
  },
  created () {
    this.gitNavbarData()
  }
}
</script>

<style lang="scss" scoped>
  .loading{
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    position: relative;
    .baseLoading{
      position: absolute;
      top: 50%;
      margin-top: -16px;
    }
  }
  .swiper-container{
    overflow: visible;
  }
  .swiper-pagination{
    bottom: -5%;
  }
  .navbar{
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    background-color: #fff;
    &-list{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding-top: 4%;
    }
    &-item{
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 3%;
    }
    &-img{
      width: 70%;
      padding-bottom: 8px;
    }
  }
</style>
