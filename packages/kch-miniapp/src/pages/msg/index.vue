<template>
  <view class="msg-container"> {{ name }} </view>
</template>

<script setup lang="ts">
const name = '消息列表';
</script>

<style lang="scss" scoped>
.msg-container {
  font-size: 15rpx;
}
</style>
