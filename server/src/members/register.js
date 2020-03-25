const express = require('express');
const moment = require('moment-timezone');

const multer = require("multer");
const upload = multer({dest: 'tmp_uploads/'});

const fs = require('fs');

const db = require(__dirname + '/../db_connect');
var async = require('async');

const router = express.Router();


const dateFormat = "YYYY-MM-DD";



router.get('/edit/:seller_id',(req,res)=>{
    const sql = "SELECT * FROM `basic_information` WHERE seller_id=?";
    db.queryAsync(sql,[req.params.seller_id])
    .then(result=>{
        if(!result || !result.length) {
            //沒有資料狀況
            res.redirect(req.baseUrl);
        } else {
            res.render('seller/info_edit', {
                row: result[0],
                url: req.baseUrl + req.url,
            });
        }
    })
    .catch(error=>{
        res.redirect(req.baseUrl);
    })
});


router.post('/edit/:seller_id',upload.single("img"),(req,res)=>{
    let update_sql = `update \`basic_information\`
                    set \`seller_account\` = ?,
                    \`seller_img\` = ?,
                    \`seller_name\` = ?,
                    \`seller_shop\` = ?,
                    \`seller_img\` = ?, `;
    const output = {
        success:false,
        error:'',
        status:0,
        body:req.body,
        result: {}
    };
    //2.產生各自的正則驗證規則
    // const email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const birthday_pattern = /^\d{4}-\d{1,2}-d{1,2}/;
    if(!req.body.name || req.body.length < 2){
        output.error = "請填寫正確姓名";
        output.status = 410;
        return res.json(output);
        //底下不繼續執行就return
    }

    // if(!req.body.email || email_pattern.test(req.body.email)){
    //     output.error = '請填寫合法的 email';
    //     output.status = 420;
    //     return res.json(output);
    // }
    if(!req.body.email || birthday_pattern.test(req.body.birthday)){
        output.error = '請填寫合法的 birthday';
        output.status = 460;
        return res.json(output);
    }
    let sql_update_Param = [
        req.body.sales_id,
        req.body.name,
        req.body.mobile,
        req.body.birthday,
        req.body.email,
    ];
    if( req.file && req.file.originalname ){
        let imgFileName = 'S' + moment(new Date()).format('YYYYMMDDHHmmss') + '.' + req.file.originalname.split('.')[1];
        fs.rename(req.file.path, './public/img/'+ imgFileName,()=>{});
        update_sql += `,image = ? where sid = ?`;
        console.log(update_sql);
        sql_update_Param.push(imgFileName,req.body.sid);
    } else {
        update_sql += `where sid = ?`;
        console.log(update_sql);

        sql_update_Param.push(req.params.sid);


    }
    console.log(update_sql);
    db.queryAsync(update_sql,sql_update_Param)
    .then(r=>{
        output.result = r;
        output.success = true;
        console.log('result:',r);
        res.redirect('/connected_book/1');

    }) 
    .catch(error=>{
        console.log(error)
        // return res.send(error);
        return res.json(output);            
    });     
});
// router.get('/insert',(req,res)=>{
//     res.render('connected_book/insert');
// });

// router.post('/insert',upload.single("img"),(req,res)=>{
//     const output = {
//         success:false,
//         error:'',
//         status:0,
//         body:req.body,
//         result: {}
//     };

//     let imgFileName;
//     if ( req.file && req.file.originalname ) {
//         imgFileName = 'S' + moment(new Date()).format('YYYYMMDDHHmmss') + "." +req.file.originalname.split('.')[1]
//         fs.rename(req.file.path, './public/img/'+ imgFileName,()=>{}) 
//     } else {
//         imgFileName = 'noImg.jpg'
//     }

//     const insert_sql = `INSERT INTO \`sales\` (\`sales_id\`,\`image\`, \`name\`, \`mobile\`, \`birthday\`, \`email\`, \`created_at\`) 
//     VALUES (? , ? , ? , ? , ? , ?, NOW());`;

//     const insert_sql_Params = [
//         req.body.sales_id,
//         imgFileName,
//         req.body.name,
//         req.body.mobile,
//         req.body.birthday,
//         req.body.email
//     ];
//     db.queryAsync(insert_sql,insert_sql_Params)
//     .then(r=>{
//         //可以針對affectrow進行驗證affectrow<1,傳過來是沒有資料的
//         output.result = r;
//         output.success = true;
//         console.log('result:', r);
//         return res.json( output);
//     })
//     .catch(error=>{
//         console.log(error)
//         // return res.send(error);
//         return res.json(output);            
//     });            
// });

router.get('/del/:sid',(req,res)=>{

    // if ( req.session.userAccess !=='1' ) {
    //     res.redirect('/connected_book/1')
    // }

    const sql = `DELETE FROM sales WHERE sid = ${req.params.sid}`
    db.query(sql,(error,result)=>{
        if (error) console.log(error)
        res.redirect('/connected_book/1')
    })
})
router.get('/basic_info',(req,res)=>{
  
    const sql_basic = `SELECT \`seller_account\`,\`seller_img\`,
    \`seller_name\`,\`seller_shop\`,\`shop_id\`,\`seller_password\`,
    \`seller_address\`,\`seller_phone\`,\`seller_mobile\`,
    \`seller_cond_id\`,\`seller_email\`,\`seller_decrip\` FROM \`basic_information\` 
    WHERE \`seller_id\`= 'S20010003'`;

    //${loginUserId}
    db.queryAsync(sql_basic)
       .then(result=>{
            
            res.json(result);
            // res.render('seller/info',{
            //     url : req.url,
            //     rows: result//物件
            // });
        });

});






module.exports = router;