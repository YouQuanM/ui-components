<template>
  <my-view>
    <div class="sample-item">
      <p>color="#398bd0" size="large"</p>
      <my-tag color="#398bd0" size="large">tag</my-tag>
    </div>
    <div class="sample-item">
      <p>color="#fc0000" size="medium"</p>
      <my-tag color="#fc0000" size="medium">tag</my-tag>
    </div>
    <div class="sample-item">
      <p>color="#008000" size="small"(small默认)</p>
      <my-tag color="#008000" size="small">tag</my-tag>
    </div>
    <div class="sample-item">
      <p>color="#d0b520" size="mini"</p>
      <my-tag color="#d0b520" size="mini">tag</my-tag>
    </div>
    <div class="sample-item">
      <p>color="#d0b520" border</p>
      <my-tag color="#d0b520" border>tag</my-tag>
    </div>
  </my-view>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.sample-item {
  margin: 0 auto;
  padding: 20px 0;
  border-bottom: 1px solid #f7f7f7;
  p {
    font-size: 24px;
    margin: 20px 0;
  }
}
</style>