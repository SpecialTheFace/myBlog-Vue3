<template>
  <div class="blogDetails-container">
    <el-row>
      <el-col :span="18">
        <!--文章内容-->
        <Detail :haveInfo="isLoading"></Detail>
        <!--文章评论-->
        ================================ <br/>
        文章评论
      </el-col>
      <el-col :span="6">
        <!--文章 TOC-->
        <BlogToc :Toc="tocArray"></BlogToc>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

import Detail from './Detail.vue'
import BlogToc from './BlogToc.vue'
import { useBlogStore } from "@/stores/blogStore.js";
import { useRoute } from "vue-router";
import { onMounted , ref } from "vue";

defineOptions ( {
  name : 'BlogDetails'
} )
const isLoading = ref ( true )
const tocArray = ref ( [ '666' ] );
const blogStore = useBlogStore ();
const route = useRoute ();
onMounted ( async () => {
  isLoading.value = await blogStore.getBlogDetail ( route.params.id )
  tocArray.value = blogStore.blogToc;
} )
</script>

<style lang="less" scoped>

.el-row {
  .el-col:first-child {
    height: 100vh;
    overflow-y: auto;

  }
}
</style>
