const express = require('express');
const moment = require('moment-timezone');

const multer = require("multer");
const upload = multer({dest: 'tmp_uploads/'});
const bodyParser =  require('body-parser')

const fs = require('fs');

const db = require(__dirname + '/../db_connect');
var async = require('async');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json()); 

//將商品資料傳到賣家前台去

router.get('/item-total-data',(req,res)=>{

    const item_total = `SELECT * FROM \`items\``
    
    const itemData = {
        transferdata:req.body,
        success:false,
        itemsData:""
    }
    db.queryAsync(item_total)
    .then(result=>{
        itemData.transferdata = req.body
        itemData.successful = true,
        itemData.itemsData = result
    })
    res.json(data)

})





module.exports = router;