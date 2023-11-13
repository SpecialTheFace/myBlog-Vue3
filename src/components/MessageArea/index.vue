<template>
  <div class="messageArea-container">
    <!--评论 / 留言 提交文本域-->
    <CommentForm></CommentForm>
    <!--评论 / 留言 列表-->
    <CommentList></CommentList>
  </div>
</template>

<script setup>
import CommentForm from "@/components/MessageArea/CommentForm.vue";
import CommentList from "@/components/MessageArea/CommentList.vue";

defineOptions ( {
  name : 'MessageArea'
} )
</script>

<style lang="less" scoped>

</style>
