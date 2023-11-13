<template>
  <div class="home-container">
    <el-carousel height="100vh" direction="vertical" :interval="3000" :autoplay="true" arrow="always" trigger="hover">
      <el-carousel-item v-for="item in bannerInfo" :key="item.id">
        <el-image :src="item.bigImg" fit="fill" loading="lazy" style="height: 100vh; "/>
        <div class="info">
          <p class="title">{{ item.title }}</p>
          <p class="description">{{ item.description }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { onMounted , ref } from "vue";
import { getBanners } from "@/api/banner.js";
import { server_URL } from '@/utils/urlConfig.js'

defineOptions ( {
  name : "Home"
} )
// banner 数据
let bannerInfo = ref ( null );
onMounted ( async () => {
  const { data : res } = await getBanners ();
  bannerInfo.value = res.data;
  bannerInfo.value.forEach ( ( item ) => {
    item.bigImg = server_URL + item.bigImg;
  } )

} )
</script>

<style lang="less" scoped>
.home-container {

  .el-carousel {
    width: 100%;
    height: 100%;

    .el-carousel__item {
      .info {
        width: 800px;
        height: 100px;
        position: absolute;
        top: 70%;
        left: 30px;

        .title {
          font-size: 30px;
          font-weight: 700;
          color: white;
          position: absolute;
          top: 20px;
          left: 30px;
        }

        .description {
          font-size: 25px;
          font-weight: 500;
          position: absolute;
          top: 70px;
          left: 30px;
          color: white;

        }
      }

    }
  }
}


</style>
