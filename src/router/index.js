import { createRouter , createWebHashHistory } from 'vue-router'


// 导入路由规则
import routes from './rules.js'

export default createRouter ( {
    history : createWebHashHistory () ,
    routes ,
    scrollBehavior () {
        // 跳转后始终滚动到顶部
        return { top : 0 }
    } ,
    linkActiveClass : 'active'
} )
