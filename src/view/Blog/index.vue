<template>
  <div class="blog-container">
    <el-row>
      <el-col :span="18" class="left">
        <!--博客列表组件-->
        <BlogList></BlogList>
      </el-col>
      <el-col :span="6">
        <!--博客分类组件-->
        <BlogCategory></BlogCategory>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import BlogList from "@/view/Blog/components/BlogList.vue";
import BlogCategory from "@/view/Blog/components/BlogCategory.vue";

defineOptions ( {
  name : 'Blog'
} )
</script>

<style lang="less" scoped>
.blog-container {
  .el-row {
    overflow: hidden;

    .el-col {
      .left {
        overflow-y: auto;
      }

      .right {
        background-color: pink;
      }
    }
  }


}

</style>
