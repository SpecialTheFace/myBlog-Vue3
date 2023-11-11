import { ref } from "vue";
import { defineStore } from 'pinia'
import { getBlogs } from "@/api/blog.js";

export const useBlogStore = defineStore ( 'blog' , () => {
    // state
    const blogNumber = ref ( 0 );
    const allBlogList = ref ( [] );
    // action

    // 获取目标分类所有文章
    const getCategoryOne = async ( page , limit , categoryId ) => {
        // blogOneOfInfo.value = [];
        const { data : res } = await getBlogs ( page , limit , categoryId );
        // blogOneOfInfo.value = res.data.rows;
        allBlogList.value = res.data.rows;
    }

    // 获取所有文章列表
    const getAllBlogList = async () => {
        blogNumber.value = 0;
        const { data : res } = await getBlogs ();
        allBlogList.value = res.data.rows;
        blogNumber.value = res.data.rows.length
    }
    // 对外提供数据
    return {
        blogNumber ,
        allBlogList ,
        getCategoryOne ,
        getAllBlogList
    }
} )
