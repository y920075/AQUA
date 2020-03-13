const express = require('express');
const moment = require('moment-timezone');

const multer = require("multer");
const upload = multer({dest: 'tmp_uploads/'});

const fs = require('fs');

const db = require(__dirname + '/../db_connect');
var async = require('async');

const router = express.Router();


const dateFormat = "YYYY-MM-DD";

router.get('/location' , (req, res)=>{
    const locuscomment = "SELECT `comment_Id`,`menber_id`,`Locationid`,`comment_content`,`score`,`comment_time`FROM comment";
    db.queryAsync(locuscomment)
    .then(result=>{
        result.forEach(row,idx => {
            row.comment_time = moment(row.comment_time).format(dateFormat);
        });
        res.json({
            locationcomment: result
    })
    })
    
})
module.exports = router;