<template>
  <div class="about-container">
    <Skeleton :is-loading="isLoading" v-if="isLoading"></Skeleton>
    <iframe
        v-show="!isLoading"
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="100%"
        height="100%"
        src="https://juejin.cn/user/180798307173943/posts">
    </iframe>
  </div>
</template>

<script setup>
import { onMounted , ref } from "vue";
import { getAbout } from "@/api/about.js";
import Skeleton from '@/components/Skeleton/index.vue'

const url = ref ( '' )
defineOptions ( {
  name : 'About'
} )
const isLoading = ref ( true )
onMounted ( async () => {
  const { data : { data } } = await getAbout ();
  url.value = data;
  setTimeout ( () => {
    isLoading.value = false
  } , 3000 )
} )
</script>

<style lang="less" scoped>
.about-container {
  overflow: hidden;
  height: 100vh;
}
</style>
