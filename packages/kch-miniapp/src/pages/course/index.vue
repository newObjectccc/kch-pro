<template>
  <view class="course-container">
    <div class="course-topTitle">{{ name }}</div>
    <div class="course-content">
      <div class="coures-serch">查找课程
      </div>
      <div class="course-card">
        <div class="course-cardLeft">
          <img src="../../imgs/illustration.png" class="avatar">
        </div>
        <div class="course-cardRight">
          <img src="../../imgs/illustration1.png" class="avatarRight">
        </div>
      </div>
      <div class="coures-tabs">
        <div class="coures-tabsTop">
          <div :class="item.type === tab ? 'tabs-title' : 'tabs-titleActive'" v-for="item in tabList" :key="item.type"
            @onclick="tabcheckout(item.type)">{{ item.name }}</div>
        </div>
        <div class="coures-tabsContent">
          <div class="coures-tabsContentCard" v-for="item in cardList" :key="item.name">
            <div class="coures-tabsCardLeft"></div>
            <div class="coures-tabsCardRight">
              <div class="coures-tabsCardTop">
                <p>{{ item.name }}</p>
                <p style="font-size: 32rpx; font-weight: 600;color: rgba(61,92,255,1);">￥{{ item.pice }}</p>
              </div>
              <div class="coures-tabsCardBoby">{{ item.remark }}</div>
              <div class="coures-tabsCardFoot">
                <p>{{ item.teacher }}</p>
                <p>{{ item.position }}</p>
                <p style="color: rgba(97,110,124,1);">{{ item.collect }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const name = ref('课程列表');
let tab = 'all'
const tabList = [
  { name: '全部', type: 'all' },
  { name: '科学研讨', type: 'scientific' },
  { name: '心理学', type: 'psychology' },
]
const cardList = [
  { name: '营养健康老师教学课程1', pice: '288', remark: '这是一句话简介的位置就是这么长久是', teacher: '李老师', position: '师大副教授', collect: '4.5k' },
  { name: '营养健康老师教学课程2', pice: '289', remark: '这是一句话简介的位置就是这么长久是', teacher: '陈老师', position: '师大副教授', collect: '4.4k' },
  { name: '营养健康老师教学课程3', pice: '299', remark: '这是一句话简介的位置就是这么长久是', teacher: '管老师', position: '师大副教授', collect: '4.3k' },
]
const tabcheckout = (type: any) => {
}
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
    margin-top: 116rpx;
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
      padding: 0 32rpx;
      line-height: 96rpx;
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
    }
  }
}</style>
