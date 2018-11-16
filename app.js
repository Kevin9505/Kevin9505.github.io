/*
 * @Author: likaifeng
 * @Date:   2018-11-16 12:11:03
 * @Last Modified by:   likaifeng
 * @Last Modified time: 2018-11-16 12:24:59
 */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('/views/index', {})
})

app.listen('3000', () => console.log('服务器启动成功...'))