const express = require('express');
const app = express();



app.use(require(__dirname+'/routers/class'))




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