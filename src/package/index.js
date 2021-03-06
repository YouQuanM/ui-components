import Button from './button'
import Tag from './tag'
import View from './view'
// import {List, ListContent, ListFooter, ListHeader} from './list'
import {List, ListColumn} from './list'
import Icon from './icon'
import {Cell, CellGroup} from './cell'
import {Radio, RadioGroup} from './radio'

const components = [
  Button,
  View,
  List, 
  ListColumn,
  // ListContent, 
  // ListFooter, 
  // ListHeader,
  Tag,
  Icon,
  Cell,
  CellGroup,
  Radio,
  RadioGroup
]
function install (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach(Component => {
    Component.install(Vue)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

const MyComponent = {
  /* eslint-disable no-undef */
  install
}

export default MyComponent
