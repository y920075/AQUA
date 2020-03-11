const express = require('express');
const moment = require('moment-timezone');

const multer = require("multer");
const upload = multer({dest: 'tmp_uploads/'});

const fs = require('fs');

const db = require(__dirname + '/../db_connect');
var async = require('async');

const router = express.Router();


const dateFormat = "YYYY-MM-DD";

router.get('/info' , (req, res)=>{
    const locusinfo = `SELECT * FROM location ORDER BY LocationID`;
    db.queryAsync(locusinfo)
    .then(result=>{
        res.json({
            DivelocationInfo: result
    })
    })
    
})
module.exports = router;