/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-11 20:27:57
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-28 20:24:54
 */
const { getList,
        getDetail,
        newBlog,
        updateBlog,
        deleteBlog
    } = require('../controller/blog.js')
const { SuccessModel,ErrorModel} = require('../model/resModel.js')
const handleBlogRouter = (req,res)=>{
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    //获取博客列表
    if(method === 'GET' && path==='/api/blog/list'){
        const author = req.query.author
        const keyword = req.query.keyword
        // const listData = getList(author,keyword)
        // return new SuccessModel(listData)
        const result = getList(author,keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
        
    }
    //获取博客详情
    if(method === 'GET' && path==='/api/blog/detail'){
        const id = req.query.id
        const result = getDetail(id)
        return result.then( data => {
            return new SuccessModel(data)
        })
        
    }
    //新建博客
    if(method === 'POST' && path==='/api/blog/new'){
        req.body.author = '张三'
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }
    //更新博客
    if(method === 'POST' && path==='/api/blog/update'){
        const id = req.query.id
        const result = updateBlog(id,req.body)
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('更新博客失败')
        }
    }
    //删除博客
    if(method === 'POST' && path==='/api/blog/delete'){
        const id = req.query.id
        const result = deleteBlog(id)
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('删除博客失败')
        }
    }
}
module.exports = handleBlogRouter
