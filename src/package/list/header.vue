<template>
  <div class="list-item-header">
    <div class="header-main-title-area">
      <div class="header-title" v-if="title">
        <p>{{item[title]}}</p>
      </div>
      <div class="header-brief" v-if="brief">
        <p>{{item[brief]}}</p>
      </div>
    </div>
    <div class="header-main-status-area">
      <!-- <div class="header-status-tags" v-for="(tagItem, tagIndex) in tagList" :key="tagIndex">
        <my-tag type="activity" :fill="initFill(tagItem.status)" :color="initColor(tagItem.status)" shape="cycle" sharp="left-bottom">{{tagItem.text}}</my-tag>
      </div> -->
      <div class="header-right-title" v-if="rightTitle">
        <p>{{item[rightTitle]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-list-header'
export default {
  name: COMPONENT_NAME,
  props: {
    item: Object,
    title: String,
    brief: String,
    tagList: Array,
    rightTitle: String
  },
  methods: {
    initFill (status) {
      let fill
      switch (status) {
        case 'success':
          fill = '#46bf50'
          break
        case 'fail':
          fill = '#e64040'
          break
        default:
          break
      }
      return fill
    },
    initColor (status) {
      let color
      switch (status) {
        case 'success':
          color = '#666666'
          break
        case 'fail':
          color = '#666666'
          break
        default:
          break
      }
      return color
    }
  }
}
</script>
