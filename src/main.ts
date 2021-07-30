import { createApp } from 'vue'
import App from './App.vue'
import derui from "../packages/index"
import router from "./router"
const app =createApp(App)
app.use(router);
app.use(derui)
app.mount('#app')