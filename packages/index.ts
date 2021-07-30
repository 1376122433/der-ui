import { App } from 'vue'
import Button from './button/button.vue'
import "../style/index.scss"

const _button = Button.install = (app: App): void => {
  app.component(Button.name, Button)
}
export default _button