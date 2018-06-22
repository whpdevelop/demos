const express = require('express')
const app = express()
const path = require('path')

// 图片处理包
const formidable = require('formidable')

// 引入 ejs模板插件 并配置
const ejs = require('ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 处理静态文件
app.use('/statics', express.static('statics'))

// ejs 模板引擎的演示
// app.get('/', (req, res) => {
//     // res.send('hello world')
//     res.render('index', {
//         data: [1, 2, 3, 4],
//         name: "zs"
//     })
// })

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/fileUpload', (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./statics/uploads"
    form.keepExtensions = true
    form.parse(req, function(err, fields, files) {
        if (err) {
            console.log(err)
        }
        res.send(`<img id = "img" src="/${files.file.path}" />`)
    });
})
app.listen('3000', (err) => {
    console.log('3000 running.....')
})