<template>
  <view class="mycourse-container">
    <div class="mycourse-topTitle">
      <img src="../../imgs/vector.png" class="vectorImg" @click="back" />
      <p>{{ name }}</p>
      <p></p>
    </div>
    <div class="mycourse-content">
      <div class="mycourse-topCard">
        <div class="cardTop">
          <p>今日学习</p>
        </div>
        <div class="cardBody">
          <p>46分钟</p>
          <p style="color: rgba(133, 133, 151, 1); font-size: 20rpx">/60分钟</p>
        </div>
        <ProgressBar :width="width" :color="color" />
      </div>
      <div class="mycourse-body">
        <div v-for="item in cardList" :key="item.text" class="body-card">
          <div class="card-top">{{ item.text }}</div>
          <div class="card-progressBar">
            <div class="progressBar"></div>
          </div>
          <div class="card-text">{{ item.start }}</div>
          <div class="card-number">
            <p>{{ item.has }}/</p>
            <p style="font-size: 24rpx">{{ item.total }}</p>
          </div>
          <img src="../../imgs/buttonPlayPink.png" class="card-button" />
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProgressBar from '../../components/progressBar/index.vue';

const name = ref('查找课程');
const width = ref<string>('50%');
const color = ref<string>('rgba(255, 81, 6, 1)');
const cardList = [
  { text: '如何成就我们的好未来', start: '已完成', has: '14', total: '24' },
  { text: '快乐学习，健康生活', start: '已完成', has: '12', total: '28' },
  { text: '准备进入一个好大学', start: '已完成', has: '18', total: '34' },
];
//返回
const back = () => {
  uni.navigateBack({
    delta: 1,
  });
};
</script>

<style lang="scss" scoped>
.mycourse-container {
  font-size: 32rpx;
  width: 100%;
  height: 100vh;

  .mycourse-topTitle {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 32rpx;
    font-family: '黑体';
    padding: 116rpx 50rpx 0 50rpx;
    box-sizing: border-box;

    .vectorImg {
      width: 14rpx;
      height: 28rpx;
    }
  }

  .mycourse-content {
    margin-top: 40rpx;
    padding: 0 40rpx;
    box-sizing: border-box;

    .mycourse-topCard {
      width: 672rpx;
      height: 192rpx;
      background-color: rgb(255, 255, 255);
      border-radius: 24rpx;
      box-shadow: 0px 16rpx 24rpx rgba(184, 184, 210, 0.2);
      padding: 38rpx 32rpx;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .cardTop {
        font-size: 24rpx;
        font-weight: 400;
        font-family: '黑体';
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: rgba(133, 133, 151, 1);
      }

      .cardBody {
        font-size: 40rpx;
        font-family: '黑体';
        font-weight: 600;
        color: rgba(31, 31, 57, 1);
        display: flex;
        flex-direction: row;
        align-items: baseline;
      }
    }

    .mycourse-body {
      width: 100%;
      margin-top: 40rpx;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .body-card {
        width: 320rpx;
        height: 364rpx;
        border-radius: 24rpx;
        background: rgba(255, 231, 238, 1);
        box-shadow: 0px 16rpx 24rpx rgba(184, 184, 210, 0.2);
        padding: 48rpx 38rpx 0 38rpx;
        position: relative;
        margin-bottom: 32rpx;

        .card-top {
          font-size: 32rpx;
          font-family: '黑体';
          color: rgba(31, 31, 57, 1);
        }

        .card-progressBar {
          width: 100%;
          height: 12rpx;
          border-radius: 64rpx;
          background-color: rgb(255, 255, 255);
          overflow: hidden;
          margin-top: 49rpx;

          .progressBar {
            width: 80%;
            height: 12rpx;
            opacity: 1;
            background: linear-gradient(270deg, rgba(236, 123, 156, 1) 0%, rgba(236, 123, 156, 0.5) 100%);
          }
        }

        .card-text {
          margin-top: 20rpx;
          font-size: 24rpx;
          color: rgba(31, 31, 57, 1);
        }

        .card-number {
          font-size: 40rpx;
          font-weight: 600;
          color: rgba(31, 31, 57, 1);
          display: flex;
          align-items: baseline;
          margin-top: 30rpx;
        }

        .card-button {
          width: 88rpx;
          height: 88rpx;
          position: absolute;
          bottom: 22rpx;
          right: 22rpx;
        }
      }
    }
  }
}
</style>
