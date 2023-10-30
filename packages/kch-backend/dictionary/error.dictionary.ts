export default new Map([
  ['WRONG_PASSWORD', { message: '密码输入错误', error: 'WRONG_PASSWORD', code: '521' }],
  ['PHONENUMBER_EXIST', { message: '用户手机号已存在', error: 'WRONG_PASSWORD', code: '522' }],
  ['USER_NOT_EXIST', { message: '未注册用户', error: 'USER_NOT_EXIST', code: '523' }],
  ['PID_NOT_EXIST', { message: '上级ID不合法', error: 'PID_NOT_EXIST', code: '524' }]
]);
