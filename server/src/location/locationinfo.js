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
    const locusinfo = "SELECT `LocationID`,`LocationName`,`LocationArea`,`Locationlevel`,`Locationdescribe`,`Transportation`,`noted` FROM location ORDER BY LocationID";
    db.queryAsync(locusinfo)
    .then(result=>{
        res.json({
            DivelocationInfo: result
    })
    })
    
})
router.get('/marks' , (req, res)=>{
    const Marks = "SELECT `LocationID`,`LocationName`,`Latitude`,`Longitude` FROM location ORDER BY LocationID";
    db.queryAsync(Marks)
    .then(result=>{
        res.json({
            DivelocationInfo: result
    })
    })
    
})
router.get('/region' , (req, res)=>{
    const Region = "SELECT `LocationID`,`LocationArea`,`LocationName` FROM location ORDER BY LocationID";
    db.queryAsync(Region)
    .then(result=>{
        res.json({
            Divelocationregion: result
    })
    })
    
})
router.get('/images' , (req, res)=>{
    const images = "SELECT * FROM divelocationimages";
    db.queryAsync(images)
    .then(result=>{
        res.json({
            Divelocationimages: result
    })
    })
    
})
router.get('/seastate' , (req, res)=>{
    const seastate = "SELECT * FROM seastate";
    db.queryAsync(seastate)
    .then(result=>{
        res.json({
            seastate: result
    })
    })
    
})
router.get('/weekweather' , (req, res)=>{
    const weekweather = "SELECT * FROM location_weekweather";
    db.queryAsync(weekweather)
    .then(result=>{
        res.json({
            weekweather: result
    })
    })
    
})
router.get('/tide' , (req, res)=>{
    const tide = "SELECT * FROM tide";
    db.queryAsync(tide)
    .then(result=>{
        res.json({
            tide: result
    })
    })
    
})
module.exports = router;