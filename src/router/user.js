/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-11 20:28:08
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-18 22:17:43
 */
const {loginCheck} = require('../controller/user')
const { SuccessModel,ErrorModel} = require('../model/resModel.js')
const handleUserRouter = (req,res)=>{
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    //登录接口
    if(method === 'POST' && path === '/api/user/login'){
        const {username,password} = req.body
        const result = loginCheck(req.query.username,req.query.password)
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('登陆失败')
        }
    }
}
module.exports = handleUserRouter