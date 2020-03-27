const express = require('express');
const moment =  require('moment-timezone');
const multer =  require("multer");
const upload =  multer({dest: 'tmp_uploads/'});
const fs =      require('fs');
const db =      require(__dirname + '/../db_connect');
var async =     require('async');
const router = express.Router();
const dateFormat = "YYYY-MM-DD";

router.get('/location' , (req, res)=>{
    const locuscomment = "SELECT * FROM comment_location";
    db.queryAsync(locuscomment)
    .then(result=>{
        res.json({
            locationcomment: result
    })
    })
    
})
router.get('/blog' , (req, res)=>{
    const locuscomment = "SELECT * FROM comment_blog";
    db.queryAsync(locuscomment)
    .then(result=>{
        res.json({
            blogcomment: result
    })
    })
    
})
//接收留言寫入資料庫
router.post('/sentlocationcomment',upload.none(),(req,res)=>{
    // req.session.memberID = ''
    // const date = {
    //     'status':401,
    //     'msg':'尚未登入'
    // // }
    // if ( !req.session.memberId ) {
    //     res.json(data)
    // } else
    const sql = "INSERT INTO `comment_location` (`comment_id`,`Locationid`,`member_id`,`member_name`,`comment_date`,`comment`) VALUE (?,?,?,?,?,?)"
    let commentid = "L" + moment().format('YYYYMMDDHHMMSS')
    let memberID = 'M20010002'
    let membername = "Valeriana Flavia"
    console.log(commentid)
    let sqlStmt = [
        commentid,
        req.params.LocationID,
        memberID,
        membername,
        // req.session.memberID,
        // req.session.membername,
        req.body.comment_date,
        req.body.comment
    ]
    db.queryAsync(aql , sqlStmt)
})
module.exports = router;