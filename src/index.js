const express = require('express');
//2建立server,建立express實體
const app = express(); 


//get post相關外掛
//url引用
const url = require('url');
//bodyParser使用post會用得到
const bodyParser = require('body-parser');
//引入cookies模組
const cookieParser = require('cookie-parser');
//引入session模組
const session = require("express-session");
//cors
//跨域資源請求//需要安裝外掛cors npm i cors
const cors = require('cors');

// const upload = require(__dirname + '/coupon/upload-module');

//資料庫連線
//db的module是獨立出來的module.js檔案不像其他的外掛是內建
const db = require(__dirname + '/db_connect');


//檔案相關操作外掛
const fs = require('fs');
//多檔上傳
const multer = require('multer');
//檔案上傳目的地//設定上傳站存目錄
const upload = multer({dest:"images/"});


//其他外掛
//moment-timezone
const moment = require("moment-timezone");


//設定view ejs引擎
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false})); 
// parse application/json
app.use(bodyParser.json());

//設定cookie和session
app.use(cookieParser('123456789'));
//session
app.use(session({
    //還沒初始化要不要儲存
    saveUninitialized: false,
    //內容沒有變更要不要存回去
    resave: false,
    //用以加密cookie字串cookie回來時檢查
    secret:"dsfsddds",
    cookie: {
        //session存活時間
        //20 分鐘單位毫秒//保持存活時間越多一班都設定20 30分鐘
        maxAge: 1200000,
        sameSite:false,
    }
}));

const whiteList = [
    'http://127.0.0.1:5500',
    'http://127.0.0.1:3000/',
    'http://127.0.0.1:5000/',
    'http://localhost:5500/',
    'http://localhost:3000',
    'http://192.168.23.78:3000/',
    'http://192.168.0.196:3000',
    'http://192.168.0.196:5500/',
    undefined
];

const corsOptions = {
    credentials:true,
    origin:function(origin,callback){
        console.log('origin:',origin);

        if(whiteList.indexOf(origin) !== -1){
            callback(null,true);//找到允許

        }else{
            callback(null,false);//找到不允許
        }
    }
}
app.use(cors(corsOptions));














//引用coupon
app.use('/seller/coupon', require(__dirname+'/coupon/coupon') );
app.use('/seller', require(__dirname+'/basic_information/basic_information') );

//潛點
app.use('/divelocation', require(__dirname+'/location/locationinfo') );
//讀取靜態檔案

app.use(express.static(__dirname + '/../public'));

//當葉面找不到時的404顯示
app.use((req,res)=>{
    res.type('text/html');
    res.status(404);
    res.send("<h2>找不到頁面</h2>");
});


//這裡是開啟port進行監聽的地方

let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("express server start");
});
