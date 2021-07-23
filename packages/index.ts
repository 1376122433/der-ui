import { App } from 'vue'
import Button from './button/button.vue'
import "../src/style/index.css"

const _button = Button.install = (app: App): void => {
  app.component(Button.name, Button)
}
export default _button

// const components = [
//   Button
// ]
// const install = function () {
//   components.map(component => component.install = (app: App): void => {
//     app.component(component.name, component)
//   });
// };
// export default install
