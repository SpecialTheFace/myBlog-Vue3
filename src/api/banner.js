import request from './index.js'

// 获取首页标语
export async function getBanners () {
    return await request.get ( "/api/banner" );
}
