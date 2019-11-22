<template>
  <div class="home">
    <my-view>
      <h1 class="home-title">导航</h1>
      <p class="home-brief">还没做好item-list组件，先凑合看</p>
      <div class="guide-list">
        <div class="guide-item" v-for="(item, index) in sampleList" :key="index" @click="toSamplePage(item.link)">{{index + 1}} - {{item.value}}</div>
      </div>
    </my-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      sampleList: [
        {
          value: '按钮',
          link: '/sample/my-button'
        }
      ]
    }
  },
  methods: {
    toSamplePage (link) {
      this.$router.push({
        path: link
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home-title {
  font-size: 30px;
  margin: 20px 0;
}
.home-brief {
  margin: 20px 0;
}
.guide-list {
  .guide-item {
    font-size: 20px;
  }
}
</style>
