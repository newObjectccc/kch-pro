import * as dotenv from 'dotenv';
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'default';

export const registerEnv = () => {
  const curPath = path.join(__dirname, `../../.env.${nodeEnv}`);
  const res = dotenv.config({
    path: curPath, // .env.${nodeEnv} 生产上需要手动配置 .env.production 比较安全，一定要注意路径对不对！
  });
  if (res.error) {
    // console.log('这里有坑 nest start 是生成dist目录并在dist中跑的项目 - 所以可能导致找不到.env文件的情况', __dirname)
    console.log('error ==> ', res.error);
  }
};
