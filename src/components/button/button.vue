<template>
  <div>
    <button class="my-button">
       <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'middle'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>