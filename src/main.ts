import { createApp } from 'vue'
import App from './App.vue'
import derui from "../packages/index"
const app =createApp(App)
app.use(derui)
app.mount('#app')