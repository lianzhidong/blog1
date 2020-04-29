/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-11 20:24:48
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-29 21:15:18
 */
const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')

//用于异步处理post data
const getPostData = (req) => {
    const promise = new Promise((resolve,reject) => {
        if(req.method !== 'POST'){
            resolve({})
            return
        }
        if(req.headers !== 'application/json'){
            resolve({})
            return
        }
        let postData = ''
        req.on('data',chunk => {
            postData += chunk
        })
        req.on('end',() => {
            if(!postData){
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}

const serverHandle = (req,res)=>{
    //设置返回格式
    res.setHeader('Content-type','application/json')
    const method = req.method
    const url = req.url
    //解析参数
    req.query = querystring.parse(url.split('?')[1])
    console.log(JSON.stringify(req.query))
    //处理postData
    getPostData(req).then( postData =>{
        req.body = postData
        //处理blog路由
        const blogResult = handleBlogRouter(req,res)
        if(blogResult){
            blogResult.then( blogData =>{
                res.end(JSON.stringify(blogData))
            }) 
            return     
        }

        // const blogData = handleBlogRouter(req,res)
        // if(blogData){
        //     res.end(JSON.stringify(blogData))
        //     return
        // }
        //处理user路由
        const userData = handleUserRouter(req,res)
        if(userData){
            res.end(JSON.stringify(userData))
            return
        }
        //未命中路由 返回404
        res.writeHead(404,{'Content-type':"text/plain"})
        res.write('404 not found')
        res.end()
    }).catch((error) =>{
        console.log("error: " + error.message);
      });
}

module.exports = serverHandle