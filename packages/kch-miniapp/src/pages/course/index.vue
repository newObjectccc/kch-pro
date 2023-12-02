<template>
  <view class="course-container">
    <div class="course-topTitle">{{ name }}</div>
    <div class="course-content">
      <div class="coures-serch" @click="search">
        <img src="../../imgs/search.png" class="imgSerch" />
        <p>查找课程</p>
      </div>
      <div class="course-card">
        <div class="course-cardLeft">
          <img src="../../imgs/illustration.png" class="avatar" />
        </div>
        <div class="course-cardRight">
          <img src="../../imgs/illustration1.png" class="avatarRight" />
        </div>
      </div>
      <div class="coures-tabs">
        <div class="coures-tabsTop">
          <div
            v-for="item in tabList"
            :key="item.type"
            :class="item.type === tab ? 'tabs-title' : 'tabs-titleActive'"
            @click="tabcheckout(item.type)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="coures-tabsContent">
          <CourseCard :data-list="cardList" />
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CourseCard from '../../components/courseCard/index.vue';
const name = ref('课程列表');
const tab = ref('all');
const tabList = [
  { name: '全部', type: 'all' },
  { name: '科学研讨', type: 'scientific' },
  { name: '心理学', type: 'psychology' },
];
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
//tab切换
const tabcheckout = (type: string) => {
  tab.value = type;
  console.log(tab);
};
//搜索跳转
const search = () => {
  uni.navigateTo({ url: '/pages/search/index' });
};
</script>

<style lang="scss" scoped>
.course-container {
  font-size: 32rpx;
  width: 100%;
  height: 100vh;

  .course-topTitle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 32rpx;
    font-weight: 400;
    margin: 0 auto;
    font-family: '黑体';
    padding: 116rpx 50rpx 0 50rpx;
    box-sizing: border-box;
  }

  .course-content {
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

    .course-card {
      margin-top: 62rpx;
      width: 100%;
      height: 216rpx;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      .course-cardLeft {
        width: 320rpx;
        height: 154rpx;
        background-color: rgba(206, 236, 254, 1);
        border-radius: 24rpx;
        position: relative;

        .avatar {
          width: 236rpx;
          height: 216rpx;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }

      .course-cardRight {
        width: 320rpx;
        height: 154rpx;
        background-color: rgba(239, 224, 255, 1);
        border-radius: 24rpx;
        position: relative;

        .avatarRight {
          width: 236rpx;
          height: 216rpx;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }

    .coures-tabs {
      width: 100%;
      margin-top: 70rpx;

      .coures-tabsTop {
        font-size: 28rpx;
        font-family: '黑体';
        font-weight: 400;
        display: flex;
        flex-direction: row;

        .tabs-title {
          width: 146rpx;
          height: 56rpx;
          opacity: 1;
          border-radius: 56rpx;
          background: rgba(61, 92, 255, 1);
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 56rpx;
          margin-right: 34rpx;
        }

        .tabs-titleActive {
          width: 146rpx;
          height: 56rpx;
          opacity: 1;
          border-radius: 56rpx;
          background: rgba(255, 255, 255, 1);
          color: rgba(133, 133, 151, 1);
          text-align: center;
          line-height: 56rpx;
          margin-right: 34rpx;
        }
      }

      .coures-tabsContent {
        margin-top: 46rpx;
      }
    }
  }
}
</style>
