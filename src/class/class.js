const express =     require('express');
const bodyParser =  require('body-parser')
const moment =      require('moment-timezone');
const multer =      require('multer');
const fs =          require('fs')
const db =          require(__dirname + '/../db_connect')
const upload =      multer({dest:'tmp_uploads/'})
const router = express.Router();

//Top LeveL Middleware
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json()); 

router.post('/try-session',(req,res)=>{
    req.session.seller_id='S123456789'
    req.session.memberId='M123456789'
    res.json('session-OK')
})

//查詢列表資料
/*
    預計從前台接收的資料

    GET /class?type=課程類型&level=課程等級&sort=排序類型(類型,方法)&page=頁碼

    type =    課程類型
    level =   課程等級
    sort =    排序類型  (類型,方法) 
    page =    頁碼
    
    預計傳送回去的資料
    {
        status =        狀態碼 200=請求成功 404=查無資料
        msg =           說明訊息
        searchType =    搜索的課程類型
        searchLevel =   搜索的課程等級
        sortType =      設定的排序類型 
        page =          目前頁碼
        totalRows =     總筆數
        totalPages =    總頁數
        result : [
            {
                classId =               課程編號
                className =             課程名稱
                classType =             課程類型
                classLevel =            課程等級
                classDate =             開課日期
                classLocation =         開課地點(僅縣市)
                classIntroduction =     課程簡介
                classImg =              課程圖片連結
                classPrice =            課程售價
            }
        ]
    }
*/
router.get('/class',(req,res)=>{
    const perPage = 6;
    const searchType = req.query.type && !req.query.level ? ` WHERE \`classType\` = '${req.query.type}' ` : '';
    const searchLevel = req.query.type && req.query.level ? ` WHERE \`classType\` = '${req.query.type}' AND \`classLevel\` = '${req.query.level}' ` : '';
    const sort = req.query.sort ? ` ORDER BY \`${req.query.sort.split(',')[0]}\` ${req.query.sort.split(',')[1]}` : ` ORDER BY \`created_at\` DESC`
    const total_sql = `SELECT COUNT(1) as 'rows' FROM \`class_data\` ${searchType}${searchLevel}`
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let totalRows;
    let totalPages;

    db.queryAsync(total_sql)
    .then(result=>{
        totalRows = result[0].rows;
        if ( totalRows===0 ) {
            return false
        } else {
            totalPages = Math.ceil(totalRows/perPage);
            if (page<1) page=1;
            if (page>totalPages) page=totalPages;

            const sql = `   SELECT \`classId\`,\`className\`,\`classType\`,\`classLevel\`,\`classLocation\`,\`classStartDate\`,\`classIntroduction\`,\`classImg\`,\`classPrice\`
                            FROM \`class_data\`
                            ${searchType}${searchLevel}
                            ${sort}
                            LIMIT  ${(page-1)*perPage}, ${perPage}`
            return db.queryAsync(sql);
        }
    })
    .then(result=>{
        if ( result.length>0 ) {
            res.json({
                'status' :        200,
                'msg':            '請求成功',
                'searchType' :    req.query.type,
                'searchLevel' :   req.query.level,
                'sortType' :      req.query.sort,
                page,
                totalRows,
                totalPages,
                result
        })
        } else {
            res.json({
                'status' :        404,
                'msg':            '查無任何資料',
                'searchType' :    req.query.type,
                'searchLevel' :   req.query.level,
                'sortType' :      req.query.sort,
            })
        }
    })
})

