<template>
  <div class="recommend">
    <div class="recommend-title">
      <h4 class="title">热门推荐</h4>
    </div>
    <div class="loading" v-if="!recommends.length">
      <base-loading></base-loading>
    </div>
    <ul class="recommend-list" v-else>
      <li class="recommend-item" v-for="(item, index) of recommends" :key="index">
        <div class="recommend-item-img">
          <img v-lazy="item.baseinfo.picUrlNew" class="img">
        </div>
        <p class="recommend-item-text">{{item.name.shortName}}</p>
        <p class="recommend-item-formerPrice">￥{{item.price.origPrice}}</p>
        <div class="recommend-item-info">
          <span class="price">￥<span class="price-active">{{item.price.actPrice}}</span></span>
          <span class="number">{{item.remind.soldCount}}件已售</span>
        </div>
      </li>
    </ul>
    <div class="recomend-end" v-show="recomendEnd">没有更多内容！</div>
  </div>
</template>

<script>
import BaseLoading from 'base/loading'
import { getHomeRecommend } from 'api/home'

export default {
  name: 'HomeRecommend',
  components: {
    BaseLoading
  },
  data () {
    return {
      recommends: [],
      currentPage: 1,
      totalPage: 5,
      recomendEnd: false
    }
  },
  methods: {
    update () {
      return this.getRecommends()
    },
    getRecommends () {
      if (this.currentPage > this.totalPage) {
        return getHomeRecommend(this.currentPage).then(data => {
          this.recomendEnd = true
          this.$emit('recommends-end', this.recommends)
        })
      }

      return getHomeRecommend(this.currentPage).then(data => {
        if (data) {
          this.currentPage++
          // this.totalPage = data.totalPage
          this.recommends = this.recommends.concat(data.itemList)
          this.$emit('recommends', this.recommends)
        }
      })
    }
  },
  created () {
    this.getRecommends()
  }
}
</script>

<style lang="scss" scoped>
  .loading{
    margin-top: 70px;
    height: 300px;
  }
  .recomend-end{
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .recommend{
    width: 100%;
    height: auto;
    &-title{
      width: 100%;
      margin: 3% 0;
      position: relative;
      .title{
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: #333;
        &::before,
        &::after{
          content: ' ';
          display: block;
          position: absolute;
          right: 4%;
          top: 50%;
          width: 33%;
          height: 1px;
          background-color: #bbb;
        }
        &::before{
          left: 4%;
        }
      }
    }
    &-list{
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &-item{
      // float: left;
      margin-bottom: 10px;
      width: 49%;
      background-color: #fff;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);
      &-img{
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        .img{
          width: 100%;
        }
      }
      &-text{
        font-size: 12px;
        color: #666;
        padding: 0 10px;
        margin-top: 10px;
        height: 36px;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal !important;
        word-wrap: break-word;
      }
      &-formerPrice{
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
        padding-bottom: 5px;
        padding-left: 10px;
      }
      &-info{
        display: flex;
        justify-content: space-between;
        padding: 0 10px 10px 10px;
        .price{
          color: #e61414;
          font-size: 12px;
          &-active{
            font-size: 20px;
          }
        }
        .number{
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>
