<template>
  <div class="my-tag">
    <span :class="[size ? 'my-tag-' + size : '']" :style="initStyle"><slot></slot></span>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-tag'
import { colourBlend } from '../mixin/mixin'
export default {
  name: COMPONENT_NAME,
  props: {
    size: String,
    color: String // color必须使用 #xxxxxx
  },
  computed: {
    initStyle () {
      let style = ''
      if (this.color) {
        // TODO 加一个判断color是否合法
        let styleMap = new Map()
        styleMap.set('background-color', colourBlend('#ffffff', this.color, 0.15))
        styleMap.set('border-color', colourBlend('#ffffff', this.color, 0.25))
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