//查詢單一筆詳細資料
/*
    預計從前台接收的資料
    GET /class/課程編號

    classId = 課程編號

    預計傳送回去的資料
        {
        status =        狀態碼 200=請求成功 404=查無資料
        msg =           說明訊息
        classCoachData : [
            {
                classCoachName = 教練名稱
                classCoachLicense1 = 教練證照1
                classCoachLicense2 = 教練證照2
                classCoachLicense3 = 教練證照3
            }
        ]
        classData : [
            {
                classId =               課程編號
                className =             課程名稱
                classType =             課程類型
                classLevel =            課程等級
                classStartDate =        開課日期
                classEndDate =          結訓日期
                classFullLocation =     開課地點(完整)
                classDesc =             課程說明
                classMAXpeople =        最大人數
                classNOWpeople =        現在人數
                classImg =              課程圖片連結
                seller_id =             工作室編號(null表示帳號已被刪除)
                seller_shop =           工作室名稱(null表示帳號已被刪除)
                classPrice =            課程售價
            }
        ]
    }
*/
router.get('/class/:classId',(req,res)=>{
    const classId = req.params.classId;
    const data = {
        'status' : 404,
        'msg' :　'查無資料',
        'classCoachData' : '',
        'classData' : ''
    }
    const c_sql = `SELECT \`classCoachName\`,\`classCoachLicense1\`,\`classCoachLicense2\`,\`classCoachLicense3\`
                    FROM \`class_coach\`
                    WHERE \`classId\` = '${classId}'`
    const sql = `SELECT \`class_data\`.\`classId\`,\`class_data\`.\`className\`,\`class_data\`.\`classType\`,\`class_data\`.\`classLevel\`,\`class_data\`.\`classFullLocation\`,
                        \`class_data\`.\`classStartDate\`,\`class_data\`.\`classEndDate\`,\`class_data\`.\`classPrice\`,\`class_data\`.\`classDesc\`,
                        \`class_data\`.\`classMAXpeople\`,\`class_data\`.\`classNOWpeople\`,\`class_data\`.\`classImg\`,
                        \`basic_information\`.\`seller_id\`,\`basic_information\`.\`seller_shop\`
                    FROM \`class_data\` 
                    LEFT JOIN \`basic_information\`
                    ON \`basic_information\`.\`seller_id\` = \`class_data\`.\`seller_id\`
                    WHERE \`classId\` =  '${classId}'`
    db.queryAsync(sql)
    .then(result=>{
        if ( result[0] === undefined ) {
            return false
        } else {
            data.classData = result;
            return db.queryAsync(c_sql)
        }
    })
    .then(result=>{
        if (result ){
            data.status = 200
            data.msg = '請求成功'
            data.classCoachData = result;
            res.json(data)
        } else {
            res.json(data)
        }
    })
});

//新增一筆課程資料(賣家身分)
/*
    預計從前台接收的資料

    POST /class
    
    課程編號由後台產生後自動存入
    現在人數由後台預設為0

    req.body.className = 課程名稱(50字內)
    req.body.classTypeId = 課程類型
    req.body.classLevelId = 課程等級
    req.body.classLocation = 課程地點(縣市)
    req.body.classFullLocation = 課程地點(完整)
    req.body.classStartDate = 開課日期(input type="datetime-local")
    req.body.classEndDate = 結訓日期(input type="datetime-local")
    req.body.classPrice = 課程售價(6位數)
    req.body.classIntroduction = 課程簡介(30字內)
    req.body.classDesc = 課程說明(3000字內)
    req.body.classMAXpeople = 最大人數(3位數)
    req.body.classImg = 課程圖片 (png,jpg,gif)
    req.session.seller_id = 賣家ID(30字內)


    預計傳送回去的資料
        {
            status =        狀態碼 201=新增成功 400=資料缺失 401=尚未登入 409=資料重複 412=資料驗證失敗
            msg =           說明訊息
            location = /class/課程編號
        }
*/

