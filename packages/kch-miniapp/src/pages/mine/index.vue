<template>
  <view class="mine-container">
    <view @click="login" class="user-avatar center">
      <image src="../../static/icons/avatar.png" class="avatar"></image>
      <view class="user-name">{{ userName }}</view>
    </view>
    <kch-authorizePhoneNumber ref="AuthorizeRef" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userName = '奔跑的小超超';
const AuthorizeRef = ref();

const login = () => {
  AuthorizeRef.value.open();
};
</script>

<style lang="scss" scoped>
.mine-container {
  font-size: 32rpx;
  width: 100%;
  height: 100vh;
  .user-avatar {
    margin-top: 200rpx;
    flex-direction: column;
    .avatar {
      width: 200rpx;
      height: 200rpx;
    }
    .user-name {
      font-size: 32rpx;
      margin-top: 20rpx;
    }
  }
}
</style>
