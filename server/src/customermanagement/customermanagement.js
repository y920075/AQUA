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

//把使用者的資料撈出來丟到前端
/*  GET /customer-info?comcus_buy_perc=常客購買率&comcus_visit_perc=常客到訪點擊率&sort=排序類型(類型,方法)&page=頁碼	
req.query.comcus_buy_perc 0~100
req.query.comcus_visit_perc 0~100
區間:0~30
    31~40
    41~50
    51~60
    61~70
    71~80
    81~90
    91~100
    只找>50和<50的
    1.comcus_buy_perc>50和comcus_visit<50
    2.comcus_buy_perc<50和comcus_visit>50
    3.comcus_buy_perc<50和comcus_visit<50
    4.comcus_buy_perc>50和comcus_visit>50

*/
router.get('/customer-info',(req,res)=>{
    req.session.seller_id = 'S20010001'
 
     
  
    const customer_sql_one = `SELECT * FROM \`common_custom\``;
       
         db.queryAsync(customer_sql_one)
         .then(result=>{
             if ( result.length>0 ) {
                 result.seller_id = req.session.seller_id 
                 res.json({
                     'status' :        200,
                     'msg':            '請求成功',
                     result,
             })
             } else {
                 res.json({
                     'status' :        404,
                     'msg':            '查無任何資料',
                     'sellerId' :     req.session.seller_id,
                 })
             }
         })
 
   
 })
router.get('/customer-coupon-use',(req,res)=>{

    const sql_coup_one = "SELECT \`coup_PriOrPer\`,\`coup_over\`,\`coup_code\`,\`coup_img\`,\`coup_name\`,date_format(coup_start, '%m-%d-%Y') AS datecoup_time_start, date_format(coup_end, '%m-%d-%Y') AS datecoup_time_end from \`coup01_allorder\`";
    const sql_coup_two = "SELECT \`coup_PriOrPer\`,\`coup_over\`,\`itemTypeId\`,\`coup_code\`,\`coup_img\`,\`coup_name\`,date_format(coup_start, '%m-%d-%Y') AS datecoup_time_start, date_format(coup_end, '%m-%d-%Y') AS datecoup_time_end from \`coup02_goods\`";
    const sql_coup_three = "SELECT \`givi_name\`,\`coup_over\`,\`coup_code\`,\`coup_name\`,\`coup_img\`,date_format(coup_start, '%m-%d-%Y') AS datecoup_time_start, date_format(coup_end, '%m-%d-%Y') AS datecoup_time_end from \`coup03_givi\`";
   
   
   const return_data = {}
    async.parallel([
        (parallel_done)=> { 
            db.query(sql_coup_one, {}, function(err,results){
                if(err) return parallel_done(err);
                return_data.table1 = results;
                parallel_done();
            });
         }, (parallel_done)=> { 
            db.query(sql_coup_two, {}, function(err,results){
                if(err) return parallel_done(err);
                return_data.table2 = results;
                parallel_done();
            });
         }, (parallel_done) =>{ 
            db.query(sql_coup_three, {}, function(err,results){
                if(err) return parallel_done(err);
                return_data.table3 = results;
                parallel_done();
            });
         }
        ],(err)=>{
            if (err) console.log(err);
            res.json(return_data);
         
        });
})



