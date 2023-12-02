<template>
  <div class="progress">
    <div class="cardFoot"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  fatherMessage?: string;
  color?: string;
  width?: string;
}
defineProps<Props>();
</script>
<style lang="scss" scoped>
.progress {
  width: 100%;
  background: rgba(244, 243, 253, 1);
  height: 12rpx;

  .cardFoot {
    width: v-bind(width);
    height: 12rpx;
    background: linear - gradient(90deg, rgba(255, 255, 255, 0) 0%, v-bind(color) 100%);
  }
}
</style>
