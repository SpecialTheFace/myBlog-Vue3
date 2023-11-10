export default [

    {
        name : 'Home' ,
        path : '/' ,
        component : () => import('@/view/Home/index.vue') ,
        meta : {
            title : "首页" ,
        }
    } ,
    {
        name : 'Blog' ,
        path : '/Blog' ,
        component : () => import('@/view/Blog/index.vue') ,
        meta : {
            title : "文章" ,
        }
    } ,
    {
        name : 'About' ,
        path : '/About' ,
        component : () => import('@/view/About/index.vue') ,
        meta : {
            title : "关于我" ,
        }
    } ,
    {
        name : 'Project' ,
        path : '/Project' ,
        component : () => import('@/view/Project/index.vue') ,
        meta : {
            title : "项目" ,
        }
    } ,

]
