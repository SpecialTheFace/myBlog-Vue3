<template>
  <div class="blogToc-container">
    <el-tree :data="data" @node-click="handleNodeClick" :highlight-current="true"/>
  </div>
</template>

<script setup>
defineOptions ( {
  name : 'BlogToc'
} )

const handleNodeClick = ( data ) => {
  console.log ( data )
}

const data = [
  {
    label : 'Level one 1' ,
    children : [
      {
        label : 'Level two 1-1' ,
        children : [
          {
            label : 'Level three 1-1-1' ,
          } ,
        ] ,
      } ,
    ] ,
  } ,
  {
    label : 'Level one 2' ,
    children : [
      {
        label : 'Level two 2-1' ,
        children : [
          {
            label : 'Level three 2-1-1' ,
          } ,
        ] ,
      } ,
      {
        label : 'Level two 2-2' ,
        children : [
          {
            label : 'Level three 2-2-1' ,
          } ,
        ] ,
      } ,
    ] ,
  } ,
  {
    label : 'Level one 3' ,
    children : [
      {
        label : 'Level two 3-1' ,
        children : [
          {
            label : 'Level three 3-1-1' ,
          } ,
        ] ,
      } ,
      {
        label : 'Level two 3-2' ,
        children : [
          {
            label : 'Level three 3-2-1' ,
          } ,
        ] ,
      } ,
    ] ,
  } ,
]

const defaultProps = {
  children : 'children' ,
  label : 'label' ,
}
</script>

<style lang="less" scoped>
.blogToc-container {
  height: 100vh;
}
</style>
