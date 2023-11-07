export default new Map([
  ['WRONG_PASSWORD', { message: '密码输入错误', error: 'WRONG_PASSWORD', code: '521' }],
  ['PHONENUMBER_EXIST', { message: '用户手机号已存在', error: 'WRONG_PASSWORD', code: '522' }],
  ['USER_NOT_EXIST', { message: '用户不存在', error: 'USER_NOT_EXIST', code: '523' }],
  ['PID_NOT_EXIST', { message: '上级ID不合法', error: 'PID_NOT_EXIST', code: '524' }],
  ['ROLE_NOT_EXIST', { message: '角色不存在', error: 'ROLE_NOT_EXIST', code: '525' }],
  ['ROLE_NAME_EXIST', { message: '角色已存在', error: 'ROLE_NAME_EXIST', code: '526' }],
  ['REGISTER_FAILED', { message: '用户名或手机号已被注册', error: 'REGISTER_FAILED', code: '527' }],
  ['CATEGORY_NAME_EXSIT', { message: '分类名称已存在', error: 'CATEGORY_NAME_EXSIT', code: '528' }],
  ['UPLOAD_FAILED', { message: '上传失败', error: 'UPLOAD_FAILED', code: '529' }],
  ['USER_NOT_EXIST', { message: '未知的用户ID', error: 'USER_NOT_EXIST', code: '530' }],
  ['UNKNOWN_ORDER_ID', { message: '未知的订单ID', error: 'UNKNOWN_ORDER_ID', code: '531' }]
]);
