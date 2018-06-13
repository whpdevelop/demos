/* 
 * 封装操作数据库的公共方法
 */

const mysql = require('mysql');

exports.dbOpt = function(sql, data, callback) {
    // 创建数据库链接
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'nodepages'
    });

    // 执行数据库链接操作
    connection.connect();

    connection.query(sql, data, function(error, results, fields) {
        if (error) throw error;
        callback(results)
    });
    // 关闭数据库链接
    connection.end();
}