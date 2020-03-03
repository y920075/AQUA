const express = require('express')
const bodyParser = require('body-parser');
const multer = require('multer')
const fs = require('fs')
const session = require('express-session')
const mysql = require('mysql')
// const moment = require('moment-timezone')
const cors = require('cors')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
const db = require(__dirname + '/db_connect')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const upload = multer({dest:'tmp_uploads/'})
const port = 3000


// 振維 router
app.use('/items', require(__dirname+'/items/itemsSeverSide'))


// 江禹 router



// 戴靖 router



// 家鴻 router



// 元昊 router



// Harrison router



// ??







app.use(function (req, res) {
    res.type('text/html');
    res.status(404);
    res.send('<h1>404找不到頁面</h1>')
})
app.listen(port, () => console.log(`AQUA server start, ${port}`))