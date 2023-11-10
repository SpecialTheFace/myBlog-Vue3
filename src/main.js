import { createApp } from 'vue'
import App from './App.vue'
// 引入样式初始化
import 'normalize.css'
import './style/global.css'
import router from './router/index.js'

createApp ( App ).use ( router ).mount ( '#app' )
// createApp ( App ).mount ( '#app' )
