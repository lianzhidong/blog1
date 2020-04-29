/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lianzhidong
 * @Date: 2020-04-12 18:05:19
 * @LastEditors: Lianzhidong
 * @LastEditTime: 2020-04-28 20:25:36
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
    return true
}

const deleteBlog = (id) => {
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}
