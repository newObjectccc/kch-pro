<template>
  <div class="noNews">
    <img src="../../imgs/no.png" class="newImage" />
    <div class="text">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
}
defineProps<Props>();
</script>
<style lang="scss" scoped>
.noNews {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .newImage {
    width: 320rpx;
    height: 320rpx;
  }
  .text {
    font-size: 32rpx;
    color: rgba(31, 31, 57, 1);
  }
}
</style>
