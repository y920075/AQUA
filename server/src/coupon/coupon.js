const express = require('express');
const moment = require('moment-timezone');

const multer = require("multer");
const upload = multer({dest: 'tmp_uploads/'});

const fs = require('fs');

const db = require(__dirname + '/../db_connect');
var async = require('async');

const router = express.Router();



//新增優惠
router.get('/insert_coup',(req,res)=>{
    //將資料庫預設的優惠券選項post到前端//將資料表中的欄位資料提取出來和並並顯示
    const sql_coup_join = "SELECT `coup_cate_id` from \`cupon_cate\`";
    const sql_minus = "SELECT over_minus FROM `over_minus_price`";
    const sql_overPerc = "SELECT over_perc FROM `over_perc`";
    const sql_overPrice = "SELECT over_price FROM `over_price`";

    var return_data = {};

    async.parallel([
        (parallel_done)=> { 
            db.query(sql_coup_join, {}, function(err,results){
                if(err) return parallel_done(err);
                return_data.table1 = results;
                parallel_done();
            });
         }, (parallel_done)=> { 
            db.query(sql_minus, {}, function(err,results){
                if(err) return parallel_done(err);
                return_data.table2 = results;
                parallel_done();
            });
         }, (parallel_done) =>{ 
            db.query(sql_overPerc, {}, function(err,results){
                if(err) return parallel_done(err);
                return_data.table3 = results;
                parallel_done();
            });
         }, (parallel_done)=> { 
            db.query(sql_overPrice, {}, function(err,results){
                if(err) return parallel_done(err);
                return_data.table4 = results;
                parallel_done();
            });
         }
    ],(err)=>{
        if (err) console.log(err);
        // res.json(return_data);
        res.render('connected_book/card',{
            totalRows,//value
            totalPages,//value
            page,//value
            url : req.url,
            rows: result//物件
        });
    });
    


});

router.post('/insert_coup',upload.single("img"),(req,res)=>{
    const output = {
        success:false,
        error:'',
        status:0,
        body:req.body,
        result: {}
    };

    let imgFileName;
    if ( req.file && req.file.originalname ) {
        imgFileName = 'S' + moment(new Date()).format('YYYYMMDDHHmmss') + "." +req.file.originalname.split('.')[1]
        fs.rename(req.file.path, './public/img/'+ imgFileName,()=>{}) 
    } else {
        imgFileName = 'noImg.jpg'
    }

    const insert_sql = `INSERT INTO \`cupon_all\` (\`coup_id\`,\`coup_name\`, \`coup_img\`, 
    \`cupon_cate\`, \`over_price_id\`, \`over_perc_id\`,
     \`over_minus_id\`, \`coup_piece_id\`, \`givi_cate_id\`,
      \`coup_for\`,  \`coup_start\`,\`coup_end\`,
      \`coup_times\`, \`create_time\`) 
    VALUES (? , ? , ? , ? , ? , ? , ?, ? , ? , ? , ? , ? , ?, NOW());`;

    const insert_sql_Params = [
        req.body.coup_id,
        imgFileName,
        req.body.name,
        req.body.mobile,
        req.body.birthday,
        req.body.email
    ];
    db.queryAsync(insert_sql,insert_sql_Params)
    .then(r=>{
        //可以針對affectrow進行驗證affectrow<1,傳過來是沒有資料的
        output.result = r;
        output.success = true;
        console.log('result:', r);
        return res.json( output);
    })
    .catch(error=>{
        console.log(error)
        // return res.send(error);
        return res.json(output);            
    });            
});
module.exports = router;