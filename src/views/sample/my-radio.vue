<template>
  <div>
    <div class="sample-item">
      <my-radio-group v-model="value">
        <my-radio name="test1"></my-radio>
        <my-radio name="test2"></my-radio>
        <my-radio name="test3"></my-radio>
      </my-radio-group>
    </div>
    <div class="sample-item">
      <my-radio v-model="radio" name="test1"></my-radio>
      <my-radio v-model="radio" name="test2"></my-radio>
      <my-radio v-model="radio" name="test3"></my-radio>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: 'test1',
      value: 'test1'
    }
  }
}
</script>