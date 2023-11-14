import request from './index.js'

// 获取评论列表、留言
export async function getMessages ( page = 1 , limit = 20 , blogid ) {
    return await request.get ( "/api/message" , {
        params : {
            page ,
            limit ,
            blogid
        } ,
    } );
}


// 新增评论 、 留言
// 需携带 nickname 、 content 、 blogId
export async function postMessage ( msgInfo ) {
    return await request.post ( "/api/message" , msgInfo );
}
