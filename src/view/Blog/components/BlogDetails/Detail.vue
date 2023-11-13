<template>
  <div class="detail-container">
    <!-- 骨架屏-->
    <Skeleton :isLoading="haveInfo"></Skeleton>
    <div class="main">
      <!--文章标题-->
      <div class="title">{{ blogStore.blogTitle }}</div>
      <div class="aside">
        <span>日期: {{ formatDate ( blogStore.blogCreateDate ) }}</span>
        <span>浏览: {{ blogStore.blogScanNumber }}</span>
        <span>评论: {{ blogStore.blogCommentNumber }}</span>
      </div>
      <div class="markdown-container toastui-editor-contents" v-html="blogStore.markdown">
      </div>
    </div>
  </div>
</template>

<script setup>
// MarkDown 样式
import 'prismjs/themes/prism.css';
// 代码高亮
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import formatDate from "@/utils/formatData.js";
import { useBlogStore } from "@/stores/blogStore.js";
import Skeleton from '@/components/Skeleton/index.vue'

defineOptions ( {
  name : 'Detail'
} )
defineProps ( {
  haveInfo : Boolean
} )
const blogStore = useBlogStore ();

</script>

<style lang="less" scoped>

.detail-container {
  padding-top: 20px;

  .title {
    font-size: 28px;
    font-weight: 700;
    margin: 0 35px;
  }

  .aside {
    margin-top: 20px;

    span {
      padding: 0 15px;
      font-size: 20px;
      color: #b4b8bc;
    }
  }

  .markdown-container {
    margin-top: 20px;
    padding-left: 15px;


  }
}


</style>
