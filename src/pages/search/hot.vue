<template>
  <div class="hot">
    <h4 class="hot-title">热门搜索</h4>
    <div class="hot-loading" v-if="!hots.length">
      <base-loading></base-loading>
    </div>
    <ul class="hot-list" v-else>
      <li @click="$_search_historyStorage(item.hotWord)" class="hot-item" v-for="(item, index) of hots" :key="index">
        <router-link to="particulars" class="hot-item-link">
          <span class="hot-item-name">{{item.hotWord}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseLoading from 'base/loading'
import { getSearchHot } from 'api/search'
import { searchStorage } from 'api/mixins'

export default {
  name: 'SearchHot',
  components: {
    BaseLoading
  },
  mixins: [searchStorage],
  data () {
    return {
      hots: []
    }
  },
  methods: {
    getHotData () {
      return getSearchHot().then(data => {
        if (data) {
          this.hots = data.owner
        }
      })
    }
  },
  created () {
    this.getHotData()
  }
}
</script>

<style lang="scss" scoped>

  .hot-loading{
    padding-bottom: 20px;
  }
  .hot{
    padding-top: 5px;
    width: 100%;
    height: auto;
    background-color: #fff;
    padding-left: 10px;
    &-title{
      height: 34px;
      line-height: 34px;
      font-size: 14px;
      font-weight: 700;
      color: #666;
    }
    &-list{
      padding-top: 5px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
    &-item{
      padding: 10px;
      background-color: #eee;
      border-radius: 5px;
      margin: 0 10px 10px 0;
      &-name{
        font-size: 12px;
        color: #666;
      }
    }
  }
</style>
