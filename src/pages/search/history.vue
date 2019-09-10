<template>
  <div class="history">
    <div class="history-info">
      <h4 class="history-title">历史搜索</h4>
      <i @click="clearHistory" class="iconfont iconlajitong1"></i>
    </div>
    <transition-group tag="ul" name="historyItem" class="history-list">
      <li
        class="history-item"
        v-for="(item, index) of historys"
        :key="item"
        v-if="index<10"
        @click="$_search_historyStorage(item)"
      >
        <router-link to="particulars">
          <span class="history-item-name">{{item}}</span>
        </router-link>
      </li>
    </transition-group>
    <base-confirm @confirm-ok="confirmOk" ref="confirm"></base-confirm>
  </div>
</template>

<script>
import BaseConfirm from 'base/confirm'
import storage from 'assets/js/storage'
import { SEARCH_HISTORY_KEYWORD_KEY } from './config'
import { searchStorage } from 'api/mixins'

export default {
  name: 'SearchHistory',
  mixins: [ searchStorage ],
  components: {
    BaseConfirm
  },
  data () {
    return {
      historys: []
    }
  },
  // watch: {
  //   historys () {
  //     this.historysLength()
  //   }
  // },
  methods: {
    getStorageHistory () {
      this.historys = storage.get(SEARCH_HISTORY_KEYWORD_KEY)
    },
    clearHistory () {
      this.$refs.confirm.show()
    },
    confirmOk () {
      storage.remove(SEARCH_HISTORY_KEYWORD_KEY)
      this.getStorageHistory()
    }
    // ,
    // historysLength () {
    //   if (this.historys.length > 15) {
    //     this.historys.pop()
    //     storage.set(SEARCH_HISTORY_KEYWORD_KEY, this.historys)
    //   }
    // }
  },
  created () {
    this.getStorageHistory()
  }
}
</script>

<style lang="scss" scoped>

  .history-info{
    display: flex;
    justify-content: space-between;
  }
  .iconlajitong1{
    height: 34px;
    line-height: 34px;
    font-size: 24px;
    color: #bbb;
  }
  .history{
    width: 100%;
    height: auto;
    padding: 0 10px;
    margin-top: 10px;
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
