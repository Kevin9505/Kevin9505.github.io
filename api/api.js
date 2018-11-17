// 导入第三方插件
const express = require('express');
const moment = require('moment');
// 创建服务器
const app = express();
// cors 模块,该模块为跨域所用
const cors = require('cors');
app.use(cors());

// 解析表单的插件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}))

//创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: '127.0.0.1', //数据库地址
  user: 'root', //账号
  password: 'root', //密码
  database: 'blog', //库名
  multipleStatements: true //允许执行多条语句
})

// 下面是get表中所有数据
app.get('/api/getuser', (req, res) => {
  const sqlStr = 'select * from users '
  conn.query(sqlStr, (err, results) => {
    if (err) return res.json({
      err_code: 1,
      message: '用户不存在...',
      affextedRows: 0
    })
    res.json({
      err_code: 200,
      message: results,
      affextedRows: results.affextedRows
    })
  })
})
// 添加数据
app.post('/api/addcard', (req, res) => {
  const user = req.body
  user.ctime = moment().format('YYYY-MM-DD HH:mm:ss') //格式化日期
  const sqlStr = 'insert into bank set ?'
  conn.query(sqlStr, user, (err, results) => {
    if (err) return res.json({
      err_code: 1,
      message: err,
      affectedRows: 0
    })
    res.json({
      err_code: 0,
      message: '添加数据成功...',
      affectedRows: results.affectedRows
    })
  })

})

app.listen('3000', () => {
  console.log('api running 3000..'); //http://localhost:4001/api/getlist  换成你的ip,本机ip查询用cmd=>ipconfig
})