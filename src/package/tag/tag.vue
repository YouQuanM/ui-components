<template>
  <div class="my-tag">
    <span :class="[size ? 'my-tag-' + size : '']"><slot></slot></span>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-tag'
export default {
  name: COMPONENT_NAME,
  props: {
    size: String,
    color: String
  },
  methods: {
    initStyle () {

    }
  }
}
</script>