import Cell from './cell.vue'
import CellGroup from './cell-group.vue'

Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}
CellGroup.install = function (Vue) {
  Vue.component(CellGroup.name, CellGroup)
}
export {Cell, CellGroup}
