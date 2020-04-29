/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-12 18:05:19
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-29 21:11:21
 */
const { exec } = require('../db/mysql.js')


const getList = (author,keyword)=>{
    let sql = `select * from blogs where 1=1 `
    if(author){
        sql += `and author='${author}' `
    }
    if(keyword){
        sql += `and title like '%${keyword}' `
    }
    sql += `order by createtime desc;`
    return exec(sql)
}
const getDetail = (id)=>{
    let sql =  `select * from blogs where id = '${id}'`
    return exec(sql).then( rows => {
        return rows[0]
    })
}

const newBlog = (blogData) => {
    //blogData是一个对象，包含content,title等属性
    const {title, content, author, } = blogData
    const createtime = Date.now()
    const sql = `insert into blogs (title,content,createtime,author) values ('${title}','${content}',${createtime},'${author}')`
    return exec(sql).then(insertData => {
        return insertData.insertId
    })
}

const updateBlog = (id,blogData={}) => {
    //blogData是一个对象，包含content,title等属性
    const {title ,content} = blogData
    const sql = `update blogs set title = '${title}',content = '${content}' where id = '${id}'`
    return exec(sql).then(updateData => {
        if(updateBlog.affectedRows > 0){
            return true
        }
        return false
    })
}

const deleteBlog = (id,author) => {
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then(deleteData => {
        if(deleteData.affectedRows > 0){
            return true
        }
        return false
    })
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}
