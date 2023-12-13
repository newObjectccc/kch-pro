import { request } from "@/request";

/**
 * @param {Object} 获取用户信息
 */
export const getUserData = () => {
  return request({
      method: 'GET',
      url: 'xxxxx',
  });
};
