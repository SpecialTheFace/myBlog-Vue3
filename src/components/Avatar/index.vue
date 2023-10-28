<script setup>
defineOptions ( {
  name : 'Avatar'
} )
defineProps ( {
  width : {
    type : String ,
    default : '100px'
  } ,
  height : {
    type : String ,
    default : '100px'
  }
} )
const url = 'https://foruda.gitee.com/avatar/1690434074908342312/11570217_little-snail-reading_1690434074.png!avatar200'
</script>

<template>
  <el-image :style="{width:width,height:height}" :src="url"/>
</template>

<style scoped lang="less">
.el-image  {
  margin-top:20px;
  :deep(img) {
    border-radius: 50%;

  }
}

</style>
