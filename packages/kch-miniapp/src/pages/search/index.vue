<template>
  <view class="search-container">
    <div class="search-topTitle">
      <img src="../../imgs/vector.png" class="vectorImg" @click="back" />
      <p>{{ name }}</p>
      <p></p>
    </div>
    <div class="search-content">
      <div class="coures-serch">
        <img src="../../imgs/search.png" class="imgSerch" />
        <p>查找课程</p>
      </div>
      <div class="search-tags">
        <div class="tag">这是一段搜索历</div>
        <div class="tag">这是一段</div>
        <div class="tag">搜索历史</div>
      </div>
      <div class="search-result">搜索结果</div>
      <div v-if="cardList.length > 5" class="coures-tabsContent">
        <CourseCard :data-list="cardList" />
      </div>
      <div v-else class="search-noNew">
        <NoNews :title="'搜索无结果，换个词试试~'" />
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CourseCard from '../../components/courseCard/index.vue';
import NoNews from '../../components/nonews/index.vue';
const name = ref('课程搜索');
const cardList = [
  {
    name: '营养健康老师教学课程1',
    pice: '289',
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
//返回
const back = () => {
  uni.navigateBack({
    delta: 1,
  });
};
</script>

<style lang="scss" scoped>
.search-container {
  font-size: 32rpx;
  width: 100%;
  height: 100vh;

  .search-topTitle {
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

  .search-content {
    margin-top: 48rpx;
    padding: 0 40rpx;
    box-sizing: border-box;

    .coures-serch {
      height: 96rpx;
      width: 100%;
      background-color: rgba(244, 243, 253, 1);
      border-radius: 24rpx;
      font-size: 28rpx;
      font-family: '黑体';
      font-weight: 500;
      color: rgba(184, 184, 210, 1);
      display: flex;
      flex-direction: row;
      align-items: center;

      .imgSerch {
        width: 32rpx;
        height: 32rpx;
        margin-left: 32rpx;
        margin-right: 26rpx;
      }
    }
    .search-tags {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-top: 32rpx;

      .tag {
        height: 60rpx;
        border-radius: 16rpx;
        background: rgba(244, 243, 253, 1);
        margin-right: 24rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(133, 133, 151, 1);
        line-height: 60rpx;
        text-align: center;
        padding: 0 20rpx;
        box-sizing: border-box;
      }
    }
    .search-result {
      font-size: 36rpx;
      font-family: '黑体';
      color: rgba(31, 31, 57, 1);
      margin-top: 54rpx;
    }

    .coures-tabsContent {
      margin-top: 56rpx;
    }
    .search-noNew {
      margin-top: 134rpx;
    }
  }
}
</style>
