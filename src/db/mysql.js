/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-25 19:36:51
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-25 21:07:13
 */
const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db.js')

//创建连接对象
// const con = mysql.createConnection(MYSQL_CONF)

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9rr_>r;.<jfS',
    port: '3306',
    database: 'myblog'
})

//开始链接
con.connect()

//执行sql的函数
function exec(sql){
    console.log('打印sql')
    console.log(sql)
    const promise = new Promise((resolve,reject) => {
        con.query(sql, (err,result) => {
            if(err){
                console.log(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec
}