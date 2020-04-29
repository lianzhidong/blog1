/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-12 18:19:57
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-25 20:10:45
 */
const http = require('http')
const PORT = 8000
const serverHandle = require('../../app')

const server = http.createServer(serverHandle)
console.log('正在监听8000端口')
server.listen(PORT)