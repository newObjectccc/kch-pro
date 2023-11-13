import type { RequestOptions } from './type';

const baseUrl = import.meta.env.VITE_SERVER_URL;

export const request = (options: RequestOptions) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + options.url,
      data: options.data,
      method: options.method,
      header: {
        token: uni.getStorageSync('token') != null ? uni.getStorageSync('token') : '',
      },
      success: (res) => {
        resolve(res);
      },
      fail: (error) => {
        reject(error);
      },
    });
  });
};
