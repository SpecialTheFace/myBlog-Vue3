<template>
  <div class="LeaveWord-container">
    <!--留言-->
    <MessageArea></MessageArea>
  </div>
</template>

<script setup>
import MessageArea from '@/components/MessageArea/index.vue'

defineOptions ( {
  name : 'LeaveWord'
} )
</script>
