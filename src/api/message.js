import request from './index.js'

// 获取评论列表
export async function getMessages ( page = 1 , limit = 20 , blogid ) {
    return await request.get ( "/api/message" , {
        params : {
            page ,
            limit ,
            blogid
        } ,
    } );
}

/*{
    "code": 0,
    "msg": "",
    "data": {
    "total": 3,
        "rows": [
        {
            "id": 5,
            "nickname": "蛤蟆",
            "content": "蛤蟆也是笑了",
            "createDate": "1699888879773",
            "avatar": "/static/avatar/rainbow.gif",
            "blogId": 2
        },
        {
            "id": 4,
            "nickname": "青蛙",
            "content": "青蛙叫",
            "createDate": "1699888415077",
            "avatar": "/static/avatar/fire.gif",
            "blogId": 2
        },
        {
            "id": 3,
            "nickname": "一只青蛙",
            "content": "青蛙呱呱叫",
            "createDate": "1699888355969",
            "avatar": "/static/avatar/scare.gif",
            "blogId": 2
        }
    ]
}
}*/


// 新增评论
// 需携带 nickname 、 content 、 blogId
export async function postMessage ( msgInfo ) {
    return await request.post ( "/api/message" , msgInfo );
}

// 响应
/*
{
    "code": 0,
    "msg": "",
    "data": {
    "id": 1,
        "nickname": "哈哈",
        "content": "哈哈的测试评论",
        "blogId": "3",
        "createDate": 1699887736113,
        "avatar": "/static/avatar/whatthat.png"
}
}*/
