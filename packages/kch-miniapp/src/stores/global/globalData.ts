import type { UserInfoProps } from '@/types';
import { defineStore } from 'pinia';

export const useGlobalData = defineStore('globalData', {
  state: () => {
    return {
      userType: Number,
      userInfo: null as UserInfoProps | null, // 用户信息
    };
  },
  actions: {
    setUserInfo(data: UserInfoProps) {
      this.userInfo = Object.assign({}, this.userInfo, data);
    },
    removeStore() {
      this.userInfo = null;
    },
  },
});
