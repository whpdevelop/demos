/* 
 *  分页功能
 *  技术栈: node express mysql bootstrap 中的分页
 *  art-template https://aui.github.io/art-template/express/
 *         
 */

const express = require('express');
const app = express();
const path = require('path')
const router = require('./router.js')

// 设置路径
app.set('views', path.join(__dirname, 'views'))
    // 设置模板引擎
    // app.set('view engine', 'art')
app.set('view engine', 'html')
app.engine('html', require('express-art-template'));

// 处理静态资源
app.use('/statics', express.static('statics'))

// 处理路由模块
app.use(router)

app.listen('3001', (err) => {
    console.log('3001 running...')
})