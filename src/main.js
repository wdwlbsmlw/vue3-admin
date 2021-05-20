import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerComponents } from './plugins/components'
import './styles/app.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'default', zIndex: 3000 })

registerComponents(app)

app.mount('#app')
