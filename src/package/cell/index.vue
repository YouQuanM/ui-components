<template>
  <div class="my-cell">
    <div class="my-cell-main">
      <div class="my-cell-title">
        <my-icon :name="icon" v-if="icon"></my-icon>
        <div class="title-text"><slot name="title">{{title}}</slot></div>
      </div>
      <div class="my-cell-main-right">
        <div class="my-cell-value">
          <slot>{{value}}</slot>
        </div>
        <div class="my-cell-arrow" v-if="arrow">
          <my-icon name="arrow-right"></my-icon>
        </div>
      </div>
    </div>
    <div class="my-cell-label">
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
    label: [String, Number]
  }
}
</script>