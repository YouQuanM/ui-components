import Radio from './radio.vue'
Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}
import RadioGroup from './radio-group.vue'
RadioGroup.install = function (Vue) {
  Vue.component(RadioGroup.name, RadioGroup)
}
export {Radio, RadioGroup}