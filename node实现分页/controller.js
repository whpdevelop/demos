/* 
 *  数据处理层
 */

// 引入封装的操作数据库的方法
const dbOpt = require('./db.js')

module.exports = {
    showWeb(req, res) {
        // 处理不同传参数的形式
        let page = req.query.page || 1;
        //数据开始的位置
        let pagestart = (page - 1) * 10 + 1;
        // 数据结束的位置
        let pageend = pagestart + 10
            // 查询符合条件的数据
        dbOpt.dbOpt('select * from pages where id >= ? and id <= ?', [pagestart, pageend], function(data) {
            // 获取数据的总条数
            dbOpt.dbOpt('select count(*) as num from pages where modelname=?', ['前端'], function(result) {
                var num = Math.ceil(result[0].num / 10);
                res.render('index.html', { data: data, num: num, page: page })
            })
        })
    }
}