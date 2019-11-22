<template>
  <div class="list-item-content">
    <slot>
      <div class="content-item" v-if="!autoRender || (autoRender && item[prop])">
        <my-icon class="list-icon" :name="icon" v-if="icon"></my-icon>
        <div class="content-title" v-if="label">
          <span>{{label}}:</span>
        </div>
        <div class="content-content">
          <span>{{item[prop]}}</span>
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
  data () {
    return {
      item: {}
    }
  },
  methods: {
    initClass () {
      if (this.half) {
        return 'half'
      }
    },
    initData (data) {
      this.item = data
    }
  }
}
</script>
