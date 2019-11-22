import Button from './button'
import View from './view'

const components = [
  Button,
  View
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

const GlobalComponent = {
  /* eslint-disable no-undef */
  install
}

export default GlobalComponent
