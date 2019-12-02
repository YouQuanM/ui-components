<template>
  <i :class='"my-icon iconfont icon-"+name' :style="setStyle" @click="onClick()"></i>
</template>

<script>
const COMPONENT_NAME = 'my-icon'
export default {
  name: COMPONENT_NAME,
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    setStyle () {
      return {
        color: this.color
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>