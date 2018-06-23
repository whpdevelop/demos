/* 
 *  数据处理层
 */

// 引入封装的操作数据库的方法
const dbOpt = require('../modules/db.js')

module.exports = {
    showWeb(req, res) {
        // res.render('nodepages/index', { data: [1, 2, 3, 4] })

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
                res.render('nodepages/index', { data: data, num: num, page: page })
            })
        })
    }
}



/*

查询功能
let sql = 'select * from book where id = ?';
let data = [6];

// 操作数据库
connection.query(sql,data, function(error, results, fields) {
    if (error) throw error;
    console.log(results[0].name);
    // console.log(results);
}); */

/* 
 * 更新功能
 let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
let data = ['浪潮之巅','吴军','计算机','IT巨头的兴衰史',8];

// 操作数据库
connection.query(sql,data, function(error, results, fields) {
    if (error) throw error;
    // console.log(results);
    if(results.affectedRows == 1){
        console.log('更新成功');
    }
});
 * 
 */

/* 
    插入功能
    let sql = 'insert into book set ?'
let data = {
    name : '明朝那些事',
    author : '当年明月',
    category : '文学',
    description : '明朝的历史'
}
// 操作数据库
connection.query(sql,data, function(error, results, fields) {
    if (error) throw error;
    // console.log(results);
    if(results.affectedRows == 1){
        console.log('数据插入成功');
    }
});
 


 */


/* 
 let sql = 'delete from book where id = ?';
let data = [9];

// 操作数据库
connection.query(sql,data, function(error, results, fields) {
    if (error) throw error;
    // console.log(results);
    if(results.affectedRows == 1){
        console.log('删除成功');
    }
});
 
 */