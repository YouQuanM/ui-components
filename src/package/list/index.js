import List from './index.vue'
import ListContent from './content.vue'
import ListFooter from './footer.vue'
import ListHeader from './header.vue'
List.install = function (Vue) {
  Vue.component(List.name, List)
}
ListContent.install = function (Vue) {
  Vue.component(ListContent.name, ListContent)
}
ListFooter.install = function (Vue) {
  Vue.component(ListFooter.name, ListFooter)
}
ListHeader.install = function (Vue) {
  Vue.component(ListHeader.name, ListHeader)
}

export {List, ListContent, ListFooter, ListHeader}