router.get('/customer-search',(req,res)=>{
   req.session.seller_id = 'S20010001'

    //設置常客的查詢參數
    const searchComcus = req.query.searchType;
    // console.log(searchComcus)
    // const perPage = 6;
    // let page = req.query.page ? parseInt(req.query.page) : 1;
    // let totalRows;
    // let totalPages;

    if(searchComcus == "buyPercentHight"){
        const customer_sql_one = `SELECT * FROM \`common_custom\` WHERE \`comcus_buy_perc\` > 50 AND \`comcus_visit_perc\` < 50`;

        db.queryAsync(customer_sql_one)
        // .then(result=>{
        //     totalRows = result[0].rows;
        //     if ( totalRows===0 ) {
        //         return false
        //     } else {
        //         totalPages = Math.ceil(totalRows/perPage);
        //         if (page<1) page=1;
        //         if (page>totalPages) page=totalPages;

        //         const sql = `   SELECT *
        //                         FROM \`common_custom\` 
        //                         WHERE ${searchComcus_BuyType} > 50 AND ${ searchComcus_VisitType} < 50
        //                         ${sort}
        //                         LIMIT  ${(page-1)*perPage}, ${perPage}`
        //         return db.queryAsync(sql);
        //     }
        // })
        .then(result=>{
            if ( result.length>0 ) {
                res.json({
                    'status' :        200,
                    'msg':            '請求成功',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                    result
            })
            } else {
                res.json({
                    'status' :        404,
                    'msg':            '查無任何資料',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                })
            }
        })

    }else if(searchComcus == "visitPercentHight"){
        const customer_sql_two = `SELECT * FROM \`common_custom\` WHERE \`comcus_buy_perc\` < 50 AND \`comcus_visit_perc\` > 50`;;


        db.queryAsync( customer_sql_two)
        // .then(result=>{
        //     totalRows = result[0].rows;
        //     if ( totalRows===0 ) {
        //         return false
        //     } else {
        //         totalPages = Math.ceil(totalRows/perPage);
        //         if (page<1) page=1;
        //         if (page>totalPages) page=totalPages;

        //         const sql = `   SELECT *
        //                         FROM \`common_custom\` 
        //                         WHERE ${searchComcus_BuyType} > 50 AND ${ searchComcus_VisitType} < 50
        //                         ${sort}
        //                         LIMIT  ${(page-1)*perPage}, ${perPage}`
        //         return db.queryAsync(sql);
        //     }
        // })
        .then(result=>{
            if ( result.length>0 ) {
                res.json({
                    'status' :        200,
                    'msg':            '請求成功',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                    result
            })
            } else {
                res.json({
                    'status' :        404,
                    'msg':            '查無任何資料',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                })
            }
        })
    }else if(searchComcus == "commonPercentHight"){
        const customer_sql_three = `SELECT * FROM \`common_custom\` WHERE \`comcus_buy_perc\` >= 50 AND \`comcus_visit_perc\` >= 50`;
        
        db.queryAsync(customer_sql_three)
        // .then(result=>{
        //     totalRows = result[0].rows;
        //     if ( totalRows===0 ) {
        //         return false
        //     } else {
        //         totalPages = Math.ceil(totalRows/perPage);
        //         if (page<1) page=1;
        //         if (page>totalPages) page=totalPages;

        //         const sql = `   SELECT *
        //                         FROM \`common_custom\` 
        //                         WHERE ${searchComcus_BuyType} > 50 AND ${ searchComcus_VisitType} < 50
        //                         ${sort}
        //                         LIMIT  ${(page-1)*perPage}, ${perPage}`
        //         return db.queryAsync(sql);
        //     }
        // })
        .then(result=>{
            if ( result.length>0 ) {
                res.json({
                    'status' :        200,
                    'msg':            '請求成功',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                    result
            })
            } else {
                res.json({
                    'status' :        404,
                    'msg':            '查無任何資料',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                })
            }
        })
    }else if(searchComcus == "other"){
        const customer_sql_three = `SELECT * FROM \`common_custom\` WHERE \`comcus_buy_perc\` < 50 AND \`comcus_visit_perc\` < 50`;
   
        db.queryAsync(customer_sql_three)
        // .then(result=>{
        //     totalRows = result[0].rows;
        //     if ( totalRows===0 ) {
        //         return false
        //     } else {
        //         totalPages = Math.ceil(totalRows/perPage);
        //         if (page<1) page=1;
        //         if (page>totalPages) page=totalPages;

        //         const sql = `   SELECT *
        //                         FROM \`common_custom\` 
        //                         WHERE ${searchComcus_BuyType} > 50 AND ${ searchComcus_VisitType} < 50
        //                         ${sort}
        //                         LIMIT  ${(page-1)*perPage}, ${perPage}`
        //         return db.queryAsync(sql);
        //     }
        // })
        .then(result=>{
            if ( result.length>0 ) {
                res.json({
                    'status' :        200,
                    'msg':            '請求成功',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                    result
            })
            } else {
                res.json({
                    'status' :        404,
                    'msg':            '查無任何資料',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                })
            }
        })
    }else{
        //沒有給查詢參數情況//所有到訪的顧客
        const customer_sql = `SELECT * FROM \`common_custom\``;
        db.queryAsync(customer_sql)
        // .then(result=>{
        //     totalRows = result[0].rows;
        //     if ( totalRows===0 ) {
        //         return false
        //     } else {
        //         totalPages = Math.ceil(totalRows/perPage);
        //         if (page<1) page=1;
        //         if (page>totalPages) page=totalPages;

        //         const sql = `   SELECT *
        //                         FROM \`common_custom\` 
        //                         WHERE 
        //                         ${sort}
        //                         LIMIT  ${(page-1)*perPage}, ${perPage}`
        //         return db.queryAsync(sql);
        //     }
        // })
        .then(result=>{
            if ( result.length>0 ) {
                res.json({
                    'status' :        200,
                    'msg':            '請求成功',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                    result
            })
            } else {
                res.json({
                    'status' :        404,
                    'msg':            '查無任何資料',
                    'searchType' :  req.query.searchType,
                    // 'sortType' :      req.query.sort,
                    'sellerId' :     req.session.seller_id,
                })
            }
        })
    }
})
//發信系統




