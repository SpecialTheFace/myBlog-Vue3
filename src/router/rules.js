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
        path : '/blog' ,
        component : () => import('@/view/Blog/index.vue') ,
        meta : {
            title : "文章" ,
        }
    } ,
    {
        name : 'About' ,
        path : '/about' ,
        component : () => import('@/view/About/index.vue') ,
        meta : {
            title : "关于我" ,
        }
    } ,
    {
        name : 'Project' ,
        path : '/project' ,
        component : () => import('@/view/Project/index.vue') ,
        meta : {
            title : "项目" ,
        }
    } ,
    {
        name : 'BlogDetails' ,
        path : '/article/:id' ,
        component : () => import('@/view/Blog/components/BlogDetails/index.vue') ,
        meta : {
            title : "博客详情" ,
        }
    } ,
]
