const express =     require('express');
const session =     require('express-session')
const cors =        require('cors')
const app =         express();
const db = require('./db_connect')

// 引入氣象局API寫入函式
const getTIdeData = require('./location/gettideinfo')
const getWeekDate =  require('./location/getweekweather')
const getnowseastate = require('./location/getnowseastate')
//執行資料自動寫入DB
getTIdeData()
getWeekDate()
getnowseastate()
//一小時
setInterval(()=>{
    getnowseastate()
},3600000)
//24小時
setInterval(()=>{
    getTIdeData()
    getWeekDate()
},86400000)

app.use(session({
    saveUninitialized: false,
    resave: false, // 沒變更內容是否強制回存
    // secret = 加密用的字串，透過這個值去比對，可以自訂
    secret: '加密用的字串', 
    cookie: {
        maxAge: 1200000, // session的存活時間 單位毫秒
    }
}))

//根據前端傳送的token，去資料庫查詢會員
app.use(async (req,res,next)=>{
    const checkTokenSql  = `SELECT \`memberId\` FROM \`my_member\` WHERE accessToken = '${req.headers['access-token']}'`
    const memberData = await db.queryAsync(checkTokenSql)
    const memberId = await memberData.length>0 ? memberData[0].memberId : false 
    if ( memberId ) {
        req.session.memberId = memberId
    }
    next()
})


const whitelist = [
    'http://localhost:3000',
    'http://localhost:5000',
    'http://127.0.0.1:5000',
    'http://127.0.0.1:3000',
    undefined,
];

const corsOptions = {
    credentials: true,
    origin: function(origin, callback){
        if(whitelist.indexOf(origin) !== -1){
            callback(null, true); // 允許
        } else {
            callback(null, false); // 不允許
        }
    }
};

app.use(cors(corsOptions))
app.use(require(__dirname + '/members/member'))
app.use('/divelocation', require(__dirname+'/location/locationinfo') );
//評論
app.use('/comment', require(__dirname+'/comment/comment') );

app.use(require(__dirname+'/location'))
app.use(require(__dirname+'/class/class'))
app.use(require(__dirname+'/class/coach'))
app.use(require(__dirname+'/event/event'))
//部落格
app.use(require(__dirname + '/blog/blog'))

app.get('/try-db', (req, res)=> {
    const sql = "SELECT * FROM `blog`"
    db.query(sql, (error, result, fields)=>{
        if(!error){
            res.json(result)
        }else{
            res.end(error)
        }
    })
})

//賣家相關路由
//引用coupon
app.use('/seller/coupon', require(__dirname+'/coupon/coupon') );
app.use('/seller', require(__dirname+'/basic_information/basic_information') );

// `http://localhost:5000/seller/itemmanager/item-total-data`,
//賣家商品管理
app.use('/seller/itemmanager', require(__dirname+'/itemmanager/itemmanager') );

//引用顧客管理
app.use('/seller/customermanager', require(__dirname+'/customermanagement/customermanagement') );

//引用前端getcoupon資料
// app.use('/seller/getcoupon', require(__dirname+'/coupon/couponget') );



app.use(require(__dirname+'/items/items'))
app.use('/divelocation', require(__dirname+'/location/locationinfo') );



//------------------設定公開資料夾(所有使用者可取用)----------------//
app.use(express.static(__dirname + '/../public'))
//------------------當所有路由都找不到時使用(404頁面)---------------//
app.use((req,res)=>{
    res.type('text/plain');
    res.status(404);
    res.send(' 404 找不到頁面 ')
})
//--------------------------server監聽---------------------------//
app.listen(5000,()=>{
    console.log('express server start!')
})
