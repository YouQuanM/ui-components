<template>
  <div class="my-radio">
    <div class="my-radio-item">
      <input class="my-radio-input" type="radio" v-model="value" @change="handleChange">
      <span class="my-radio-label">
        <slot>{{label}}</slot>
      </span>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-radio'
export default {
  name: COMPONENT_NAME,
  props: {
    label: {
      type: [String, Number],
      required: true
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: {
    node: {default: {}}
  },
  computed: {
    // 是否在radio-group中
    inGroup () {
      if (this.$parent._componentTag === 'my-radio-group') {
        return true
      }
      return false
    },
    // 如果是在group中就返回group绑定的，如果不是，就返回自己绑定的value
    model () {
      if (this.inGroup) {
        return this.node.value
      } else {
        return this.$attrs.value
      }
    }
  },
  methods: {
    handleChange () {
      this.node.updateValue(this.value)
    }
  }
}
</script>