/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-25 19:25:27
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-25 19:36:29
 */
const env = process.env.NODE_ENV    //环境参数

//配置
 let MYSQL_CONF 
 if(env === 'dev'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '9rr_>r;.<jfS',
        port: '3306',
        database: 'myblog'
    }
 }

 if(env === 'production'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '9rr_>r;.<jfS',
        port: '3306',
        database: 'myblog'
    }
 }

 module.exports = {
    MYSQL_CONF
 }
