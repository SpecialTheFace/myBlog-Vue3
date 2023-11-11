import request from './index.js'


// 获取博客列表
export async function getBlogs ( page = 1 , limit = 10 , categoryid = -1 ) {
    return await request.get ( "/api/blog" , {
        params : {
            page ,
            limit ,
            categoryid ,
        } ,
    } );
}

// 获取博客分类
export async function getBlogCategories () {
    return await request.get ( "/api/blogtype" );
}
