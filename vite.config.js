import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 关键代码
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig ( {
    plugins : [ vue () ,
        AutoImport ( {
            resolvers : [
                // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                ElementPlusResolver () ,
                // 自动导入图标组件
                IconsResolver ( {
                    prefix : 'Icon' ,
                } ) , ] ,
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports : [ 'vue' ] ,
        } ) ,
        Components ( {
            resolvers : [
                // 自动导入 Element Plus 组件
                ElementPlusResolver () ,
                // 自动注册图标组件
                IconsResolver ( {
                    enabledCollections : [ 'ep' ] ,
                } )
            ] ,
        } ) ,
        Icons ( {
            autoInstall : true ,
        } ) ,

    ] ,
    resolve : {
        alias : {
            // 关键代码
            '@' : path.resolve ( __dirname , './src' )
        }
    }
} )

