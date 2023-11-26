<template>
    <view class="introduction-content">
        <div class="introduction-top">
            <div class="top-left">
                <div class="left-hot">热门课程</div>
                <div class="left-text">自我认知与领悟</div>
                <div class="left-time">6小时12分钟·24课时</div>
            </div>
        </div>
        <div class="introduction-content">
            <div class="content-top">
                <div class="content-delit">
                    <img src="../../static/icons/avatar.png" class="delit-image">
                    <div class="delit-text">
                        <p>李老师</p>
                        <p style="font-size: 24rpx; color: rgba(175,175,175,1); margin-top: 8rpx;">xx高级老师</p>
                    </div>
                </div>
                <div class="top-pirce">￥299.00</div>
            </div>
            <div class="content-baby">
                <div class="baby-title">课程介绍</div>
                <div class="baby-text">这是一段很长很长的课程介绍这是一段很长很长的课程介绍这是一段很长很长的课程介绍这是一段很长很长的课程介绍</div>
                <div class="bady-foot">
                    <img src="../../imgs/down.png" class="bady-down">
                </div>
                <div class="bady-time">
                    <div class="time-card" v-for="(item, index) in courseTime" :key="item.title">
                        <div class="card-left">
                            <div class="card-left-number">0{{ index + 1 }}</div>
                            <div class="card-left-content">
                                <div class="card-left-title">{{ item.title }}</div>
                                <div class="card-left-time">
                                    <p class="card-left-text">{{ item.time }}</p>
                                    <p class="card-left-text">分钟</p>
                                    <img src="../../imgs/done.png" class="time-button">
                                </div>
                            </div>
                        </div>
                        <img src="../../imgs/button_play.png" class="card-right">
                    </div>
                </div>

            </div>
            <div class="content-foot">
                <div class="foot-collect">
                    <img src="../../imgs/collect.png" class="button-collect">
                </div>
                <div class="foot-bay">立即购买</div>
            </div>
        </div>
    </view>
</template>
<script  setup lang="ts">
const name = '我的课程'
const courseTime = [
    { title: '认识自己', time: '6:10' },
    { title: '如何成长', time: '9:10' },
    { title: '探索与发现', time: '10:10' }
]
</script>
<style lang="scss" scoped>
.introduction-content {
    font-size: 32rpx;
    width: 100%;
    height: 100vh;
    padding-top: 134rpx;
    background: rgba(255, 235, 240, 1);

    .introduction-top {
        padding: 0 40rpx;
        box-sizing: border-box;
        width: 100%;
        height: 428rpx;
        padding-top: 72rpx;
        background-image: url('../../imgs/Group.png');
        background-repeat: no-repeat;
        background-position-x: 420rpx;
        background-position-y: 0rpx;
        position: relative;

        .top-left {
            width: 100%;
            height: 100%;
            background-image: url('../../imgs/Illustration\ \(2\).png');
            background-repeat: no-repeat;
            background-position-x: -40rpx;
            background-position-y: -24rpx;

            .left-hot {
                width: 192rpx;
                height: 52rpx;
                opacity: 1;
                font-size: 24rpx;
                font-weight: 400;
                font-weight: '黑体';
                text-align: center;
                line-height: 52rpx;
                background-image: url('../../imgs/Rectangle.png');

            }

            .left-text {
                font-size: 40rpx;
                font-weight: 600;
                font-weight: '黑体';
                margin-top: 48rpx;
            }

            .left-time {
                font-size: 12px;
                font-weight: 400;
                color: rgba(133, 133, 151, 1);
                margin-top: 12rpx;
            }
        }

        .top-image {
            position: absolute;
            right: 64rpx;
            bottom: -16rpx;
            width: 284rpx;
        }

    }

    .introduction-content {
        width: 100%;
        height: calc(100vh - 428rpx - 134rpx);
        background-color: rgba(255, 255, 255, 1);
        border-radius: 100rpx 100rpx 0 0;
        padding-top: 44rpx;

        .content-top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0rpx 32rpx;

            .content-delit {
                display: flex;
                flex-direction: row;
                align-items: center;

                .delit-image {
                    width: 96rpx;
                    height: 96rpx;
                    margin-right: 24rpx;
                }

                .delit-tex {
                    font-size: 28rpx;
                    font-family: '黑体';
                    font-weight: 400;
                }
            }

            .top-pirce {
                font-size: 40rpx;
                font-family: '黑体';
                font-weight: 600;
                color: rgba(61, 92, 255, 1);
            }
        }

        .content-baby {
            width: 100%;
            margin-top: 54rpx;
            padding: 0rpx 32rpx;

            .baby-title {
                font-size: 32rpx;
                font-family: '黑体';
                font-weight: 600;
                color: rgba(31, 31, 57, 1);
            }

            .baby-text {
                font-size: 24rpx;
                font-weight: 400;
                color: rgba(147, 147, 163, 1);
                margin-top: 10rpx;
            }

            .bady-foot {
                display: flex;
                flex-direction: row;
                justify-content: center;
                margin-top: 48rpx;

                .bady-down {
                    width: 32rpx;
                    height: 32rpx;
                }
            }

            .bady-time {
                width: 100%;
                margin-top: 40rpx;

                .time-card {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    height: 108rpx;
                    margin-bottom: 32rpx;

                    .card-left {
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        .card-left-number {
                            font-size: 48rpx;
                            font-family: '黑体';
                            font-weight: 600;
                            color: rgba(184, 184, 210, 1);
                            margin-right: 54rpx;
                        }

                        .card-left-content {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            height: 88rpx;

                            .card-left-title {
                                font-size: 28rpx;
                                font-family: '黑体';
                                font-weight: 400;
                                color: rgba(31, 31, 57, 1);
                                margin-bottom: 14rpx;
                            }

                            .card-left-time {
                                display: flex;
                                flex-direction: row;

                                .card-left-text {
                                    font-size: 24rpx;
                                    font-family: '黑体';
                                    font-weight: 600;
                                    color: rgba(61, 92, 255, 1);
                                    margin-right: 20rpx;
                                }

                                .time-button {
                                    width: 24rpx;
                                    height: 24rpx;
                                }

                            }
                        }

                    }

                    .card-right {
                        width: 88rpx;
                        height: 88rpx;
                    }
                }
            }


        }

        .content-foot {
            width: 100%;
            height: 196rpx;
            box-shadow: 0px 4rpx 30rpx rgba(184, 184, 210, 0.5);
            border-radius: 50rpx 50rpx 0 0;
            padding: 48rpx 36rpx;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            position: absolute;
            bottom: 0;

            .foot-collect {
                width: 178rpx;
                height: 100rpx;
                background: rgba(255, 235, 240, 1);
                border-radius: 24rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                .button-collect{
                    width: 37rpx;
                    height: 34rpx;
                }
            }

            .foot-bay {
                width: 472rpx;
                height: 100rpx;
                border-radius: 24rpx;
                background: rgba(61, 92, 255, 1);
                text-align: center;
                line-height: 100rpx;
                font-size: 32rpx;
                font-family: '黑体';
                color: rgba(255, 255, 255, 1);

            }
        }
    }

}
</style>