<template>
  <view class="home-content">
    <div class="home-top">
      <div class="home-heard">
        <img src="../../static/icons/avatar.png" class="heardImg" />
        <div class="heardText">
          <p>早上好，小超超</p>
          <p style="font-size: 28rpx; font-weight: 400">让我们开始学习吧！</p>
        </div>
      </div>
      <div class="home-topCard">
        <div class="cardTop">
          <p>今日学习</p>
          <p style="color: rgba(61, 92, 255, 1)">我的课程</p>
        </div>
        <div class="cardBody">
          <p>46分钟</p>
          <p style="color: rgba(133, 133, 151, 1); font-size: 20rpx">/60分钟</p>
        </div>
        <ProgressBar :width="width" :color="color" />
      </div>
    </div>
    <div class="home-body">
      <div class="body-title">超级推荐</div>
      <div class="body-carousel"></div>
      <div class="body-teacher"></div>
    </div>
    <div class="home-foot">
      <div class="foot-title">热门课程</div>
      <div class="foot-body">
        <CourseCard :data-list="cardList" />
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProgressBar from '../../components/progressBar/index.vue';
import CourseCard from '../../components/courseCard/index.vue';
const width = ref<string>('50%');
const color = ref<string>('rgba(255, 81, 6, 1)');
const cardList = [
  {
    name: '营养健康老师教学课程1',
    pice: '288',
    remark: '这是一句话简介的位置就是这么长久是',
    teacher: '李老师',
    position: '师大副教授',
    collect: '4.5k',
  },
  {
    name: '营养健康老师教学课程2',
    pice: '289',
    remark: '这是一句话简介的位置就是这么长久是',
    teacher: '陈老师',
    position: '师大副教授',
    collect: '4.4k',
  },
  {
    name: '营养健康老师教学课程3',
    pice: '299',
    remark: '这是一句话简介的位置就是这么长久是',
    teacher: '管老师',
    position: '师大副教授',
    collect: '4.3k',
  },
];
</script>

<style lang="scss" scoped>
.home-content {
  font-size: 32rpx;
  width: 100%;
  height: 100vh;

  .home-top {
    width: 100%;
    height: 400rpx;
    background-color: #3d5cff;
    position: relative;
    padding: 0 40rpx;
    box-sizing: border-box;

    .home-heard {
      width: 100%;
      height: 112rpx;
      padding-top: 150rpx;
      display: flex;
      flex-direction: row;

      .heardImg {
        width: 72rpx;
        height: 72rpx;
        border-radius: 36rpx;
        margin-right: 30rpx;
      }

      .heardText {
        font-size: 40rpx;
        font-family: '黑体';
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
      }
    }

    .home-topCard {
      width: 672rpx;
      height: 192rpx;
      background-color: rgb(255, 255, 255);
      border-radius: 24rpx;
      box-shadow: 0px 16rpx 24rpx rgba(184, 184, 210, 0.2);
      position: absolute;
      bottom: -96rpx;
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
  }

  .home-body {
    margin-top: 132rpx;
    padding: 0 40rpx;
    box-sizing: border-box;

    .body-title {
      font-size: 32rpx;
      font-family: '黑体';
      font-weight: 600;
    }

    .body-carousel {
      margin-top: 24rpx;
      width: 498rpx;
      height: 296rpx;
      border-radius: 32rpx;
      background-color: #7183e1;
    }

    .body-teacher {
      width: 100%;
      height: 240rpx;
      background-color: rgba(239, 224, 255, 1);
      margin-top: 34rpx;
      box-shadow: 0px 8px 12px rgba(184, 184, 210, 0.2);
      border-radius: 24rpx;
    }
  }

  .home-foot {
    margin-top: 36rpx;
    padding: 0 40rpx;
    box-sizing: border-box;

    .foot-title {
      font-size: 32rpx;
      font-family: '黑体';
      font-weight: 600;
    }

    .foot-body {
      width: 100%;
      margin-top: 24rpx;
    }
  }
}
</style>
