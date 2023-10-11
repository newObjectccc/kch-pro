# kch-pro

## 说明

### 请使用 pnpm 进行包管理

### 子包管理请使用 pnpm -F <子包名>

比如：

```bash
  pnpm -F kch-backend start
```

### 全局管理请使用 pnpm -w

比如：

```bash
  pnpm -w install
```

**
本 monorepo 主要是为了统一使用 prettier，commitlint，eslint，husky，git，lint-staged，tsconfig 等
**

> 如果需要子项目自定义的 eslint 或 tsconfig 等，请直接在子项目根目录下创建相应的配置文件即可。
