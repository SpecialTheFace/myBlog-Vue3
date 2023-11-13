<template>
  <div class="CommentForm-container">
    <el-form :model="form" label-width="120px">
      <el-form-item>
        <el-input v-model="form.nickname" placeholder="用户名"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.content" type="textarea" placeholder="请输入内容......"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="publishComment">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { onMounted , reactive } from 'vue'
import { useRoute } from 'vue-router'
import { postMessage } from "@/api/message.js";
import { useMessageStore } from "@/stores/messageStore.js";
// import { ElMessage } from "element-plus";

defineOptions ( {
  name : 'CommentForm'
} )
const messageStore = useMessageStore ();
const router = useRoute ();
onMounted ( () => form.blogId = router.params.id );
const form = reactive ( {
  nickname : '' ,
  content : '' ,
  blogId : ''
} )

// 提交一条新评论
const publishComment = async () => {
  try {
    await postMessage ( form );
    await messageStore.getBlogMessageList ( router.params.id );
    ElMessage ( {
      message : '评论成功' ,
      type : "success"
    } )
    form.blogId = ''
    form.content = ''
    form.nickname = ''
  } catch ( e ) {
    ElMessage ( {
      message : e.message ,
      type : "error"
    } )
  }

}
</script>

<style lang="less" scoped>
.CommentForm-container {
  margin-top: 20px;

  .el-form {
    .el-form-item {
      &:deep(.el-form-item__content) {
        margin-left: 15px !important;

        .el-input {
          width: 240px;
        }
      }

    }

  }
}
</style>
