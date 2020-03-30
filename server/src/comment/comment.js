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
    console.log(req.body)
    // req.session.memberID = ''
    // const date = {
    //     'status':401,
    //     'msg':'尚未登入'
    // // }
    // if ( !req.session.memberId ) {
    //     res.json(data)
    // } else
    const sql = "INSERT INTO `comment_location` (`comment_id`,`Locationid`,`member_id`,`member_name`,`comment`) VALUE (?,?,?,?,?)"
    let commentid = "L" + moment().format('YYYYMMDDHHMMSS')
    console.log(commentid)
    let sqlStmt = [
        commentid,
        req.body.pageid,
        req.body.memberid,
        req.body.membername,
        req.body.commentitself,
    ]
    console.log(sqlStmt)
    db.queryAsync(sql , sqlStmt)
})
module.exports = router;