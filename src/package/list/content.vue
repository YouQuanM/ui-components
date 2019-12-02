<template>
  <div class="list-item-content">
    <slot>
      <div class="content-item" v-if="!autoRender || (autoRender && item[prop])">
        <my-icon class="list-icon" :name="icon" v-if="icon"></my-icon>
        <div class="content-title" v-if="label">
          <p>{{label}}:</p>
        </div>
        <div class="content-content">
          <p>{{item[prop]}}</p>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
const COMPONENT_NAME = 'my-list-content'
export default {
  name: COMPONENT_NAME,
  props: {
    item: Object,
    // autoRender 是否根据prop有无展示整行
    autoRender: {
      type: Boolean,
      default: false
    },
    half: {
      type: Boolean,
      default: false
    },
    label: String,
    prop: String,
    icon: String
  },
  methods: {
    initClass () {
      if (this.half) {
        return 'half'
      }
    }
  }
}
</script>
