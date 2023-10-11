# kch-pro

## 项目说明😎

**
本 monorepo 主要是为了统一使用 prettier，commitlint，eslint，husky，git，lint-staged，tsconfig 等
**

### 请使用 pnpm 进行包管理

```bash
  npm install -g pnpm
```

启动项目前别忘记安装依赖

```bash
  pnpm install
```

### 子包管理请使用 pnpm -F <子包名>

比如：

```bash
  pnpm -F kch-backend start
```

```bash
  pnpm -F kch-miniapp dev:mp-weixin
```

```bash
  pnpm -F kch-saas dev
```

### 全局管理请使用 pnpm -w

比如：

```bash
  pnpm -w add eslint
```

### git commit 请统一使用 pnpm commit

```bash
  pnpm commit
```

> 如果需要子项目自定义的 eslint 或 tsconfig 等，请直接在子项目根目录下创建相应的配置文件即可。

## 贡献说明😎

> 请一律使用 github 开源社区遵循的 pull request 工作流进行所有代码开发工作，并且我们推荐使用ssh协议~

1. fork 本仓库到自己的 github
2. clone 自己的 fork 后的仓库到本地仓库进行开发工作
3. 我们建议你在本地仓库设置 upstream 和 origin 2个远程仓库地址

```bash
# 查看本地仓库设置的远程仓库
git remote -v
# 设置 origin 为 fork 到自己的 github 的仓库
git remote add origin <你自己的github仓库地址>
# 设置 upstream 为上游目标仓库（即本仓库）
git remote add origin git@github.com:newObjectccc/kch-pro.git
```

4. commit 之后，push 代码到 origin
5. 去到 github 上自己 fork 的仓库上，发起 Pull requests 到 upstream 即可

注意发起 PR 到 upstream 时，选择正确的分支，一般为 main 分支
