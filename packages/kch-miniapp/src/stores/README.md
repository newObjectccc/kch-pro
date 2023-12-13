# 状态管理 Pinia

#### 官网

https://pinia.vuejs.org/zh/core-concepts/

#### 使用方法

-   ###### 引入
    import { useGlobalData } from '@/stores/global/globalData'
-   ###### 实例
    const globalData = useGlobalData();
-   ###### 访问
    直接点 globalData.set
-   ###### 修改（三种方法）

*   直接通过语法糖修改

    globalData.userType=1

*   通过 action 中定义的方法修改

    globalData.setUserInfo(1)

*   通过$patch 直接修改 state 的值

    globalData.$patch({ userType: 1 })
