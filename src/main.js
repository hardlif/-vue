import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// elementUI引入
import ElementPlus from 'element-plus'

import './assets/main.css'
// 引入iconfont css
import "./assets/iconfont/iconfont.css"
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'    

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 使用elementUI
app.use(ElementPlus, { size: 'small', zIndex: 3000 })    

app.mount('#app')

