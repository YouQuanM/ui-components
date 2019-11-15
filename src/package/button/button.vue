<template>
  <div class="my-button">
    <button
      :class="[
        type ? 'my-button--' + type : '',
        size ? 'my-button--' + size : '',
        {
          'is-disabled': disabled
        }
      ]">
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
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>