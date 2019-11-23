<template>
  <div class="my-button">
    <button
      :class="[
        type ? 'my-button-' + type : '',
        size ? 'my-button-' + size : '',
        {
          'is-disabled': disabled,
          'is-round': round,
          'is-loading': loading
        }
      ]">
       <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    type: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
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