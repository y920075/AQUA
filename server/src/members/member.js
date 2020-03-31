const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
// const fs = require('fs')
const upload = multer({ dest: 'tmp_uploads/' })
const db = require(__dirname + '/../db_connect')
const moment = require('moment-timezone')
const memberRouter = express.Router()
const { uuid } = require('uuidv4');


// 會員註冊
memberRouter.post('/members/register', upload.none(), (req, res) => {

    // 自動產生MemberId
    let memberId = "";
    let idd = "";
    const sqlMAX = `SELECT MAX(\`idd\`) AS \`idd\`
                FROM \`my_member\` 
                WHERE DATE_FORMAT(\`created_at\`,'%Y-%m') = '${moment(new Date()).format('YYYY-MM')}'`;

    db.query(sqlMAX, (error, result) => {
        if (error) throw error
        if (!result[0].idd) {
            idd = '1';
            memberId = `M${moment(new Date()).format('YYMM')}${idd.padStart(4, '0')}`;
        } else {
            idd = `${result[0].idd + 1}`;
            memberId = `M${moment(new Date()).format('YYMM')}${idd.padStart(4, '0')}`;
        }

        // res.json(req.body)
        // 先檢查輸入
        console.log(req.body)
        const sql = `INSERT INTO \`my_member\`(
                    \`fullName\`, 
                    \`email\`, 
                    \`loginId\`, 
                    \`loginPwd\`,
                    \`avatar\`,
                    \`memberId\`,
                    \`idd\`,
                    \`accessToken\`)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
                    //新增註冊的時候，一起存一個token進去

        db.queryAsync(sql, [
            req.body.fullName,
            req.body.email,
            req.body.loginId,
            req.body.loginPwd,
            'DefaultImage.jpg',
            memberId,
            idd,
            uuid()+uuid() //uuid產生的token
        ])
            .then(r => {
                console.log('註冊成功')
                return res.json(req.body)
            })
            .catch(err => {
                console.log('註冊失敗')
                return res.json(err)
            })
    });
})


//會員登入
memberRouter.post('/members/login', upload.none(), (req, res) => {
    console.log(req.body)
    //登入邏輯
    //1.撈出username和password
    const sql_login = "SELECT `memberId`, `loginId`,`loginPwd`, `avatar`,`accessToken` FROM `my_member`";

    //2.資料綁定從前端傳過來的username和password
    let loginId = req.body.loginId;
    let loginPwd = req.body.loginPwd;

    //3.登入訊息已確認資料狀態
    let login_info = {
        success: false,//登入許可
        username: "",//儲存username
        password: "",//儲存password
        memberId: "",
        avatar: "",
        token:"",//儲存token
    }
    //4.sql資料聯繫
    db.queryAsync(sql_login)
        .then(r => {
            //使用者從前端傳過來的資料進行與資料庫比對
            r.forEach((value, index) => {
                if (loginId === value.loginId && loginPwd === value.loginPwd) {
                    login_info.success = true;
                    login_info.username = value.loginId;
                    login_info.password = value.loginPwd;
                    login_info.memberId = value.memberId;
                    login_info.avatar = value.avatar;
                    login_info.token = value.accessToken;
                }
            })
            if (login_info.success) {
                req.session.password = login_info.loginPwd;
                req.session.username = login_info.loginId;
                req.session.memberId = login_info.memberId;
                res.cookie('token',login_info.token,{maxAge:12000000}) //設定cookie給前端
                res.json(login_info)//傳輸資料到前端
            } else {
                res.json(login_info)
            }
        })
        
});




//會員更改資料
memberRouter.get('/members', (req, res) => {
// console.log(req)
    const memberObj = {
        result:"",
        success:false,
        memberId:req.session.memberId,
    }
    const memberId = req.params.memberId
    const sql = `SELECT 
                \`avatar\`,
                \`fullName\`, 
                \`mobileNumber\`, 
                \`email\`, 
                \`address\`,
                \`memberId\`,
                \`JoinDate\`
                FROM \`my_member\` WHERE \`memberId\`='${req.session.memberId}'`

    db.queryAsync(sql)
        .then(r => {
            memberObj.result = r;
            memberObj.success = true;
            // return res.status(200).json(r)
            // res.render('edit', {row: r[0]})
            return res.json(memberObj)
        })
        .catch(err => {
            return res.status(500).json(err)
        })
})

memberRouter.post('/members', upload.single(), (req, res) => {
    console.log(req.session)
    const memberObj = {
        result:"",
        success:false,
        memberId:req.session.memberId,
        avatar:"DefaultImgage.jpg"
    }
    const sql = `UPDATE \`my_member\` SET 
                \`avatar\`=?,
                \`fullName\`=?,
                \`mobileNumber\`=?,
                \`email\`=?,
                \`address\`=?
                 WHERE \`memberId\`=?`

    db.queryAsync(sql, [
        memberObj.avatar,
        req.body.fullName,
        req.body.mobileNumber,
        req.body.email,
        req.body.address,
        req.session.memberId
        // memberObj.memberId
        // req.params.memberId
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

//會員登出
memberRouter.post('/logout',(req,res)=>{
    delete req.session.memberId
    res.json({
        status:201,
        msg:'登出成功'
    })
})

module.exports = memberRouter;