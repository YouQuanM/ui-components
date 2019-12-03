<template>
  <div class="home">
    <my-view>
      <h1 class="home-title">导航</h1>
      <div class="guide-list">
        <my-cell-group title="基础组件">
          <my-cell v-for="(item, index) in sampleList" :key="index" :title="item.title" :value="item.value" is-link :to="item.link"></my-cell>
        </my-cell-group>
      </div>
      <div class="guide-list">
        <my-cell-group title="业务组件">
          <my-cell v-for="(item, index) in workComponents" :key="index" :title="item.title" :value="item.value" is-link :to="item.link"></my-cell>
        </my-cell-group>
        <!-- <div class="guide-item" v-for="(item, index) in sampleList" :key="index" @click="toSamplePage(item.link)">{{index + 1}} - {{item.value}}</div> -->
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
          title: 'Button',
          value: '按钮',
          link: '/sample/my-button'
        },
        {
          title: 'tag',
          value: '标签',
          link: '/sample/my-tag'
        },
        {
          title: 'cell',
          value: '单元格',
          link: '/sample/my-cell'
        }
      ],
      workComponents: [
        {
          title: 'list',
          value: '列表',
          link: '/sample/my-list'
        },
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
  font-size: 50px;
  margin: 30px 0;
}
.home-brief {
  font-size: 20px;
  margin: 60px 0;
}
.guide-list {
  margin: 80px 0 0 0;
  padding: 10px 0;
  font-size: 28px;
  border-bottom: 1px solid #333;
}
</style>
