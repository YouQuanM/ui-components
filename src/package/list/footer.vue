<template>
  <div class="list-item-footer">
    <div class="footer-item" v-for="(item, index) in renderList" :key="index" @click="item.click">
      <div class="item-text" v-if="item.type === 'text'">{{item.value}}</div>
      <my-tag v-if="item.type === 'tag'">{{item.value}}</my-tag>
      <my-button></my-button>
    </div>
  </div>
</template>

<script>
/**
 * renderList
 * [
 *    {
 *      type: tag/button/text,
 *      value: String,
 *      click: function
 *    }
 * ]
 */
const COMPONENT_NAME = 'my-list-footer'
export default {
  name: COMPONENT_NAME,
  props: {
    renderList: Array
  }
}
</script>
