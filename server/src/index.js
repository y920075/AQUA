const express =     require('express');
const session =     require('express-session')
const cors =        require('cors')
const app =         express();
const url = require('url');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const upload = multer({dest: 'tmp_uploads/'})
const db = require(__dirname + '/db_connect')

app.use(session({
    saveUninitialized: false,
    resave: false, // 沒變更內容是否強制回存
    // secret = 加密用的字串，透過這個值去比對，可以自訂
    secret: '加密用的字串', 
    cookie: {
        maxAge: 120000, // session的存活時間 單位毫秒
    }
}))
app.use(cors())



app.use(require(__dirname+'/location'))
app.use(require(__dirname+'/class/class'))
app.use(require(__dirname+'/class/coach'))
app.use(require(__dirname+'/event/event'))
//部落格
app.use(require(__dirname + '/blog/blog'))

app.post('/try-upload', upload.array('avatar', 12), (req, res)=>{
    const output = {
        success: false,
        url: '',
        msg: '',
    }
    console.log(req.files);
    const arrayImg = req.files.length
    for(let i=0; i<arrayImg; i++){
        // console.log(req.files.originalname);
        if(req.files[i] && req.files[i].originalname){
            switch (req.files[i].mimetype) {
                case 'image/jpeg':
                case 'image/png':
                case 'image/gif':
                    fs.rename(req.files[i].path, './public/img/'+req.files[i].originalname, error=>{
                        if(error){
                            output.success = false;
                            output.msg = '無法搬動檔案';
                        } else {
                            output.success = true
                            output.url = '/img/'+req.files[i].originalname;
                            output.msg = '';
                        }
                        res.json(output);
                    });
    
                    break;
                default:
                    fs.unlink(req.files[i].path, error=>{
                        output.msg = '不接受式這種檔案格';
                        res.json(output);
                    });
            }
        } else {
            res.json(output);
        }
    }
})

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