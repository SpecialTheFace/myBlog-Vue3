<template>
  <div class="CommentList-container">
    <div class="main">
      <el-card class="box-card" shadow="hover" v-for="item in messageStore.commentInfo">
        <template #header>
          <div class="card-header">
            <el-avatar
                :src="server_URL + item.avatar"
            />
            <span style="color: #66a03c">{{ item.nickname }}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp; {{ formatDate ( item.createDate ) }}</span>
          </div>
        </template>
        <div class="text item">{{ item.content }}</div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { server_URL } from "@/utils/urlConfig.js";
import formatDate from "@/utils/formatData.js";
import { useMessageStore } from "@/stores/messageStore.js";

defineOptions ( {
  name : 'CommentList'
} )
const route = useRoute ();
const messageStore = useMessageStore ();
onMounted ( async () => {
  await messageStore.getBlogMessageList ( route.params.id )
} )
</script>

<style lang="less" scoped>
.CommentList-container {
  display: flex;
  align-items: center;

  .main {
    flex: 18;
    margin: 10px 0;

    .el-card {
      margin: 10px 0;
      //border-radius: 15px;
    }
  }
}
</style>
