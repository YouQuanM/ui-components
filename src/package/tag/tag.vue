<template>
  <div class="my-tag">
    <p :class="[
      size ? 'my-tag-' + size : '',
      border ? 'my-tag-has-border' : ''
    ]" :style="initStyle"><slot></slot></p>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-tag'
import { colourBlend } from '../mixin/mixin'
export default {
  name: COMPONENT_NAME,
  props: {
    size: {
      type: String,
      default: 'small' // 默认small
    },
    color: String, // color必须使用 #xxxxxx
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    initStyle () {
      let style = ''
      if (this.color) {
        // TODO 加一个判断color是否合法
        let styleMap = new Map()
        styleMap.set('background-color', colourBlend('#ffffff', this.color, 0.15))
        styleMap.set('border-color', colourBlend('#ffffff', this.color, 0.45))
        styleMap.set('color', this.color)
        styleMap.forEach((value ,key) => {
          style = style + key + ':' + value + ';'
        })
      }
      return style
    }
  }
}
</script>