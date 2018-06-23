/* 
 *  分页功能
 *  技术栈: node express mysql bootstrap 中的分页
 *  art-template https://aui.github.io/art-template/express/
 *         
 */

const express = require('express');
const app = express();
const path = require('path')

// 分页功能路由
const router1 = require('./nodepages/routers/router.js')
    // 图片上传路由
const router2 = require('./nodeupload/router.js')
    // 设置路径
    // app.set('views', path.join(__dirname, 'nodepages/views'))
    // 设置模板引擎
    // app.set('view engine', 'art')
    // app.set('view engine', 'html')

// app.engine('html', require('express-art-template'));

// 配置ejs 模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 处理静态资源
/* 
    为了结合多个demo 静态资源的的虚拟路径加数字区分
    1 -> 分页
    2-> 图片上传
*/
app.use('/statics1', express.static('nodepages/statics'))
app.use('/statics2', express.static('nodeupload/statics2'))
app.use('/statics', express.static('statics'))

// 处理路由模块
app.use(router1)
app.use(router2)

// 处理根路径
app.get('/', (req, res) => {
    res.render('layout')
})
app.get('/index', (req, res) => {
    res.render('index')
})

app.listen('8080', (err) => {
    console.log('8080 running...')
})