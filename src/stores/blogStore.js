import { ref } from "vue";
import { defineStore } from 'pinia'
import { getBlog , getBlogs } from "@/api/blog.js";
import formatToc from '@/utils/formatToc.js'

export const useBlogStore = defineStore ( 'blog' , () => {
    // state
    const blogNumber = ref ( 0 );
    const allBlogList = ref ( [] );

    /*blogDetail*/
    const blogTitle = ref ( '' );
    const blogCreateDate = ref ( 0 );
    const blogScanNumber = ref ( 0 );
    const blogCommentNumber = ref ( 0 );
    // 文章目录
    const blogToc = ref ( [] );
    const markdown = ref ( '' )
    // action

    // 获取目标分类所有文章
    const getCategoryOne = async ( page , limit , categoryId ) => {
        const { data : res } = await getBlogs ( page , limit , categoryId );
        allBlogList.value = res.data.rows;
    }

    // 获取所有文章列表
    const getAllBlogList = async () => {
        blogNumber.value = 0;
        const { data : res } = await getBlogs ();
        allBlogList.value = res.data.rows;
        blogNumber.value = res.data.rows.length
    }

    // 根据 id 获取文章信息
    const getBlogDetail = async ( id ) => {
        const { data : res } = await getBlog ( id );
        const response = res.data
        markdown.value = response.htmlContent;
        blogTitle.value = response.title;
        blogCreateDate.value = +response.createDate;
        blogScanNumber.value = +response.scanNumber;
        blogCommentNumber.value = +response.commentNumber;
        blogToc.value = formatToc ( response.toc );
        return Promise.resolve ( false );
    }

    // 对外提供数据
    return {
        blogNumber ,
        allBlogList ,
        blogTitle ,
        blogCreateDate ,
        blogScanNumber ,
        blogCommentNumber ,
        blogToc ,
        markdown ,
        getCategoryOne ,
        getAllBlogList ,
        getBlogDetail
    }
} )
