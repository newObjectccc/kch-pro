<template>
  <kch-popup ref="popup" mask-background-color="rgba(0,0,0,0.8)" :safe-area="false">
    <template #custom-slot>
      <view class="top-title">登录后可体验更多功能哦</view>
    </template>
    <view class="auth-container">
      <button withCredentials="true" class="login-btn" @click="authPrivacy">一键登录</button>

      <!-- 协议须知 -->
      <view class="agreement-content">
        <!-- 单选框 -->
        <view class="radio-group" @click="radioChange">
          <image v-if="!checked" class="icon" src="../../static/icons/unchecked.png" mode="widthFix" />
          <image v-else class="icon" src="../../static/icons/checked.png" mode="widthFix" />
          <text class="tips"> 登录即表示已阅读并同意 </text>
        </view>

        <view class="text-line">
          <view class="link">
            <text> 《用户须知》 </text>
          </view>
          <view class="link">
            <text> 《隐私政策》 </text>
          </view>
        </view>
      </view>
    </view>
  </kch-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userName = '用户名';
const popup = ref();
const checked = ref<boolean>(false);

const open = () => {
  popup.value.open();
};
const close = () => {
  popup.value.close();
};

const radioChange = () => {
  checked.value = !checked.value;
};

// 获取手机号码，登录
const getPhoneNumber = async (e: AnyObject) => {
  uni.showLoading({
    title: '加载中...',
  });
  const data = e['detail'];
  if (!data || (data.errMsg && data.errMsg.includes('fail'))) {
    return authorizePhoneError();
  }
  login(data);
};

const login = async (data: AnyObject) => {};

const authorizePhoneError = () => {
  // 授权失败
  uni.hideLoading();
  uni.showToast({
    title: '获取手机号失败,请重试~',
    icon: 'none',
    duration: 3000,
  });
};

defineExpose({
  open,
  close,
});
</script>

<style lang="scss" scoped>
.top-title {
  position: absolute;
  top: 26rpx;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 28rpx;
  font-weight: bold;
}
.auth-container {
  padding: 32rpx;
  position: relative;
  border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx;
  box-sizing: border-box;
  background-color: #fff;

  .login-btn {
    margin-top: 26rpx;
    height: 96rpx;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60rpx;
    font-family: 'PingFang SC';
    font-size: 32rpx;
    color: #fff;
    background-color: $kch-theme-color;
  }

  .agreement-content {
    margin-top: 38rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .radio-group {
      display: flex;
      align-items: center;
      image {
        width: 24rpx;
        height: 24rpx;
        margin-right: 8rpx;
        margin-top: 4rpx;
      }
      .tips {
        font-size: 24rpx;
      }
    }
    text {
      font-weight: 400;
      font-size: 24rpx;
      font-family: 'PingFang SC';
      font-style: normal;
      color: $kch-color-subtitle;
      margin-top: 4rpx;
    }
    .text-line {
      display: flex;
      align-items: center;
      .link {
        display: flex;
        align-items: center;
      }
      .link text {
        color: $kch-theme-color;
      }
    }
  }
}
</style>
