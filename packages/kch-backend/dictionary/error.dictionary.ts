export default new Map([
  // 客户端输入错误 200+ 400+
  ['WRONG_PASSWORD', { message: '密码输入错误', error: 'WRONG_PASSWORD', code: '221' }],
  ['PHONENUMBER_EXIST', { message: '用户手机号已存在', error: 'WRONG_PASSWORD', code: '222' }],
  ['USER_NOT_EXIST', { message: '用户不存在', error: 'USER_NOT_EXIST', code: '223' }],
  ['PID_NOT_EXIST', { message: '上级ID不合法', error: 'PID_NOT_EXIST', code: '224' }],
  ['ROLE_NOT_EXIST', { message: '角色不存在', error: 'ROLE_NOT_EXIST', code: '225' }],
  ['ROLE_NAME_EXIST', { message: '角色已存在', error: 'ROLE_NAME_EXIST', code: '426' }],
  ['REGISTER_FAILED', { message: '用户名或手机号已被注册', error: 'REGISTER_FAILED', code: '427' }],
  ['CATEGORY_NAME_EXSIT', { message: '分类名称已存在', error: 'CATEGORY_NAME_EXSIT', code: '428' }],
  ['UPLOAD_FAILED', { message: '上传失败', error: 'UPLOAD_FAILED', code: '429' }],
  ['USER_NOT_EXIST', { message: '未知的用户ID', error: 'USER_NOT_EXIST', code: '430' }],
  ['UNKNOWN_ORDER_ID', { message: '未知的订单ID', error: 'UNKNOWN_ORDER_ID', code: '431' }],
  ['PAGINATION_INVALID', { message: '无效的分页查询', error: 'PAGINATION_INVALID', code: '432' }],
  ['INVALID_PARAMS', { message: '无效的参数', error: 'INVALID_PARAMS', code: '433' }]
  // 服务器端错误 500+
]);
