<template>
  <div class="my-radio-group">
    <slot></slot>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-radio-group'
export default {
  name: COMPONENT_NAME,
  provide () {
    return {
      node: this
    }
  },
  computed: {
    value () {
      return this.$attrs.value
    }
  },
  methods: {
    updateValue(value) {
      this.value = value
    }
  }
}
</script>