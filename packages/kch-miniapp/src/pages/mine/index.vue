<template>
  <view class="mine-container">
    <view @click="login" class="user-avatar center">
      <image src="../../static/icons/avatar.png" class="avatar"></image>
      <view class="user-name">{{ userName }}</view>
    </view>
    <kch-authorizePhoneNumber ref="AuthorizeRef" />
    <div class="mine-collect">
      <div class="min-collect-content" ref="AuthorizeRef" v-for="item in collectList" :key="item.type">
        <div class="min-icon"></div>
        <div>{{ item.value }}</div>
        <div style="font-weight: 400;">{{ item.name }}</div>
      </div>
    </div>
    <div class="mine-content">
      <div class="mine-content-help" ref="AuthorizeRef" v-for="item in dataList" :key="item.type">
        <div>{{ item.name }}</div>
        <div style="color: rgb(59, 59, 59); font-weight: 900;">></div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userName = '奔跑的小超超';
const AuthorizeRef = ref();
const dataList = [{
  name: '我的资料',
  type: 'myInformation'
}, {
  name: '购买记录',
  type: 'purchaseRecord'
}, {
  name: '帮助&客服',
  type: 'help'
}, {
  name: '设置',
  type: 'settings'
}]
const collectList = [
  { name: '我的证书', value: 178, type: 'certificate' },
  { name: '我的课程', value: 128, type: 'course' },
  { name: '我的收藏', value: 4.5, type: 'collect' }
]

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

  .mine-collect {
    display: flex;
    width: 490rpx;
    height: 176rpx;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24rpx;
    font-weight: 600;
    font-family: '黑体';
    margin-top: 60rpx;

    .min-collect-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .min-icon {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        background-color: rgba(255, 231, 248, 1);
      }
    }
  }

  .mine-content {
    font-size: 32rpx;
    width: 100%;
    padding: 0 40rpx;
    box-sizing: border-box;
    font-weight: 500;
    font-family: '黑体';
    margin-top: 76rpx;
    height: 456rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .mine-content-help {
      display: flex;
      justify-content: space-between;

    }
  }
}</style>