router.post('/seller/class',upload.single('classImg'),(req,res)=>{
    const data = {
        'status' : 412,
        'msg' : '資料驗證失敗'
    }
    switch(true){
        case !req.session.seller_id:
            data.status='401'
            data.msg='尚未登入'
            res.json(data)
            break
        case !req.body.className||!req.body.classTypeId||!req.body.classLevelId||!req.body.classLocation||!req.body.classFullLocation
        ||!req.body.classStartDate||!req.body.classEndDate||!req.body.classPrice||!req.body.classIntroduction||!req.body.classDesc||!req.body.classMAXpeople :
            data.status='400'
            data.msg='資料缺失'
            res.json(data)
            break
        case (/(^\s*$)/g).test(req.body.className):
            data.msg='課程名稱不可為空白';
            res.json(data);
            break;
        case req.body.className.length > 50 :
            data.msg='課程名稱過長';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.classLocation) :
            data.msg='地點不可為空白'
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.classStartDate) :
            data.msg='開課日期不可為空白';
            res.json(data);
            break;
        case moment(req.body.classStartDate).format('YYYY-MM-DD HH:mm') <= moment(new Date()).format('YYYY-MM-DD HH:mm'):
            data.msg='開課日期不可小於現在日期';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.classEndDate) :
            data.msg='結訓日期不可為空白';
            res.json(data);
            break;
        case moment(req.body.classEndDate).format('YYYY-MM-DD HH:mm') <= moment(new Date()).format('YYYY-MM-DD HH:mm'):
            data.msg='結訓日期不可小於現在日期';
            res.json(data);
            break;
        case moment(req.body.classEndDate).format('YYYY-MM-DD HH:mm') <= moment(req.body.classStartDate).format('YYYY-MM-DD HH:mm'):
            data.msg='結訓日期不可小於開課日期';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.classPrice):
            data.msg='課程售價不可為空白'
            res.json(data);
            break;
        case !req.body.classPrice.match(/^\d{1,6}$/g) :
            data.msg='課程價格不可超過6位數'
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.classIntroduction):
            data.msg='課程簡介不可為空白';
            res.json(data)
            break;
        case req.body.classIntroduction.length > 30:
            data.msg='課程簡介過長';
            res.json(data)
            break;
        case (/(^\s*$)/g).test(req.body.classDesc):
            data.msg='課程說明不可為空白';
            res.json(data);
            break;
        case req.body.classDesc.length > 3000:
            data.msg='課程說明過長';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.classMAXpeople):
            data.msg='課程最大人數不可為空白'
            res.json(data);
            break;
        case !req.body.classMAXpeople.match(/^\d{1,3}$/g):
            data.msg='最大人數不可超過3位數';
            res.json(data);
            break;
        default:
            data.status='202'
    }


    const sql = `INSERT INTO \`class_data\`
            (\`maxId\`, \`classId\`, \`className\`, \`classType\`, \`classLevel\`, \`classLocation\`, \`classFullLocation\`,
            \`classStartDate\`,\`classEndDate\`, \`classPrice\`,\`classIntroduction\`, \`classDesc\`, \`classMAXpeople\`, \`classNOWpeople\`, 
            \`classImg\`, \`seller_id\`) 
            VALUES (? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?, ?)`

    const sqlMAX = `SELECT MAX(\`maxId\`) AS \`maxId\`
                FROM \`class_data\` 
                WHERE DATE_FORMAT(\`created_at\`,'%Y-%m') = '${moment(new Date()).format('YYYY-MM')}'`;

    const sqlType = `SELECT \`classTypeName\`
                    FROM \`class_type\`
                    WHERE \`classTypeId\`='${req.body.classTypeId}'`

    const sqlLevel = `SELECT \`classLevel\`
                    FROM \`class_level\`
                    WHERE \`classLevelId\`='${req.body.classLevelId}'`

    let maxId = '';
    let classType = '';
    let classlevel = '';
    let classId = '';
    let classImg = '';

    if ( data.status==='202' ) {
        db.query(sqlType,(error,result)=>{
            if( result[0] ){
                classType = result[0].classTypeName
            } else {
                classType = '查無資料'
            }
            db.query(sqlLevel,(error,result)=>{
                if( result[0] ){
                    classlevel = result[0].classLevel
                } else {
                    classlevel = '查無資料'
                }
                db.query(sqlMAX,(error,result)=>{
                    if ( req.file && req.file.originalname ) {
                        classImg = 'S' + moment(new Date()).format('YYYYMMDDHHmmss') + "." +req.file.originalname.split('.')[1]
                        fs.rename(req.file.path, './public/images/classImg/'+ classImg,()=>{}) 
                    } else {
                        classImg = 'noImg.jpg'
                    }
            
                    if ( !result[0].maxId ) {
                        maxId = '1';
                        classId = `C${moment(new Date()).format('YYMM')}${maxId.padStart(4,'0')}`;
                    } else {
                        maxId = `${result[0].maxId+1}`;
                        classId = `C${moment(new Date()).format('YYMM')}${maxId.padStart(4,'0')}`;
                    }
                    
                    const sqlStmt = [
                        maxId,
                        classId,
                        req.body.className,
                        classType,
                        classlevel,
                        req.body.classLocation,
                        req.body.classFullLocation,
                        req.body.classStartDate,
                        req.body.classEndDate,
                        req.body.classPrice,
                        req.body.classIntroduction,
                        req.body.classDesc,
                        req.body.classMAXpeople,
                        0,
                        classImg,
                        req.session.seller_id
                    ]
                    db.query(sql,sqlStmt,(error,result)=>{
                        if ( result.affectedRows>0 ) {
                            data.status = 201;
                            data.msg = '新增成功'
                            data.location = '/class/'+classId
                            res.json(data);
                        } else {
                            data.status = 500;
                            data.msg = '新增失敗'
                            res.json(data);
                        }
                    });
                });
            });
        });
    }
})

