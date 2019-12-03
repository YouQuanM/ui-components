<template>
  <div class="my-cell" @click="onClickHandle">
    <div class="my-cell-main">
      <div class="my-cell-title" v-if="title || icon">
        <div class="my-cell-title-icon" v-if="icon">
          <my-icon :name="icon"></my-icon>
        </div>
        <div class="title-text"><slot name="title">{{title}}</slot></div>
      </div>
      <div class="my-cell-main-right" v-if="value">
        <div class="my-cell-value">
          <slot>{{value}}</slot>
        </div>
        <div class="my-cell-arrow" v-if="arrow">
          <my-icon name="arrow-right"></my-icon>
        </div>
      </div>
    </div>
    <div class="my-cell-label" v-if="label">
      <slot name="label">{{label}}</slot>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-cell'
export default {
  name: COMPONENT_NAME,
  props: {
    title: String,
    value: [String, Number],
    icon: String,
    arrow: {
      type:Boolean,
      default: false
    },
    label: [String, Number],
    isLink: {
      type:Boolean,
      default: false
    },
    to: String,
    url: String
  },
  methods: {
    onClickHandle () {
      // 如果有跳转
      if (!this.isLink) {
        return
      }
      if (this.to) {
        this.$router.push(this.to)
      }
      if (this.url) {
        location.href = this.url
      }
    }
  }
}
</script>