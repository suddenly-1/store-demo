<template>
  <div class="search-result">
    <div class="loading" v-show="loading">
      <base-loading></base-loading>
    </div>
    <ul class="result-list" v-show="!loading && results.length">
      <li
        class="result-item"
        v-for="(item, index) of results"
        :key="index"
        @click="$_search_historyStorage(item[0])"
      >
      <router-link to="particulars">
        <span class="result-item-name">{{item[0]}}</span>
      </router-link>
      </li>
    </ul>
    <div class="no-result" v-show="!loading && !results.length">没有搜索结果</div>
  </div>
</template>

<script>
import BaseLoading from 'base/loading'
import { getResult } from 'api/search'
import { searchStorage } from 'api/mixins'

export default {
  name: 'SearchResult',
  components: {
    BaseLoading
  },
  props: {
    query: {
      type: String
    }
  },
  mixins: [searchStorage],
  data () {
    return {
      results: [],
      loading: false
    }
  },
  watch: {
    query (query) {
      this.getResultData(query)
    }
  },
  methods: {
    getResultData (keyword) {
      if (!keyword) {
        return
      }
      this.loading = true
      return getResult(keyword).then(data => {
        this.results = data
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .no-result{
    width: 100%;
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 16px;
    color: #999;
  }
  .search-result{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .result-list{
      width: 100%;
      height: 100%;
      padding: 0 10px;
    }
    .result-item{
      border-bottom: 1px solid #eee;
      &:last-child{
        border-bottom: none;
      }
      &-name{
        display: inline-block;
        width: 100%;
        padding: 10px 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
