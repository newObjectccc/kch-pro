module.exports = {
  root: true,
  env: {
      browser: true,
      node: true,
  },
  extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      '@vue/typescript/recommended',
      '@vue/prettier',
      '@vue/prettier/@typescript-eslint',
      '@vue/eslint-config-prettier',
      'prettier'
  ],
  parserOptions: {
      ecmaVersion: 6,
      parser: '@typescript-eslint/parser', // 解析 .ts 文件
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
      '@typescript-eslint/no-var-requires': 0,
      'vue/no-template-shadow': 'off',
      // 添加组件命名忽略规则
      'vue/multi-word-component-names': 0,
      eqeqeq: 'error', // 必须使用完全等号
      'no-unneeded-ternary': 'error', // 禁止不必要的嵌套
      'callback-return': 'error', // 避免多次调用回调
      complexity: ['error', 35], //最大圈复杂度,尽量调整到15以内，后续会限制到15左右
      'func-style': ['error', 'expression'], //函数风格，规定只能使用函数表达式
      'max-depth': ['error', 6], //嵌套块深度
      'max-nested-callbacks': ['error', 3], //回调嵌套深度
      'prefer-const': 'error', //首选const
      'prefer-spread': 'error', //首选展开运算
      'prefer-reflect': 'error', //首选Reflect的方法
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      'no-async-promise-executor': 0, // promise可以使用async
  },
};
