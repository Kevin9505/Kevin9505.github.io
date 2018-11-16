const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blog'
});

connection.connect();

// 执行sql命令
let query = (sql) => {
  // connection.query执行sql命令
  connection.query(sql, function (error) {
    if (error) throw error;
  });
}

// 查找数据库中的数据
exports.findUser = (value, callback) => {
  connection.query(
    `select name from users where name = '${value}'`,
    (err, results) => {
      // 判断数据是否查询成功
      if (err) throw err;
      // 返回结果
      callback(results);
    }
  )
}