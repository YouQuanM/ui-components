<template>
  <div class="my-list">
    <div v-for="(item, index) in list" :key="index" class="my-list-item" ref="slotRef" @click="onClick(item)">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-list'
export default {
  name: COMPONENT_NAME,
  props: {
    styleObject: Object,
    list: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.list.forEach((v, i) => {
      let arr = this.$refs.slotRef[i].children
      for (let i = 0; i < arr.length; i++) {
        arr[i].__vue__.initData(v)
      }
    })
  },
  methods: {
    // 点击item回调，返回参数为该item
    onClick (item) {
      this.$emit('click', item)
    }
  }
}
</script>
