<template>
  <div class="blogList-container">
    <!-- 骨架屏-->
    <Skeleton :isLoading="isLoading"></Skeleton>
    <!--main-->
    <RouterLink :to="{
        name:'BlogDetails',
        params:{
            id:item.id,
        }
      }" v-for="item in blogList" :key="item.id">
      <!--卡片-->
      <el-card shadow="hover">
        <!-- 左侧图-->
        <div class="thumb">
          <el-image :src="server_URL + item.thumb" style="width: 235px;height: 246px"></el-image>
        </div>
        <!--右侧信息-->
        <div class="aside">
          <div class="title">
            <h2>{{ item.title }}</h2>
          </div>
          <div class="info">
            <span>日期：{{ formatDate ( item.createDate ) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </el-card>
    </RouterLink>
  </div>
</template>

<script setup>
import { onMounted , ref , watch } from 'vue'
import { server_URL } from '@/utils/urlConfig.js'
import formatDate from "@/utils/formatData.js";
import { useBlogStore } from "@/stores/blogStore.js";
import Skeleton from '@/components/Skeleton/index.vue'

defineOptions ( {
  name : 'BlogList'
} )
const blogList = ref ( [] );
const isLoading = ref ( true )
const blogStore = useBlogStore ();
onMounted ( async () => {
  await blogStore.getAllBlogList ()
  blogList.value = blogStore.allBlogList;
  if ( blogList.value.length>0 ) isLoading.value = false;
} )
watch ( () => blogStore.allBlogList[ "0" ]?.categoryId , () => {
  blogList.value = blogStore.allBlogList;
} , {
  deep : true
} )

</script>

<style lang="less" scoped>
.blogList-container {
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;

  .el-card :deep(.el-card__body) {
    display: flex;

    .thumb {
      margin-right: 20px;
    }

    .aside {
      display: flex;
      flex-direction: column;

      .info {
        margin-bottom: 20px;

        span {
          color: #c9cbce;
          margin-right: 15px;
        }
      }

      .desc {
        line-height: 26px
      }
    }
  }
}

// 样式穿透

</style>
