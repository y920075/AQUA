const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
// const fs = require('fs')
const upload = multer({ dest: 'tmp_uploads/' })
const db = require(__dirname + '/../db_connect')
const memberRouter = express.Router()


// memberRouter.get('/members/register', (req, res) => {
//     res.send('123')
// })

// 會員註冊
memberRouter.post('/members/register', upload.none(), (req, res) => {
    // res.json(req.body)
    // 先檢查輸入
    console.log(req.body)
    const sql = `INSERT INTO \`my_member\`(
                \`fullName\`, 
                \`email\`, 
                \`loginId\`, 
                \`loginPwd\`) 
                VALUES (?, ?, ?, ?)`

    db.queryAsync(sql, [
        req.body.fullName,
        req.body.email,
        req.body.loginId,
        req.body.loginPwd
    ])
        .then(r => {
            console.log('註冊成功')
            return res.json(req.body)
            // res.redirect(req.baseUrl + '/list')
        })
        .catch(err => {
            console.log('註冊失敗')
            return res.json(err)
        })

})


//會員登入
memberRouter.post('/members/login', upload.none(), (req, res) => {
    //登入邏輯
    //1.撈出sales_id和password
    const sql_login = "SELECT `loginId`,`loginPwd` FROM `my_member`";

    //2.資料綁定從前端傳過來的sales_id和password
    let loginId = req.body.loginId;
    let loginPwd = req.body.loginPwd;

    //3.登入訊息已確認資料狀態
    let login_info = {
        success: false,//登入許可
        sales_access: "",
        sales_id: "",//儲存使用者帳號
        access: "",//儲存使用者權限
        name: "",//儲存使用者姓名
        password: "",
    }
    //4.sql資料聯繫
    db.queryAsync(sql_login)
        .then(r => {
            // res.json(r);
            //使用者從前端傳過來的資料進行與資料庫比對
            r.forEach((value, index) => {
                if (loginId === value.loginId && loginPwd === value.loginPwd) {
                    login_info.success = true;
                    login_info.sales_access = "擁有觀看權限";
                    login_info.sales_id = value.sales_id;
                    login_info.name = value.name;
                    login_info.password = value.password;
                }
            })
            if (login_info.success) {
                req.session.sales_id = login_info.sales_id
                req.session.password = login_info.password
                req.session.name = login_info.name
                req.session.sales_access = login_info.sales_access
                res.json(login_info)//傳輸資料到前端
            } else {
                res.json(login_info)
            }
        })
});




//會員更改資料
memberRouter.get('/members/:memberId', (req, res) => {
    console.log('會員修改')
    const memberId = req.params.memberId
    const sql = `SELECT 
                \`avatar\`,
                \`fullName\`, 
                \`mobileNumber\`, 
                \`email\`, 
                \`address\`
                FROM \`my_member\` WHERE \`memberId\`='${memberId}'`

    db.queryAsync(sql)
        .then(r => {
            return res.status(200).json(r)
            // res.render('edit', {row: r[0]})
        })
        .catch(err => {
            return res.status(500).json(err)
        })
})
memberRouter.post('/members/:memberId', upload.single(), (req, res) => {
    const sql = `UPDATE \`my_member\` SET 
                \`avatar\`=?,
                \`fullName\`=?,
                \`mobileNumber\`=?,
                \`email\`=?,
                \`address\`=?
                 WHERE \`memberId\`=?`

    db.queryAsync(sql, [
        // req.body.avatar,
        req.body.fullName,
        req.body.mobileNumber,
        req.body.email,
        req.body.address,
        req.params.memberId
    ])
        .then(r => {
            console.log('修改資料成功')
            return res.json(req.body)
            // res.redirect(req.baseUrl + '/list')
        })
        .catch(err => {
            console.log('修改資料失敗')
            return res.json(err)
        })
})

module.exports = memberRouter;