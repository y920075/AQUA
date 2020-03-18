const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const upload = multer({dest:'tmp_uploads/'})
const db = require(__dirname + '/../db_connect')
const itemRouter = express.Router()

// const app = express()
// app.set('view engine', 'ejs')
itemRouter.use(bodyParser.urlencoded({extended: false}))
itemRouter.use(bodyParser.json())
// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'aqua'
// })
// db.connect()
// bluebird.promisifyAll(db)



// 商品列表
itemRouter.get('/items', (req, res)=>{
    const perPage = 16
    let where = []
    if (req.query.category) where.push(`\`itemCategoryId\` ='${req.query.category}'`)
    if (req.query.brand) where.push(`\`itemBrandId\` ='${req.query.brand}'`)
    if (req.query.price) where.push(`\`itemPrice\` > '${req.query.price.split(",")[0]}' AND \`itemPrice\` < '${req.query.price.split(",")[1]}'`)
    if(where.length>0){where = 'AND '+where.join(' AND ')}else{where=''}
    
    
    let totalRows, totalPages
    let page = req.query.page ? parseInt(req.query.page) : 1

    const total = `SELECT COUNT(1) num FROM \`items\` WHERE \`itemStatus\` = 'active' ${where}`
    db.queryAsync(total)
        .then(result=>{
            totalRows = result[0].num
            if ( totalRows===0 ) {
                return false
            } else {
                totalPages = Math.ceil(totalRows/perPage)
                if (page<1) page= 1
                if (page>totalPages) page = totalRows
                    
                const sql = `SELECT \`itemId\`, \`itemName\`, \`itemImg\`, \`itemCategoryId\`, \`itemTypeId\`, \`itemBrandId\`, \`itemPrice\`  FROM \`items\` WHERE \`itemStatus\` = 'active' ${where} ORDER BY \`updated_at\` DESC LIMIT  ${(page-1)*perPage}, ${perPage}`

                return db.queryAsync(sql)
            }
        })
        .then(result=>{
           if (result.length>0) {
                res.json({
                    totalRows,
                    totalPages,
                    page,
                    rows: result
                })
           } else{
                res.json({
                    'status' : 404,
                    'msg': '查無符合條件'
                })
           }
        })
        .catch(err=>{
            console.log(err)
            return res.json(err)
        })
})

// 商品詳細資料
itemRouter.get('/items/:itemId', (req,res)=>{
    const itemId = req.params.itemId
    const data = {
        'status' : 404,
        'msg': '查無商品',
        'sellerData': '',
        'itemData': ''
    }
    const itemSQL = `SELECT * FROM \`items\` WHERE \`itemId\` = '${itemId}'`
    db.queryAsync(itemSQL)
        .then(result=>{
            if ( result[0] === undefined ) {
                return false
            } else {
                data.itemData = result
                return db.queryAsync(itemSQL)
            }
        })
        .then(result=>{
            if (result) {
                data.status = 200
                data.msg = '請求成功'
                res.json(data)
           }
        })
        .catch(err=>{
            console.log(err)
            return res.json(err)
        })
})

// 訂單列表
itemRouter.get('/orders', (req, res)=>{
    const perPage = 10
    let where = []
    const memberSession = req.session.memberId
    if (req.query.memberId) {
        where.push(`\`orderMemberId\` = '${req.query.memberId}'`)
    }
    if(where.length>0){where = 'WHERE '+where.join(' AND ')}else{where=''}

    let totalRows, totalPages
    let page = req.query.page ? parseInt(req.query.page) : 1

    const total = `SELECT COUNT(1) num FROM \`orders\` ${where}`
    db.queryAsync(total)
        .then(result=>{
            totalRows = result[0].num
            if ( totalRows===0 ) {
                return false
            } else {
                totalPages = Math.ceil(totalRows/perPage)
                if (page<1) page= 1
                if (page>totalPages) page = totalRows
                    
                const sql = `SELECT \`orders\`.\`orderItemId\`, \`orders\`.\`checkPrice\`, \`orders\`.\`checkQty\`, \`orders\`.\`checkSubtotal\`, \`orders\`.\`updated_at\`, \`items\`.\`itemSize\`, \`items\`.\`itemSellerId\`, \`basic_information\`.\`seller_name\`
                FROM \`orders\` 
                LEFT JOIN \`items\` 
                ON \`orders\`.\`orderItemId\` = \`items\`.\`itemId\` 
                LEFT JOIN \`basic_information\`
                ON \`items\`.\`itemSellerId\` = \`basic_information\`.\`seller_id\`
                ${where} 
                ORDER BY \`updated_at\` DESC 
                LIMIT  ${(page-1)*perPage}, ${perPage}`

                return db.queryAsync(sql)
            }
        })
        .then(result=>{
            if (result.length>0) {
                res.json({
                    totalRows,
                    totalPages,
                    page,
                    rows: result
                })
           } else{
                res.json({
                    'status' : 404,
                    'msg': '查無符合條件'
                })
           }
        })
        .catch(err=>{
            console.log(err)
            return res.json(err)
        })
    
})

// 訂單新增
itemRouter.post('/checkout', upload.none(), (req, res)=>{
    
    const sql = `INSERT INTO \`orders\`(
                \`orderId\`, 
                \`orderMemberId\`, 
                \`orderItemId\`, 
                \`checkPrice\`, 
                \`checkQty\`, 
                \`checkSubtotal\`) 
                VALUES (?,?,?,?,?,?)`

    db.queryAsync(sql, [
        req.body.itemName,
        req.session.memberId, // mamber session
        req.body.orderItemId,
        req.body.checkPrice,
        req.body.checkQty,
        req.body.checkSubtotal
    ])
    .then(r=>{
        console.log('新增訂單成功')
        return res.json(req.body)
        // res.redirect(req.baseUrl + '/list')
    })
    .catch(err=>{
        console.log('新增資料寫入失敗')
        return res.json(err)
    })

})






































// 新增
itemRouter.get('/insert', (req, res)=>{
    // res.render('insert')
})
itemRouter.post('/insert', upload.none(), (req, res)=>{
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
itemRouter.get('/edit/:itemId', (req, res)=>{
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
itemRouter.post('/edit/:itemId', upload.none(), (req, res)=>{
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
itemRouter.post('/delete/:itemId', upload.none(), (req, res)=>{
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
itemRouter.get('/list/:page?', (req, res)=>{
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





// itemRouter.use(function (req, res) {
//     res.type('text/html');
//     res.status(404);
//     res.send('<h1>404找不到頁面</h1>')
// })
// itemRouter.listen(3000, () => console.log(`Express server start, port:3000`))

module.exports = itemRouter