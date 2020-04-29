/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-12 17:51:01
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-12 18:00:20
 */
class BaseModel{
    constructor(data,message){
        if(typeof data === 'string'){
            this.message = data
            data = null
            message = null
        }
        if(data){
            this.data = data
        }
        if(message){
            this.message
        }
    }
}

class SuccessModel extends BaseModel{
    constructor(data,message){
        super(data,message)
        this.errno = 0
    }
}

class ErrorModel extends BaseModel{
    constructor(data,message){
        super(data,message)
        this.errno = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}
