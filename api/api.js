// 导入第三方插件
const express = require('express')
const moment = require('moment')
// const querystring = require('querystring')

// 导入自定义模块’
// const jsonParse = require('./lib/unit')

// 创建服务器
const app = express()
// cors 模块,该模块为跨域所用
const cors = require('cors')
app.use(cors())

// 解析表单的插件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))

//创建数据库连接对象
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: '127.0.0.1', //数据库地址
  user: 'root', //账号
  password: 'root', //密码
  database: 'blog', //库名
  multipleStatements: true //允许执行多条语句
})

// 获取用户信息
app.post('/api/login', (req, res) => {
  const user = req.body
  const sqlStr = `select * from users where email = '${user.email}' and password = '${user.password}'`
  conn.query(sqlStr, (err, results) => {
    if (err) return res.json({
      err_code: 1,
      message: '资料不存在',
      affextedRows: 0
    })
    res.json({
      err_code: 200,
      message: results,
      affextedRows: results.affextedRows
    })
  })
})
// 用户注册
app.post('/api/register', (req, res) => {
  const user = req.body
  user.ctime = moment().format('YYYY-MM-DD HH:mm:ss') //格式化日期
  const sqlStr = `insert into users set email='${user.email}',password='${user.password}',tel='${user.tel}',gender='${user.gender}'`
  conn.query(sqlStr, user, (err, results) => {
    if (err) return res.json({
      err_code: 1,
      message: '该用户已存在...',
      affectedRows: 0
    })
    res.json({
      err_code: 0,
      message: '注册成功...',
      affectedRows: results.affectedRows
    })
  })

})
// 获取全部文章
app.get('/api/findAllpost', (req, res) => {
  const page = req.query.page
  // console.log(page)
  const sqlStr = `select * from posts limit ${ (page-1) * 10 },10`
  // const sqlStr = `select * from posts`
  conn.query(sqlStr, (err, results) => {
    if (err) return res.json({
      err_code: 1,
      message: '还没有文章呢...',
      affextedRows: 0
    })
    res.json({
      err_code: 200,
      message: results,
      affectedRows: results.affectedRows
    })
  })
})

app.listen('3000', () => {
  console.log('api running 3000..') //http://localhost:3000/api/getlist  换成你的ip,本机ip查询用cmd=>ipconfig
})