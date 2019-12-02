import List from './index.vue'
// import ListContent from './content.vue'
// import ListFooter from './footer.vue'
// import ListHeader from './header.vue'
import ListColumn from './list-column.vue'
List.install = function (Vue) {
  Vue.component(List.name, List)
}
// ListContent.install = function (Vue) {
//   Vue.component(ListContent.name, ListContent)
// }
// ListFooter.install = function (Vue) {
//   Vue.component(ListFooter.name, ListFooter)
// }
// ListHeader.install = function (Vue) {
//   Vue.component(ListHeader.name, ListHeader)
// }
ListColumn.install = function (Vue) {
  Vue.component(ListColumn.name, ListColumn)
}

export {List, ListColumn}
