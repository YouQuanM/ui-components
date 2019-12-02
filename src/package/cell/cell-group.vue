<template>
  <div class="my-cell-group">
    <div class="group-title" v-if="title">
      <p>{{title}}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-cell-group'
export default {
  name: COMPONENT_NAME,
  props: {
    title: [String, Number]
  }
}
</script>