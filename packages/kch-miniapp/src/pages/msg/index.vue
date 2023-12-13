<template>
  <view class="msg-container">
    <div class="msg-topTitle">{{ name }}</div>
    <div class="msg-content" ref="AuthorizeRef" v-for="item in list" :key="item.name">
      <div class="msg-contentCard">
        <div :class="item.type === 'buy' ? 'contentLeft' : 'activeContentLeft'"></div>
        <div class="contentright">
          <div>{{ item.name }}</div>
          <div style="color: rgba(184, 184, 210,1);">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const name = '消息列表';
const AuthorizeRef = ref();
const list = [
  { name: '购买成功通知', time: '刚刚', type: 'buy' },
  { name: '恭喜完成XXX课程，快去领取奖励把', time: '10分钟前', type: 'normal' },
  { name: '你收藏的课程有更新', time: '今天', type: 'normal' },
  { name: '欢迎陈老师入驻，快去关注他把', time: '昨天', type: 'normal' },
]

// wx.setTopBarText({text:'123'})
// wx.showLoading({
//   title: '加载中',
// })
// wx.setNavigationBarTitle({title:'123'})

</script>

<style lang="scss" scoped>
.msg-container {
  font-size: 32rpx;
  width: 100%;
  height: 100vh;

  .msg-topTitle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 32rpx;
    font-weight: 400;
    margin: 0 auto;
    font-family: '黑体';
    margin-top: 116rpx;
  }

  .msg-content {
    margin-top: 44rpx;
    width: 100%;
    padding: 0 40rpx;
    box-sizing: border-box;

    .msg-contentCard {
      width: 100%;
      height: 160rpx;
      margin-bottom: 32rpx;
      // background-color: antiquewhite;
      border-radius: 24rpx;
      padding: 0 40rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      box-shadow: 0 16rpx 24rpx rgba(184, 184, 210, 0.2);

      .contentLeft {
        width: 96rpx;
        height: 96rpx;
        background-color: rgba(255, 235, 240, 1);
        border-radius: 24rpx;
        font-family: 'Poppins';
        margin-right: 32rpx;
      }

      .activeContentLeft {
        width: 96rpx;
        height: 96rpx;
        background-color: rgba(234, 234, 255, 1);
        border-radius: 24rpx;
        font-family: 'Poppins';
        margin-right: 20rpx;
      }

      .contentright {
        height: 82rpx;
        font-size: 24rpx;
        font-weight: 400;
        font-family: 'Poppins';
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}</style>
