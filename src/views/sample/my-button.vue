<template>
  <div>
    <div>
      <p>普通按钮 size默认small</p>
      <my-button>sample</my-button>
    </div>
    <div>
      <p>type=primary size=mini</p>
      <my-button type="primary" size="mini">primary</my-button>
    </div>
    <div>
      <p>type=warning size=small(可以不写，默认)</p>
      <my-button type="warning">warning</my-button>
    </div>
    <div>
      <p>type=success size=medium</p>
      <my-button type="success" size="medium">success</my-button>
    </div>
    <div>
      <p>type=info size=medium</p>
      <my-button type="info" size="medium">info</my-button>
    </div>
    <div>
      <p>type=danger size=large</p>
      <my-button type="danger" size="large">danger</my-button>
    </div>
    <div>
      <p>disabled</p>
      <my-button size="medium" disabled>sample</my-button>
      <my-button type="primary" size="medium" disabled>primary</my-button>
      <my-button type="danger" size="medium" disabled>danger</my-button>
    </div>
    <div>
      <p>round</p>
      <my-button type="primary" size="medium" round>primary</my-button>
      <my-button type="danger" size="medium" round>danger</my-button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>