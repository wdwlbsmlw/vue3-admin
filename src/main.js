import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'default', zIndex: 3000 })
app.mount('#app')
