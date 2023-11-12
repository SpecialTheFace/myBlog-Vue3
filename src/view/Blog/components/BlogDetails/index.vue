<template>
  <div class="blogDetails-container">
    <el-row>
      <el-col :span="18">
        <!--文章内容-->
        <Detail></Detail>
        <!--文章评论-->
        ================================ <br/>
        文章评论
      </el-col>
      <el-col :span="6">
        <!--文章 TOC-->
        <BlogToc></BlogToc>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

import Detail from './Detail.vue'
import BlogToc from './BlogToc.vue'

defineOptions ( {
  name : 'BlogDetails'
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
