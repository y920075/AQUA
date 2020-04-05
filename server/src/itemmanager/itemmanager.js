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

router.get('/item-total-data',(req,res)=>{

    // const item_total = `SELECT * FROM`

})





module.exports = router;