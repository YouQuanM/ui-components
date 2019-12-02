<template>
  <div class="list-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number
  }
}
</script>