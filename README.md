# kch-pro

## 说明

### 请使用 pnpm 进行包管理

启动前别忘记安装依赖

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

**
本 monorepo 主要是为了统一使用 prettier，commitlint，eslint，husky，git，lint-staged，tsconfig 等
**

> 如果需要子项目自定义的 eslint 或 tsconfig 等，请直接在子项目根目录下创建相应的配置文件即可。
