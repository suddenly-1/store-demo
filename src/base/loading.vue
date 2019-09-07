<template>
  <div class="baseLoading">
    <img src="./loading.gif" class="baseLoading-img">
    <p class="baseLoading-text">{{loadingText}}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseLoading',
  props: {
    text: {
      type: String,
      default: '加载中···'
    }
  },
  data () {
    return {
      loadingText: this.text
    }
  },
  watch: {
    text (text) {
      this.loadingText = text
    }
  },
  methods: {
    setText (text) {
      this.loadingText = text
    }
  }
}
</script>

<style lang="scss" scoped>
  .baseLoading{
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &-img{
      padding-right: 5px;
    }
  }
</style>
