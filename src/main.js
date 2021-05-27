import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlusPlugin from './plugins/element-plus'
import componentsPlugin from './plugins/components'
import globalPlugins from './plugins/global'
import './styles/app.scss'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(ElementPlus, { size: 'default', zIndex: 3000 })
app.use(elementPlusPlugin)
app.use(componentsPlugin)
app.use(globalPlugins)

app.mount('#app')
