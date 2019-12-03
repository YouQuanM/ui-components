<template>
  <div>
    <my-view>
      <div class="sample-button-item">
        <p>普通按钮 size默认small</p>
        <my-button>sample</my-button>
      </div>
      <div class="sample-button-item">
        <p>type=primary size=mini</p>
        <my-button type="primary" size="mini">primary</my-button>
      </div>
      <div class="sample-button-item">
        <p>type=warning size=small(可以不写，默认)</p>
        <my-button type="warning">warning</my-button>
      </div>
      <div class="sample-button-item">
        <p>type=success size=medium</p>
        <my-button type="success" size="medium">success</my-button>
      </div>
      <div class="sample-button-item">
        <p>type=info size=medium</p>
        <my-button type="info" size="medium">info</my-button>
      </div>
      <div class="sample-button-item">
        <p>type=danger size=large</p>
        <my-button type="danger" size="large">danger</my-button>
      </div>
      <div class="sample-button-item">
        <p>disabled</p>
        <my-button size="medium" disabled>sample</my-button>
        <my-button type="primary" size="medium" disabled>primary</my-button>
        <my-button type="danger" size="medium" disabled>danger</my-button>
      </div>
      <div class="sample-button-item">
        <p>round</p>
        <my-button type="primary" size="medium" round>primary</my-button>
        <my-button type="danger" size="medium" round>danger</my-button>
      </div>
    </my-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.sample-button-item {
  margin: 0 auto;
  padding: 20px 0;
  border-bottom: 1px solid #f7f7f7;
  p {
    font-size: 18px;
    margin: 20px 0;
  }
}
</style>