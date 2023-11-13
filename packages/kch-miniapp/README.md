# 小程序

# 安装

npm install

# 开发

使用 vscode 开发

# 调试

通过 package.json 命令运行后，直接使用开发者工具打开对应的包，不需通过 HbuilderX 运行

-   ###### 微信 dev

yarn wx:dev / npm run wx:dev

-   ###### 微信 prod

yarn wx:prod / npm run wx:prod

-   ###### 支付宝 dev

yarn ali:dev

-   ###### 支付宝 prod

yarn ali:prod

-   ###### 抖音 dev

yarn toutiao:dev

-   ###### 抖音 prod

yarn toutiao:prod

# 打包

通过 package.json 对应 build 命令

## 目录结构

# ①： config

# ②：src/

api 接口目录
components 全局组件
pages 主包目录
request 接口请求
static 静态文件
stores 全局状态管理
styles 公共 css
types 全局公共类型
utils 公共模块、工具方法