// 賣家查詢自己的所有課程資料
/*
    預計從前台接收的資料
    GET /seller/class?type=課程類型&level=課程等級&sort=排序類型(類型,方法)&page=頁碼

    type =    課程類型
    level =   課程等級
    sort =    排序類型  (類型,方法) 
    page =    頁碼
    req.session.seller_id = 賣家ID

    預計傳送回去的資料
    {
        status =        狀態碼 200=請求成功 401=尚未登入 404=查無資料
        msg =           說明訊息
        searchType =    搜索的課程類型
        searchLevel =   搜索的課程等級
        sortType =      設定的排序類型 
        page =          目前頁碼
        totalRows =     總筆數
        totalPages =    總頁數
        seller_id =     賣家編號
        result : [
            {
                classId =               課程編號
                className =             課程名稱
                classType =             課程類型
                classLevel =            課程等級
                classDate =             開課日期
                classLocation =         開課地點(僅縣市)
                classIntroduction =     課程簡介
                classImg =              課程圖片連結
                classPrice =            課程售價
            }
        ]
    }
*/

router.get('/seller/class',(req,res)=>{
    const data = {
        'status' : '401',
        'msg' : '尚未登入'
    }
    if ( !req.session.seller_id ) {
        res.json(data)
    } else {
        const perPage = 6;
        const searchType = req.query.type && !req.query.level ? `AND \`classType\` = '${req.query.type}' ` : '';
        const searchLevel = req.query.type && req.query.level ? `AND  \`classType\` = '${req.query.type}' AND \`classLevel\` = '${req.query.level}' ` : '';
        const sort = req.query.sort ? ` ORDER BY \`${req.query.sort.split(',')[0]}\` ${req.query.sort.split(',')[1]}` : ` ORDER BY \`created_at\` DESC`
        const total_sql = `SELECT COUNT(1) as 'rows' FROM \`class_data\`  WHERE \`seller_id\` = '${req.session.seller_id}' ${searchType}${searchLevel}`
        let page = req.query.page ? parseInt(req.query.page) : 1;
        let totalRows;
        let totalPages;

        db.queryAsync(total_sql)
        .then(result=>{
            totalRows = result[0].rows;
            if ( totalRows===0 ) {
                return false
            } else {
                totalPages = Math.ceil(totalRows/perPage);
                if (page<1) page=1;
                if (page>totalPages) page=totalPages;

                const sql = `   SELECT \`classId\`,\`className\`,\`classType\`,\`classLevel\`,\`classLocation\`,\`classStartDate\`,\`classIntroduction\`,\`classImg\`,\`classPrice\`
                                FROM \`class_data\`
                                WHERE \`seller_id\` = '${req.session.seller_id}'
                                ${searchType}${searchLevel}
                                ${sort}
                                LIMIT  ${(page-1)*perPage}, ${perPage}`
                return db.queryAsync(sql);
            }
        })
        .then(result=>{
            if ( result.length>0 ) {
                res.json({
                    'status' :        200,
                    'msg':            '請求成功',
                    'searchType' :    req.query.type,
                    'searchLevel' :   req.query.level,
                    'sortType' :      req.query.sort,
                    'seller_id' :     req.session.seller_id,
                    page,
                    totalRows,
                    totalPages,
                    result
            })
            } else {
                res.json({
                    'status' :        404,
                    'msg':            '查無任何資料',
                    'searchType' :    req.query.type,
                    'searchLevel' :   req.query.level,
                    'sortType' :      req.query.sort,
                    'seller_id' :     req.session.seller_id,
                })
            }
        })
    }
})

