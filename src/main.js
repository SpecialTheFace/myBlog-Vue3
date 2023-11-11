import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 引入样式初始化
import 'normalize.css'
import './style/global.css'
import router from './router/index.js'

const pinia = createPinia ()
createApp ( App ).use ( router ).use ( pinia ).mount ( '#app' )