router.post('/customer-coupon-insert',(req,res)=>{
    console.log(req.body)
    const data = {
        transferdata:req.body,
        successful:false,
        resultData:""
    }

    const memberIds = req.body.customerData
    memberIds.forEach((elm,idx)=>{ 
        const sql_param = [
            elm.memberId,
            elm.seller_id,
            req.body.couponData.coup_code,
        ]
      
        const insert_sql = `INSERT INTO \`couptomember\` 
                            (\`memberId\`,\`seller_id\`,\`coup_code\`,\`created_at\`)
                            VALUES ( ? , ? , ? , NOW())`; 
                            db.queryAsync(insert_sql,sql_param)
                            .then(result=>{
                               data.transferdata = req.body
                               data.successful = true,
                               data.resultData = result
                               
                                   })
    })
res.json(data)
})


router.get('/user-coupondata',(req,res)=>{
    const getUserCouponData = {
        transferdata:req.body,
        successful:false,
        CouponResultData:""
    }

    req.session.memberId = "M20010006";

    const user_get_coupon_sql = `SELECT \`coup01_allorder\`.\`coup_id\` AS order_coup_id,\`coup02_goods\`.\`coup_id\` AS goods_coup_id,\`coup03_givi\`.\`coup_id\` AS givi_coup_id,
    \`coup01_allorder\`.\`coup_name\` AS order_coup_name,\`coup02_goods\`.\`coup_name\` AS goods_coup_name,\`coup03_givi\`.\`coup_name\` AS givi_coup_name,
    \`coup01_allorder\`.\`coup_cate_id\` AS order_cate_id,\`coup02_goods\`.\`coup_cate_id\` AS goods_cate_id,\`coup03_givi\`.\`coup_cate_id\` AS givi_cate_id,  
    \`coup01_allorder\`.\`coup_code\` AS order_coup_code,\`coup02_goods\`.\`coup_code\` AS goods_coup_code,\`coup03_givi\`.\`coup_code\` AS givi_coup_code,  
    \`coup01_allorder\`.\`coup_start\` AS order_coup_start,\`coup02_goods\`.\`coup_start\` AS goods_coup_start,\`coup03_givi\`.\`coup_start\` AS givi_coup_start,  
    \`coup01_allorder\`.\`coup_end\` AS order_coup_end,\`coup02_goods\`.\`coup_end\` AS goods_coup_end,\`coup03_givi\`.\`coup_end\` AS givi_coup_end,
    \`coup01_allorder\`.\`coup_img\` AS order_coup_img,\`coup02_goods\`.\`coup_img\` AS goods_coup_img,\`coup03_givi\`.\`coup_img\` AS givi_coup_img,
    \`coup01_allorder\`.\`coup_over\` AS order_over,\`coup02_goods\`.\`coup_over\` AS goods_over,\`coup03_givi\`.\`coup_over\` AS givi_over,
    \`coup01_allorder\`.\`coup_PriOrPer\` AS order_pri_perc,\`coup02_goods\`.\`coup_PriOrPer\` AS goods_pri_perc,\`coup02_goods\`.\`itemTypeId\` AS itemType
    FROM \`couptomember\` 
    LEFT JOIN \`coup01_allorder\` ON \`couptomember\`.\`coup_code\` = \`coup01_allorder\`.\`coup_code\` 
    LEFT JOIN \`coup03_givi\` ON \`couptomember\`.\`coup_code\` = \`coup03_givi\`.\`coup_code\`
    LEFT JOIN \`coup02_goods\` ON \`couptomember\`.\`coup_code\` = \`coup02_goods\`.\`coup_code\`
    WHERE \`couptomember\`.\`memberId\` = "M20010006"`

   
    db.queryAsync(user_get_coupon_sql)
     .then(result=>{
        
        getUserCouponData.CouponResultData = result
        getUserCouponData.successful = true
        console.log(result)
        res.json(getUserCouponData)
    })
    // const user_coupon = await db.queryAsync(user_get_coupon_sql)
    // //判斷優惠券碼的前兩碼
   
    // user_coupon.forEach((elm,idx)=>{
    //     console.log(elm)
    //     if(elm.coup_code.substr(0,2) == "II" || elm.coup_code.substr(0,2) == "PI" || elm.coup_code.substr(0,2) == "PM" || elm.coup_code.substr(0,2) == "PI"){
    //       
    //     }else if(elm.coup_code.substr(0,3) == "III" || elm.coup_code.substr(0,3) == "PII" || elm.coup_code.substr(0,3) == "PMI" || elm.coup_code.substr(0,3) == "IMI"){
    //       
    //        
    //     }else{
    //        

    //        
    //     }

        
    // })
    //     getUserCouponData.successful = true
    //     getUserCouponData.resultData = r
    //     res.json(getUserCouponData)
    
 
})