// 賣家取得單一筆課程資料(編輯用)
/*
    預計從前台接收的資料
    GET /seller/class/課程編號

    req.session.seller_id = 賣家編號
    req.params.classId = 要編輯的課程編號
    
    預計傳送回去的資料
    {
        status =        狀態碼 200=請求成功 401=尚未登入 404=查無資料
        msg =           說明訊息
        classCoachData : [
            {
                id = 流水號
                classCoachName = 教練名稱
                classCoachLicense1 = 教練證照1
                classCoachLicense2 = 教練證照2
                classCoachLicense3 = 教練證照3
            }
        ]
        classData : [
            {
                className =             課程名稱
                classType =             課程類型
                classLevel =            課程等級
                classDate =             開課日期
                classLocation =         開課地點(縣市)
                classFullLocation =     開課地點(完整)
                classIntroduction =     課程簡介
                classDesc =             課程說明
                classMAXpeople =        最大人數
                classImg =              課程圖片連結
                classPrice =            課程售價
            }
        ]
    }
*/

router.get('/seller/class/:classId',(req,res)=>{
    req.session.seller_id = '這裡是賣家ID'
    const data = {
        'status' : 404,
        'msg' :　'查無資料',
        'classCoachData' : '',
        'classData' : ''
    }
    if ( !req.session.seller_id ) {
        data.status = '401'
        data.msg = '尚未登入'
        res.json(data)
    } else {
        const c_sql = `SELECT \`id\`,\`classCoachName\`,\`classCoachLicense1\`,\`classCoachLicense2\`,\`classCoachLicense3\`
                    FROM \`class_coach\`
                    WHERE \`classId\` = '${req.params.classId}'`
        const sql = `SELECT \`className\`,\`classType\`,\`classLevel\`,\`classLocation\`,\`classFullLocation\`,\`classStartDate\`,
                        \`classPrice\`,\`classIntroduction\`,\`classDesc\`,\`classMAXpeople\`,\`classImg\` 
                        FROM \`class_data\` 
                        WHERE \`seller_id\` = '${req.session.seller_id}' AND \`classId\` = '${req.params.classId}'`
        db.queryAsync(sql)
        .then(result=>{
            if ( result.length>0 ) {
                data.classData = result;
                return db.queryAsync(c_sql)
            } else {
                return false
            }
        })
        .then(result=>{
            if (result ){
                data.status = 200
                data.msg = '請求成功'
                data.classCoachData = result;
                res.json(data)
            } else {
                res.json(data)
            }
        })
    }
})

//賣家編輯自己的課程資料
/*
    預計從前台接收的資料

    PUT /seller/class/課程編號

    req.body.className
    req.body.classType
    req.body.classLevel
    req.body.classDate
    req.body.classLocation
    req.body.classFullLocation
    req.body.classIntroduction
    req.body.classDesc
    req.body.classMAXpeople
    req.body.classImg
    req.body.classPrice

    
    
*/

router.post('/testput',upload.none(),(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

module.exports = router;