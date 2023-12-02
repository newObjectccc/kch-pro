<template>
  <view class="courseCard">
    <div v-for="item in dataList" :key="item.name" class="coures-tabsContentCard" @click="courseDetails">
      <img src="../../imgs/Image.png" class="coures-tabsCardLeft" />
      <div class="coures-tabsCardRight">
        <div class="coures-tabsCardTop">
          <p>{{ item.name }}</p>
          <p style="font-size: 32rpx; font-weight: 600; color: rgba(61, 92, 255, 1)">￥{{ item.pice }}</p>
        </div>
        <div class="coures-tabsCardBoby">{{ item.remark }}</div>
        <div class="coures-tabsCardFoot">
          <p>{{ item.teacher }}</p>
          <p>{{ item.position }}</p>
          <p style="color: rgba(97, 110, 124, 1)">{{ item.collect }}</p>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
interface Props {
  dataList?: {
    name: string;
    pice: string;
    remark: string;
    teacher: string;
    position: string;
    collect: string;
  }[];
}
defineProps<Props>();

//课程跳转
const courseDetails = () => {
  // uni.switchTab({url:'/pages/msg/index'})
  uni.navigateTo({ url: '/pages/introduction/index' });
};
</script>

<style lang="scss" scoped>
.courseCard {
  width: 100%;
  .coures-tabsContentCard {
    width: 100%;
    height: 190rpx;
    opacity: 1;
    border-radius: 24rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 16rpx 24rpx rgba(184, 184, 210, 0.2);
    padding: 0 24rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 36rpx;

    .coures-tabsCardLeft {
      width: 156rpx;
      height: 156rpx;
      background-color: aqua;
      border-radius: 16rpx;
      margin-right: 32rpx;
    }

    .coures-tabsCardRight {
      height: 142rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .coures-tabsCardTop {
        display: flex;
        justify-content: space-between;
        font-size: 28rpx;
        font-family: '黑体';
        color: rgba(31, 31, 57, 1);
      }

      .coures-tabsCardBoby {
        font-size: 24rpx;
        font-family: '黑体';
        color: rgba(97, 110, 124, 1);
      }

      .coures-tabsCardFoot {
        display: flex;
        justify-content: space-between;
        font-size: 24rpx;
        font-family: '黑体';
        color: rgba(184, 184, 210, 1);
      }
    }
  }
}
</style>
