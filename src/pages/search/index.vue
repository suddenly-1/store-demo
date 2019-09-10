<template>
  <div class="search">
    <div class="header">
      <search-header @query="getQuery"></search-header>
    </div>
    <div class="g-content-container" v-show="!query">
      <search-hot></search-hot>
      <div class="history-content">
        <search-history></search-history>
      </div>
    </div>
    <search-result :query="query" v-show="query"></search-result>
  </div>
</template>

<script>
import SearchHeader from './header'
import SearchHot from './hot'
import SearchHistory from './history'
import SearchResult from './result'

export default {
  name: 'search',
  components: {
    SearchHeader,
    SearchHot,
    SearchHistory,
    SearchResult
  },
  data () {
    return {
      query: '',
      hide: false
    }
  },
  watch: {
    query (query) {
      console.log(query)
    }
  },
  methods: {
    getQuery (query) {
      this.query = query
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

  .search{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;
    background-color: #fff;
  }
</style>
