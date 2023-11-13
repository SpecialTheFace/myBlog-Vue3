import { defineStore } from 'pinia'
import { getMessages } from "@/api/message.js";
import { ref } from "vue";

export const useMessageStore = defineStore ( 'Message' , () => {
    const commentInfo = ref ( [] );

    const getBlogMessageList = async ( id ) => {
        const { data : { data : { rows } } } = await getMessages ( 1 , 20 , id )
        commentInfo.value = rows;
    }
    // 对外提供数据
    return {
        commentInfo,
        getBlogMessageList
    }
} )
