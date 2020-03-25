const express = require('express');
const router = express.Router();
const db = require(__dirname + '/../db_connect');
const multer =  require('multer');
const upload =  multer({dest:'tmp_uploads/'})


    

router.use((req,res,next)=>{
    //登入
    // var name = "guest";//預設登入者
    // loginStatus=false;
    // if(req.signedCookies.user  && req.signedCookies.password){
    //     　 name=req.signedCookies.user+ ' '+req.signedCookies.password
    // }
    
    /*
    // 這裡要記錄session的資料
    */
        //如果他有設定就會拿到值,會有一個isLogin的值傳到login-test-login.ejs
        //有登入把帳號設定給他
        //登入之後顯示暱稱
        res.locals.sales_id = req.session.sales_id || false,
        res.locals.name = req.session.name || false, 
        res.locals.sales_access = req.session.sales_access || false,
        res.locals.password = req.session.password || false
        next();
    
    });
//設定登入狀態 isLogin 都是false
// var loginStatus=false;
// 進入需要驗證的頁面...

//實作權限判斷middleWare

router.use((req, res, next)=>{
    console.log(req.session);

    let checkUserList = ['/login.html','/login']; 
if(!req.session.sales_id){
    //如果沒有登入判斷路徑是不是/login
    if(checkUserList.indexOf(req.url) !== -1){        //讓他可以看到登入頁面            //可以寫一個路徑陣列讓他允許拜訪哪個路徑

        next();
    } else {//其他/...路徑沒有拜訪全縣 ex /sess
        res.send('<h2>你沒有權限</h2><a href="/login.html"></a>')

    }
} else {
    next();
}
});


router.post('/login',upload.none(),(req,res)=>{
//登入邏輯
//1.撈出sales_id和password
const sql_confront = "SELECT `sales_id`,`password`,`name` FROM `sales`";
//2.資料綁定從前端傳過來的sales_id和password
let sales_id = req.body.sales_id;
let password = req.body.password;
//3.登入訊息已確認資料狀態

let login_info = {
    success: false,//登入許可
    sales_access:"",
    sales_id: "",//儲存使用者帳號
    access:"",//儲存使用者權限
    name:"",//儲存使用者姓名
    password:"",
} 
//4.sql資料聯繫
db.queryAsync(sql_confront)
.then(r=>{
    // res.json(r);
    //使用者從前端傳過來的資料進行與資料庫比對
    r.forEach((value,index)=>{
        if(sales_id === value.sales_id && password === value.password){
            login_info.success = true;
            login_info.sales_access = "擁有觀看權限";
            login_info.sales_id = value.sales_id;
            login_info.name = value.name;
            login_info.password = value.password;
        }
    })
    if(login_info.success) {
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
//登入才可以有全縣看到這格˙
router.get('/sess',(req,res)=>{
res.json(req.session);
});


router.get('/logout',(req,res)=>{
//登出

//     res.clearCookie('firstName',{path:'/login-test'});
// 　　　res.clearCookie('lastName',{path:'/login-test'});

// 這裡要登出需要刪除原本紀錄的session
delete req.session.sales_id;
delete req.session.password;
delete req.session.name;
delete req.session.sales_access;
// 內層的redirect需要完整路徑用baseUrl改外面app.use('/login-test'不需要改裡面路徑的程式碼
return res.redirect(req.baseUrl + '/login.html');
});
module.exports = router;