<template>
  <my-view class="content">
    <my-list
      :list="list"
      @click="onClickHandle">
      <my-list-column
        type="header"
        title="title"
        brief="brief"
        rightTitle="rightTitle"></my-list-column>
      <my-list-column
        type="content"
        label="label1"
        prop="value1"></my-list-column>
      <my-list-column
        type="content"
        label="label2"
        prop="value2"></my-list-column>
      <my-list-column
        type="content"
        label="label3"
        prop="value3"></my-list-column>
    </my-list>
  </my-view>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created() {
    let i = 1
    while(i <= 3){
      this.list.push({
        title: 'title-' + i,
        brief: 'brief-' + i,
        rightTitle: 'rightTitle-' + i,
        value1: 'value-' + i + '-1',
        value2: 'value-' + i + '-2',
        value3: 'value-' + i + '-3'
      })
      i++
    }
  },
  methods: {
    onClickHandle (item) {
      alert(item.title)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  background: #ddd;
}
</style>