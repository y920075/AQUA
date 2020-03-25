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
    const locuscomment = "SELECT * FROM comment";
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
            locationcomment: result
    })
    })
    
})

module.exports = router;