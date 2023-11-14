<template>
  <!-- 骨架屏-->
  <div class="skeleton" v-show="isLoading">
    <el-skeleton :rows="15" :loading="isLoading" :animated="true"/>
    <br/>
    <!--    <el-skeleton style="&#45;&#45;el-skeleton-circle-size: 100px">-->
    <!--      <template #template>-->
    <!--        <el-skeleton-item variant="circle" :loading="isLoading"/>-->
    <!--      </template>-->
    <!--    </el-skeleton>-->
  </div>
</template>

<script setup>
defineOptions ( {
  name : 'Skeleton'
} )
defineProps ( {
  isLoading : Boolean
} )
</script>

