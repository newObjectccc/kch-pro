<template>
  <uni-popup
    ref="popup"
    mask-background-color="rgba(0,0,0,0.8)"
    :safe-area="false"
    :type="props.type"
    @change="onHandleChange"
    @mask-click="maskClick"
  >
    <view
      class="popup-container"
      :style="{
        'background-color': props.backgroundColor,
        'padding-left': props.padding,
        'padding-right': props.padding,
      }"
      :class="[...getClass]"
      @touchmove.stop.prevent=""
    >
      <!-- 自定义内容 -->
      <slot name="custom-slot" />
      <!-- header -->
      <view v-if="props.close" class="popup-container-header">
        <!-- 展示关闭按钮 -->
        <view class="header-content"><slot name="header" /></view>
        <view class="close-content" :style="'right:' + right" @click="close">
          <slot name="close-icon">
            <image class="close-icon" src="@/static/icons/close.png" mode="aspectFill" />
          </slot>
        </view>
      </view>
      <view class="popup-container-body">
        <slot />
      </view>

      <view class="popup-container-footer">
        <slot name="footer" />
      </view>
    </view>
  </uni-popup>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// 二次封装弹窗
interface PropsType {
  type: 'top' | 'left' | 'right' | 'center' | 'bottom';
  close: boolean;
  safeArea: boolean;
  backgroundColor: string;
  padding: string;
}
const props = withDefaults(defineProps<PropsType>(), {
  type: 'bottom',
  safeArea: true, // 是否开启安全区域适配
  close: true,
  backgroundColor: '#fff',
  padding: '28rpx',
});
const emits = defineEmits<{ (e: 'close-popup'): void }>();

const getClass = computed(() => {
  const classArr = ['popup-' + props.type];
  if (['bottom', 'left', 'right'].includes(props.type) && props.safeArea) {
    classArr.push('safe-area');
  }
  return classArr;
});

const maskClick = () => {
  emits('close-popup');
};

const right = computed(() => {
  if (['0', '0rpx', '0px'].includes(props.padding)) {
    return '32rpx';
  }
  return '-4rpx';
});

const popup = ref();

const open = () => {
  popup.value.open();
};

const close = () => {
  // #ifdef MP-ALIPAY
  emits('close-popup');
  // #endif
  popup.value.close();
};

const onHandleChange = (e: { show: boolean }) => {
  if (!e.show) {
    emits('close-popup');
  }
};

defineExpose({
  open,
  close,
});
</script>

<style scoped lang="scss">
.popup-container {
  position: relative;
  box-sizing: border-box;
  // padding: 0 28rpx;
  padding-left: v-bind('props.padding');
  padding-right: v-bind('props.padding');
  background-color: v-bind('props.backgroundColor');
  &-header {
    display: flex;
    position: relative;
    .header-content {
      flex: 1;
      text-align: center;
      box-sizing: border-box;
      padding: 16rpx 90rpx 42rpx;
    }
    .close-content {
      position: absolute;
      top: 0;
      right: -4rpx;
      height: 90rpx;
      width: 90rpx;
      text-align: right;
      box-sizing: border-box;
      padding: 16rpx 0 42rpx;
      image {
        width: 32rpx;
        height: 32rpx;
      }
    }
  }
}
.popup-bottom {
  border-top-left-radius: 40rpx;
  border-top-right-radius: 40rpx;
}
</style>
