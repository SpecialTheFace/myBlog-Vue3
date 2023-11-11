<template>
  <div class="blogCategory-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header" style="text-align: center;font-size: 28px;font-weight: 600">
          <span>文章分类</span>
          <el-button class="button" type="success" round text @click="getAllBlogListNumber">全部 {{ allBlogListNumber }}
            篇
          </el-button>
        </div>
      </template>

      <el-tag v-for="item in category" :key="item.id" size="large" round effect="plain"
              @click="changeCategory(item.id)">{{
          item.name + '&nbsp&nbsp共&nbsp&nbsp' + item.articleCount + '&nbsp&nbsp篇'
        }}
      </el-tag>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted , ref } from "vue";
import { getBlogCategories } from "@/api/blog.js";
// 导入仓库
import { useBlogStore } from "@/stores/blogStore.js";

defineOptions ( {
  name : 'BlogCategory'
} )

// 文章分类列表数据
const category = ref ( null );
const blogStore = useBlogStore ();
const allBlogListNumber = ref ( 0 );

onMounted ( async () => {
  await getAllBlogListNumber ();
  const { data : res } = await getBlogCategories ();
  category.value = res.data;
} )

// 获取特定分类
const changeCategory = async ( id ) => {
  await blogStore.getCategoryOne ( 1 , 10 , id );
}
// 获取所有分类数，并更新 store中 allBlogList
const getAllBlogListNumber = async () => {
  await blogStore.getAllBlogList ()
  allBlogListNumber.value = blogStore.blogNumber;
}
</script>

<style lang="less" scoped>
.blogCategory-container {
  height: 100vh;

  .el-card {
    height: 100%;

    :deep(.el-card__body) {
      .el-tag {
        cursor: pointer;
        margin: 5px 10px;
      }
    }
  }

}
</style>
