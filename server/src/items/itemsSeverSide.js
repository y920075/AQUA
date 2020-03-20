const express = require('express')
const bodyParser = require('body-parser');
// const fs = require('fs')
const mysql = require('mysql')
// const bluebird = require('bluebird')
const multer = require('multer')
const upload = multer({dest:'tmp_uploads/'})
const itemsApp = express.Router()
const db = require(__dirname + '/../db_connect')

// const app = express()
// app.set('view engine', 'ejs')
itemsApp.use(bodyParser.urlencoded({extended: false}))
itemsApp.use(bodyParser.json())
// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'aqua'
// })
// db.connect()
// bluebird.promisifyAll(db)


// 新增
itemsApp.get('/insert', (req, res)=>{
    // res.render('insert')
})
itemsApp.post('/insert', upload.none(), (req, res)=>{
    // res.json(req.body)
    // 先檢查輸入
    
    const sql = `INSERT INTO \`items\`(
                \`itemName\`, 
                \`itemImg\`, 
                \`itemCategoryId\`, 
                \`itemTypeId\`, 
                \`itemDescription\`, 
                \`itemMaterial\`, 
                \`itemBrandId\`, 
                \`itemSellerId\`, 
                \`itemStatus\`, 
                \`itemSize\`, 
                \`itemPrice\`, 
                \`itemQty\`) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`

    db.queryAsync(sql, [
        req.body.itemName,
        req.body.itemImg,
        req.body.itemCategoryId,
        req.body.itemTypeId,
        req.body.itemDescription,
        req.body.itemMaterial,
        req.body.itemBrandId,
        req.body.itemSellerId,
        req.body.itemStatus,
        req.body.itemSize,
        req.body.itemPrice,
        req.body.itemQty
    ])
    .then(r=>{
        console.log('新增資料寫入成功')
        return res.json(req.body)
        // res.redirect(req.baseUrl + '/list')
    })
    .catch(err=>{
        console.log('新增資料寫入失敗')
        return res.json(err)
    })

})

// 修改
itemsApp.get('/edit/:itemId', (req, res)=>{
    const sql = `SELECT 
                \`itemName\`, 
                \`itemImg\`, 
                \`itemCategoryId\`, 
                \`itemTypeId\`, 
                \`itemDescription\`, 
                \`itemMaterial\`, 
                \`itemBrandId\`, 
                \`itemSellerId\`, 
                \`itemStatus\`, 
                \`itemSize\`, 
                \`itemPrice\`, 
                \`itemQty\`, 
                FROM \`items\` WHERE \`itemId\`=?`

    db.queryAsync(sql, [req.params.itemId])
        .then(r=>{

            // res.render('edit', {row: r[0]})
        })
})
itemsApp.post('/edit/:itemId', upload.none(), (req, res)=>{
    const sql = `UPDATE \`items\` SET 
                \`itemName\`=?,
                \`itemImg\`=?,
                \`itemCategoryId\`=?,
                \`itemTypeId\`=?,
                \`itemDescription\`=?,
                \`itemMaterial\`=?,
                \`itemBrandId\`=?,
                \`itemStatus\`=?,
                \`itemSize\`=?,
                \`itemPrice\`=?,
                \`itemQty\`=? WHERE \`itemId\`=?`
    
    db.queryAsync(sql, [
        req.body.itemName,
        req.body.itemImg,
        req.body.itemCategoryId,
        req.body.itemTypeId,
        req.body.itemDescription,
        req.body.itemMaterial,
        req.body.itemBrandId,
        req.body.itemStatus,
        req.body.itemSize,
        req.body.itemPrice,
        req.body.itemQty,
        req.params.itemId
    ])
    .then(r=>{
        console.log('修改資料更新成功')
        return res.json(req.body)
        // res.redirect(req.baseUrl + '/list')
    })
    .catch(err=>{
        console.log('修改資料更新失敗')
        return res.json(err)
    })
})
// 刪除
itemsApp.post('/delete/:itemId', upload.none(), (req, res)=>{
    const sql = `UPDATE \`items\` SET 
    \`itemStatus\`=4 WHERE \`itemId\`=?`
    
    db.queryAsync(sql, [req.params.itemId])
    .then(r=>{
        console.log('刪除狀態更新成功')
        return res.json(r)
        // res.redirect(req.baseUrl + '/list')
    })
    .catch(err=>{
        console.log('刪除狀態更新失敗')
        return res.json(err)
    })
})

// 查詢
itemsApp.get('/list/:page?', (req, res)=>{
    console.log('進入列表')
    const perPage = 16
    let totalRows, totalPages
    let page = req.params.page ? parseInt(req.params.page) : 1

    const total = "SELECT COUNT(1) num FROM `items`"
    db.queryAsync(total)
        .then(result=>{
            totalRows = result[0].num
            totalPages = Math.ceil(totalRows/perPage)
            // res.json(result)
            if (page<1) page= 1
            if (page>totalPages) page = totalRows
                
            const sql = `SELECT * FROM \`items\` ORDER BY \`updated_at\` DESC LIMIT  ${(page-1)*perPage}, ${perPage}`

            return db.queryAsync(sql)
        })
        .then(result=>{
            // res.render('list', {
            //     totalRows,
            //     totalPages,
            //     page,
            //     rows: result
            // })
            res.json({
                totalRows,
                totalPages,
                page,
                rows: result
            })
        })
        .catch(err=>{
            console.log('刪除狀態更新失敗')
            return res.json(err)
        })
    
})





// itemsApp.use(function (req, res) {
//     res.type('text/html');
//     res.status(404);
//     res.send('<h1>404找不到頁面</h1>')
// })
// itemsApp.listen(3000, () => console.log(`Express server start, port:3000`))

module.exports = itemsApp