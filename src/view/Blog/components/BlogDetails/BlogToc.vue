<template>
  <div class="blogToc-container">
    <el-tree :data="data" @node-click="handleNodeClick" :highlight-current="true"/>
  </div>
</template>

<script setup>
import { onUpdated , ref } from "vue";

defineOptions ( {
  name : 'BlogToc'
} )
const props = defineProps ( {
  Toc : Array
} )
const data = ref ( [] );
onUpdated ( () => data.value = props.Toc )

const handleNodeClick = ( data ) => document.getElementById ( data.label ).scrollIntoView ( {
  behavior : "smooth" ,
  block : "start" ,
  inline : "nearest"
} );


</script>

<style lang="less" scoped>
.blogToc-container {
  height: 100vh;
}
</style>
