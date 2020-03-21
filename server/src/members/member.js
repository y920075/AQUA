const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
// const fs = require('fs')
const upload = multer({ dest: 'tmp_uploads/' })
const db = require(__dirname + '/../db_connect')
const memberRouter = express.Router()


// 會員註冊
memberRouter.post('/members/memberregister', upload.none(), (req, res) => {
    // res.json(req.body)
    // 先檢查輸入

    const sql = `INSERT INTO \`my_member\`(
                \`fullName\`, 
                \`email\`, 
                \`loginId\`, 
                \`loginPwd\`) 
                VALUES (?,?,?,?)`

    db.queryAsync(sql, [
        req.body.fullName,
        req.body.email,
        req.body.loginId,
        req.body.loginPwd
    ])
        .then(r => {
            console.log('新增資料寫入成功')
            return res.json(req.body)
            // res.redirect(req.baseUrl + '/list')
        })
        .catch(err => {
            console.log('新增資料寫入失敗')
            return res.json(err)
        })

})

//會員更改資料

module.exports = memberRouter;