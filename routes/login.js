// 导入自定义模块
const db = require('../lib/db.js');

// 渲染登录页面
exports.render = (req, res) => {
  res.render('login', {})
}
exports.login = (req, res) => {
  const data = req.bady;
  console.log(data)
}