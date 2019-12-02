<template>
  <div class="my-list-column">
    <list-header v-if="type === 'header'" :item="data" :title="title" :brief="brief" :tagList="tagList" :rightTitle="rightTitle"></list-header>
    <list-content v-if="type === 'content'" :item="data" :autoRender="autoRender" :half="half" :label="label" :prop="prop" :icon="icon"></list-content>
    <list-footer v-if="type === 'footer'" :item="data" :renderList="renderList"></list-footer>
  </div>
</template>

<script>
import ListHeader from './header'
import ListContent from './content'
import ListFooter from './footer'
const COMPONENT_NAME = 'my-list-column'
export default {
  name: COMPONENT_NAME,
  components: {ListHeader, ListContent, ListFooter},
  data() {
    return {
      data: {}
    }
  },
  props: {
    type: String,
    // ===== header =====
    title: String,
    brief: String,
    tagList: Array,
    rightTitle: String,
    // ===== content =====
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
    icon: String,
    // ===== footer =====
    renderList: Array
  },
  created() {
    this.data = this.$parent.data
  }
}
</script>