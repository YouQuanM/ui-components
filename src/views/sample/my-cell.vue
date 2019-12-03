<template>
  <my-view>
    <div class="sample-item">
      <my-cell-group title="普通单元格">
        <my-cell value="单元格"></my-cell>
        <my-cell title="单元格" value="内容"></my-cell>
      </my-cell-group>
    </div>
    <div class="sample-item">
      <my-cell-group title="label">
        <my-cell value="单元格"></my-cell>
        <my-cell title="单元格" value="内容" label="详细信息xxx"></my-cell>
      </my-cell-group>
    </div>
    <div class="sample-item">
      <my-cell-group title="右侧箭头">
        <my-cell value="单元格"></my-cell>
        <my-cell arrow title="单元格" value="内容"></my-cell>
      </my-cell-group>
    </div>
    <div class="sample-item">
      <my-cell-group title="icon">
        <my-cell value="单元格"></my-cell>
        <my-cell icon="duigou" title="单元格" value="内容"></my-cell>
      </my-cell-group>
    </div>
  </my-view>
</template>

<script>
export default {
  
}
</script>