const express = require('express');
const moment = require('moment-timezone');

const multer = require("multer");
const upload = multer({dest: 'tmp_uploads/'});
const bodyParser =  require('body-parser')
const nodemailer = require('nodemailer');

const fs = require('fs');

const db = require(__dirname + '/../db_connect');
var async = require('async');

const router = express.Router();

const coupon_code = require('coupon-code')
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json()); 


router.get('/usercouponget',(req,res)=>{

    const front_coupon_code = req.body.nowcoupget

    const backtofrontData = {
        transferdata:req.body,
        successful:false,
        resultData:""
    }

    const sql = ""
});


module.exports = router;