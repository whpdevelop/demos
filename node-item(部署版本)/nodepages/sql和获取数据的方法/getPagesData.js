/* 
 * 基于node实现爬虫
 * 爬取博学谷问答库的问题
 */
const https = require('https')
const path = require('path')
const fs = require('fs')

// 利用https 模块的get方法发送请求

/* let pageSize = '总条数'
 * let moduleId = '模块对应的id'
 */

let pageSize = 20;
let moduleId = 1;

https.get(`https://qa.boxuegu.com/questionRepository/getQuestionList?pageNumber=1&pageSize=${pageSize}&moduleId=${moduleId}`, (res) => {
    let str = ''
    res.on('data', (chunk) => {
            str += chunk;
        })
        // 对放回的数据做了相应的处理 没有全部使用 提取了部分有用的
    res.on('end', () => {
        var o1 = JSON.parse(str);
        var arr = [];
        o1.result.items.forEach((item) => {
            // 插入的sql语句的拼接
            var sql = `insert into java (modelname,img,title,visitNum,star,timedate) values('${item.moduleName}','${item.moduleImg}','${item.title}','${item.visitNum}','${item.approvalNum}','${item.time}');`;
            arr.push(sql);
        })
        // str = JSON.stringify(s, null, ' ')
            // 将拼接完的sql 语句写入data.json 文件
            // 得到的sql 需要处理进行使用 (需要了解sql)
        fs.writeFile(path.join(__dirname, 'data.sql'), arr.join(''), (err) => {
            if (err) {
                console.log('写入数据错误')
            }
            console.log('sucess')
        })
    })
})