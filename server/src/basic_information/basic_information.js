const express = require('express');
const moment = require('moment-timezone');

const multer = require("multer");
const upload = multer({dest: 'tmp_uploads/'});

const fs = require('fs');

const db = require(__dirname + '/../db_connect');
var async = require('async');

const router = express.Router();


const dateFormat = "YYYY-MM-DD";

  
  


router.get('/basic_info',(req,res)=>{
  
    const data = {
        'status' : 404,
        'msg' :　'查無資料',
        'basic_info' : '',    
    }
    // const sql_basic = `SELECT * FROM \`basic_information\` WHERE \`seller_id\` = '${req.session.seller_id}'`;
    const sql_basic = `SELECT \`basic_information\`.\`seller_id\`,
    \`basic_information\`.\`seller_account\`,
    \`basic_information\`.\`seller_img\`,
    \`basic_information\`.\`seller_name\`,
    \`basic_information\`.\`seller_shop\`,
    \`basic_information\`.\`shop_img\`, 
    \`basic_information\`.\`seller_password\`,
    \`basic_information\`.\`seller_address\`,
    \`basic_information\`.\`seller_phone\`,
    \`basic_information\`.\`seller_mobile\`,
    \`basic_information\`.\`seller_cond_id\`,
    \`basic_information\`.\`seller_email\`,
    \`basic_information\`.\`seller_decrip\`,
    \`seller_status\`.\`seller_status\`
     FROM \`basic_information\`
     INNER JOIN \`seller_status\`
    ON \`basic_information\`.\`seller_cond_id\` = \`seller_status\`.\`seller_cond_id\`
     WHERE \`basic_information\`.\`seller_id\`= 'S20010001'`;

    db.queryAsync(sql_basic)
       .then(result=>{
        data.status = 202;
        data.msg = "有資料可顯示";
        data.basic_info = result;
            res.json(data);
            // res.render('seller/info',{
            //     url : req.url,
            //     rows: result//物件
            // });
        });

});




//router.get('/edit/S20010001',(req,res)=>{

//router.get('/edit/:seller_id',(req,res)=>{
//上面這才是正確
//下面做前端測試

//賣家取得自己編輯頁面的上次編輯資料

/*
    預計從前端接收的資料
    GET /seller/req.session.seller_id 
    req.session.seller_id = 賣家編號


        預計傳送回去的資料
   {
        status =        狀態碼 200=請求成功 401=尚未登入 404=查無資料
        msg =           說明訊息
        seller_info: [
            {
                id = 流水號
                seller_id = 賣家編號
                seller_account = 賣家帳號
                seller_img = 賣家個人照片
                seller_name = 賣家姓名
                seller_shop = 賣場名
                shop_img = 賣場圖片
                seller_password = 賣家密碼
                seller_address = 賣家聯絡地址
                seller_phone = 賣家電話
                seller_mobile = 賣家手機
                seller_cond_id = 賣家狀態id
                seller_status = 賣家狀態
                seller_email = 賣家電郵
                seller_decrip = 賣場描述

            }
        ]
    }
*/
router.get('/edit/:seller_id',(req,res)=>{

    const data = {
        'status' : 404,
        'msg' :　'查無資料',
        'seller_info' : '',    
    }

    // if ( !req.session.seller_id ) {
    //     data.status = '401'
    //     data.msg = '尚未登入'
    //     res.json(data)
    // } else {

       
        const sql = `SELECT \`basic_information\`.\`seller_id\`,
        \`basic_information\`.\`seller_account\`,
        \`basic_information\`.\`seller_img\`,
        \`basic_information\`.\`seller_name\`,
        \`basic_information\`.\`seller_shop\`,
        \`basic_information\`.\`shop_img\`, 
        \`basic_information\`.\`seller_password\`,
        \`basic_information\`.\`seller_address\`,
        \`basic_information\`.\`seller_phone\`,
        \`basic_information\`.\`seller_mobile\`,
        \`basic_information\`.\`seller_cond_id\`,
        \`basic_information\`.\`seller_email\`,
        \`basic_information\`.\`seller_decrip\`,
        \`seller_status\`.\`seller_status\`
         FROM \`basic_information\`
         INNER JOIN \`seller_status\`
        ON \`basic_information\`.\`seller_cond_id\` = \`seller_status\`.\`seller_cond_id\`
         WHERE \`basic_information\`.\`seller_id\`= '${req.session.seller_id}'`;
//         WHERE seller_id= '${req.session.seller_id}'`;

         db.queryAsync(sql,[req.params.seller_id])
        .then(result=>{
            if(!result || !result.length) {
                //沒有資料狀況
                res.redirect(req.baseUrl);
            } else {
                data.status = 200
                data.msg = '請求成功'
                data.seller_info = result;
                res.json(result);
            }
            })
            .catch(error=>{
                res.redirect(req.baseUrl);
            })
            // }
   
   //    db.queryAsync(sql,[req.params.S20010001])

   
});

