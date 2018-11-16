/*
 * @Author: likaifeng
 * @Date:   2018-11-16 12:11:03
 * @Last Modified by:   likaifeng
 * @Last Modified time: 2018-11-16 12:24:59
 */
// 导入第三方模块
const express = require('express');
// 导入自定义模块
const index = require('./routes/index.js');
const login = require('./routes/login.js');
const article = require('./routes/atricle');
// 创建服务器
const app = express();
// 静态文件的存放路径
app.use(express.static(__dirname + '/public'));
// 设置模板引擎和模板存放的文件夹
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');;
// 创建路由
app.get('/', index.render);
app.get('/login', login.render);
app.get('/article', article.render);
// 启动服务器
app.listen('3000', () => console.log('服务器启动成功...'))