router.post('/user-click-update',(req,res)=>{
    console.log(req.body.clicknum)
    const clickUpdateData = {
        transferdata:req.body,
        successful:false,
        clickData:""
    }
    const update_click_sql = `UPDATE \`click_count\`
                            SET \`click_total\` = \`click_total\` + ${req.body.clicknum}
                            WHERE \`memberId\` = "M20010006"`
    db.queryAsync(update_click_sql)
     .then(result=>{
        clickUpdateData.clickData = result
        clickUpdateData.successful = true
        res.json(clickUpdateData)
     })
})
//從後端得到點擊次數
router.get('/user-click-data',(req,res)=>{
    const userClickData = {
        transferdata:req.body,
        successful:false,
        userClick:""
    }
    const get_click_sql = `SELECT \`click_count\`.\`click_total\` FROM \`click_count\` WHERE \`click_count\`.\`memberId\` = "M20010006"`
    db.queryAsync(get_click_sql)
    .then(result=>{
        userClickData.userClick = result
        userClickData.successful = true
       res.json(userClickData)
    })

})



router.get('/user-total-data',(req,res)=>{
    const totalData = {
        transferdata:req.body,
        successful:false,
        total:""
    }

    const get_total_sql = `SELECT SUM(checkPrice) AS sum_total FROM orders`
    db.queryAsync(get_total_sql)
    .then(result=>{
        totalData.total = result
        totalData.successful = true
       res.json(totalData)
    })

})


module.exports = router;