const express =     require('express');
const session =     require('express-session')
const cors =        require('cors')
const app =         express();

// 引入氣象局API寫入函式
const getTIdeData = require('./location/gettideinfo')

//執行資料自動寫入DB
// getTIdeData()

app.use(session({
    saveUninitialized: false,
    resave: false, // 沒變更內容是否強制回存
    // secret = 加密用的字串，透過這個值去比對，可以自訂
    secret: '加密用的字串', 
    cookie: {
        maxAge: 1200000, // session的存活時間 單位毫秒
    }
}))
app.use(cors())
app.use(require(__dirname + '/members/member'))
app.use('/divelocation', require(__dirname+'/location/locationinfo') );
//評論
app.use('/comment', require(__dirname+'/comment/comment') );

app.use(require(__dirname+'/location'))
app.use(require(__dirname+'/class/class'))
app.use(require(__dirname+'/class/coach'))
app.use(require(__dirname+'/event/event'))

app.use(require(__dirname+'/items/items'))




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
