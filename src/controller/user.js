/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-18 18:54:47
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-18 18:58:47
 */
const loginCheck = (username,password) => {
    if(username === 'zhangsan' && password ===  '123'){
        return true
    }
    return false
}
module.exports = {
    loginCheck
}