//賣家編輯自己的資料並更新資料庫的資料

/*
    預計從前端接收的資料
    GET /seller/req.session.seller_id 
    req.session.seller_id = 賣家編號

    req.body.seller_account = 賣家帳號
    req.body.seller_img = 賣家個人照片
    req.body.seller_name = 賣家姓名
    req.body.seller_shop = 賣場名
    req.body.shop_img = 賣場圖片
    req.body.seller_password = 賣家密碼
    req.body.seller_address = 賣家聯絡地址
    req.body.seller_phone = 賣家電話
    req.body.seller_mobile = 賣家手機
    req.body.seller_email = 賣家電郵
    req.body.seller_decrip = 賣場描述


        預計傳送回去的資料
   {
        status =        狀態碼 201=修改成功401=尚未登入 412=資料驗證失敗
        msg =           說明訊息
    
    }
*/

//upload.fields([{ name: 'seller_img', maxCount: 1 }, { name: 'shop_img', maxCount: 8 }])
router.put('/edit/:seller_id',upload.fields([{ name: 'seller_img', maxCount: 1 }, { name: 'shop_img', maxCount: 8 }]),(req,res)=>{
    const data = {
        'status' : 412,
        'msg' : '資料驗證失敗',
        'seller_info_update' : '',    
    }
        //2.產生各自的正則驗證規則
    // switch(true){
        // case !req.session.seller_id:
        //     data.status='401'
        //     data.msg='尚未登入'
        //     res.json(data)
        //     break
        // case (!req.body.seller_account||
        //     !req.body.seller_name||
        //     !req.body.seller_shop||
        //     !req.body.seller_password||
        //     !req.body.seller_address||
        //     !req.body.seller_phone||
        //     !req.body.seller_mobile||
        //     !req.body.seller_cond_id||
        //     !req.body.seller_email||
        //     !req.body.seller_decrip||
        //     !req.body.seller_img):
        //     data.status='400'
        //     data.msg='資料缺失'
        //     res.json(data)
        //     break
    //     case (/(^\s*$)/g).test(req.body.seller_account):
    //         data.msg='帳號不可為空白';
    //         res.json(data);
    //         break;
    //     case (/(^\s*$)/g).test(req.body.seller_name):
    //         data.msg='姓名不可為空白';
    //         res.json(data);
    //         break;
    //     case (/(^\s*$)/g).test(req.body.seller_shop):
    //         data.msg='賣場名不可為空白';
    //         res.json(data);
    //         break;    
    //      case (/(^\s*$)/g).test(req.body.seller_password):
    //         data.msg='密碼不可為空白';
    //         res.json(data);
    //         break;       
    //     case req.body.seller_account.length > 16 :
    //         data.msg='帳號過長';
    //         res.json(data);
    //         break;
    //     case req.body.seller_name.length > 10 :
    //         data.msg='姓名過長';
    //         res.json(data);
    //         break;
    //     case req.body.seller_password > 16 :
    //         data.msg='密碼過長';
    //         res.json(data);
    //         break;          
    //     case (/^.+@.+$/g).test(req.body.seller_email) :
    //         data.msg='電子郵件格式不對沒有@'
    //         res.json(data);
    //         break;
    //     case (/(^\s*$)/g).test(req.body.seller_email) :
    //         data.msg='電子郵件不可為空白';
    //         res.json(data);
    //         break;
    //     case (/(^\s*$)/g).test(req.body.seller_phone) :
    //         data.msg='電話不可為空白';
    //         res.json(data);
    //         break;
    //     case !req.body.seller_phone.match(/^\d{1,10}$/g) :
    //         data.msg='電話不可超過10位數'
    //         res.json(data);
    //         break;      
    //     case (/(^\s*$)/g).test(req.body.seller_mobile) :
    //         data.msg='手機不可為空白';
    //         res.json(data);
    //         break; 
    //     case !req.body.seller_mobile.match(/^\d{1,10}$/g) :
    //         data.msg='手機不可超過10位數'
    //         res.json(data);
    //         break;        
    //     case (/(^\s*$)/g).test(req.body.seller_decrip):
    //         data.msg='賣場描述不可為空白';
    //         res.json(data)
    //         break;
    //     case req.body.seller_decrip.length > 250:
    //         data.msg='賣場描述過長';
    //         res.json(data)
    //         break;
    //     default:
    //         data.status='202'
    // }

    const multileple_img = req.files['shop_img'] ? `basic_information.shop_img = ? ` : "";

   
    let update_sql = `UPDATE basic_information
                    SET basic_information.seller_account = ?,
                        basic_information.seller_name = ?,
                        basic_information.seller_shop = ?,
                        basic_information.seller_password = ?,
                        basic_information.seller_address = ?,
                        basic_information.seller_phone = ?,
                        basic_information.seller_mobile = ?,
                        basic_information.seller_cond_id = ?,
                        basic_information.seller_email = ?,
                        basic_information.seller_decrip = ?,
                        ${multileple_img}`;
                 
                       

                        let sql_update_Param = [
                            req.body.seller_account,
                            req.body.seller_name,
                            req.body.seller_shop,
                            req.body.seller_password,
                            req.body.seller_address,
                            req.body.seller_phone,
                            req.body.seller_mobile,
                            req.body.seller_cond_id,
                            req.body.seller_email,
                            req.body.seller_decrip,
                        ];

                        if( multileple_img ){


                            req.files['shop_img'].forEach((element,index) => {
                                                                  
                                    fs.rename(element.path, `./images/shopimg/${element.originalname}`,()=>{});
                                   
                                    
                            });  
                            
                            sql_update_Param.push(JSON.stringify(req.files['shop_img']));

                            } else{ 
                        
                                sql_update_Param.push(req.params.seller_id)
                            }

                            if( req.files['seller_img'][0] && req.files['seller_img'][0].originalname ){
                                let imgFileName = 'S' + moment(new Date()).format('YYYYMMDDHHmmss') + '.' + req.files['seller_img'][0].originalname.split('.')[1];
                                fs.rename(req.files['seller_img'][0].path, `./images/${imgFileName}`,()=>{});
                                update_sql += `,basic_information.seller_img = ? WHERE basic_information.seller_id = 'S20010001' `; 
                                sql_update_Param.push(imgFileName);
                            } else {
                                update_sql += ` WHERE basic_information.seller_id = 'S20010001'`;
                        
                                sql_update_Param.push(req.params.seller_id);
                        
                        
                            }
            
    
    // req.body 物件中是表單中提交的文字欄位(如果有)

    // , WHERE \`seller_id\` = 'S20010001'

  

    //單一圖片上傳
    // if( req.file && req.file.originalname ){
    //     let imgFileName = 'S' + moment(new Date()).format('YYYYMMDDHHmmss') + '.' + req.file.originalname.split('.')[1];
    //     fs.rename(req.file.path, './public/images'+ imgFileName,()=>{});
    //     update_sql += `,\`basic_information\`.\`seller_img\` = ? where \`basic_information\`.\`seller_id\` = 'S20010001' `; 
    //     // console.log(update_sql);
    //     sql_update_Param.push(imgFileName,req.body.seller_id);
    // } else {
    //     update_sql += `,\`basic_information\`.\`seller_id\` = 'S20010001'`;
    //     // console.log(update_sql);

    //     sql_update_Param.push(req.params.seller_id);


    // }
    //where \`seller_id\` = '${req.session.seller_id}'`;


  
     

    


    // console.log(update_sql);
    // if ( data.status==='202' ) {
        db.queryAsync(update_sql,sql_update_Param)
        .then(r=>{
            data.seller_info_update = r;
            data.msg = "資料更新成功";
            data.status = 201;
            console.log('seller_info_update:',r);
            res.json(data);   
    
        }) 
        .catch(error=>{
            console.log(error)
            // return res.send(error);
            return res.json(data);            
        });
    // } else {
    //     data.msg = "資料驗證失敗";
    //     data.status = 412;
    // }
      
});








module.exports = router;