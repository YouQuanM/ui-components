<template>
  <div class="my-list">
    <div v-for="(item, index) in list" :key="index" class="my-list-item" ref="slotRef">
      <list-item :data="item" :index="index" @click="onClick(item)">
        <slot></slot>
      </list-item>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-list'
import ListItem from './list-item'
export default {
  name: COMPONENT_NAME,
  components: {ListItem},
  props: {
    styleObject: Object,
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      loadingText: '没有更多了',
      loadingFlag: true
    }
  },
  // TODO lazyload
  methods: {
    // 点击item回调，返回参数为该item
    onClick (item) {
      this.$emit('click', item)
    }
  }
}
</script>
