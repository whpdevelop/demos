const express = require('express')
const app = express()
const request = require('request')
const qs = require('querystring')

// 解决跨域模块
const cors = require('cors')
app.use(cors())

// 处理post请求的参数
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/get', (req, res) => {
    let urls = req.query
    let { baseurl, ...args } = urls
    let paramsUrl = qs.stringify(args)
    let proxyUrl = baseurl + "?" + paramsUrl
    request({
        methods: req.method,
        url: proxyUrl,
        headers: {
            Referer: paramsUrl
        }
    }, (err, response, body) => {
        res.send(body)
    })
})
app.post('/post', (req, res) => {
    let { baseurl, ...args } = req.body
    request({
        method: 'post',
        url: baseurl,
        form: args
    }, (err, response, body) => {
        res.send(body)
    })
})
app.get('/', (req, res) => {
    res.send({
        msg: "需要传的参数",
        ps: "https://baidu.com/a/b/n?a=a&b=b",
        baseurl: "https://baidu.com/a/b/n",
        a: "a",
        b: "b"
    })
})
app.listen(8888, () => {
    console.log('8888 proxy running...')
})