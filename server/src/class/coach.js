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

//賣家查詢自己的全部或單筆教練資訊
/*
    預計從前台接收的資料
    如果存在id就給單筆資料
    GET /seller/coach/:id?

    req.session.seller_id = 賣家編號(驗證用)

    預計傳送回去的資料
    [
        status =        狀態碼 200=請求成功 401=尚未登入 404=查無資料
        msg =           說明訊息
        result:[
            {
                id = 教練編號
                classId = 該教練目前已被指派給哪門課程
                classCoachName = 教練姓名
                classCoachImg = 教練相片
                classCoachLicense1 = 教練證照1
                classCoachLicense2 = 教練證照2
                classCoachLicense3 = 教練證照3
            }
        ]
    ]
*/

router.get('/seller/coach/:id?',(req,res)=>{
    req.session.seller_id = 'S20010001'
    const data = {
        'status':401,
        'msg':'尚未登入'
    }
    const getCoachById = req.params.id ? ` AND \`class_coach\`.\`id\` = '${req.params.id}'` : ''
    if ( !req.session.seller_id ){
        res.json(data)
    } else {
        const sql = `SELECT \`class_coach\`.\`id\`,\`class_coach_status\`.\`classId\`,\`class_coach\`.\`classCoachName\`,\`class_coach\`.\`classCoachImg\`,
                        \`class_coach\`.\`classCoachLicense1\`,\`class_coach\`.\`classCoachLicense2\`,\`class_coach\`.\`classCoachLicense3\`
                    FROM \`class_coach\` 
                    LEFT JOIN \`class_coach_status\`
                    ON \`class_coach\`.\`id\` = \`class_coach_status\`.\`coachId\`
                    WHERE \`class_coach\`.\`seller_id\` = '${req.session.seller_id}'${getCoachById}`
        
        db.queryAsync(sql)
        .then(result=>{
            if ( result.length>0 ) {
                data.status = 200
                data.msg = '查詢成功'
                data.result = result 
                res.json(data)
            } else {
                data.status = 404
                data.msg = '查無資料'
                res.json(data)
            }
        })
    }
})


//賣家新增一筆教練資訊
/*
    預計從前台接收的資訊

    POST /seller/coach
    
    req.session.seller_id = 賣家編號
    req.body.classCoachName = 教練姓名
    req.body.classCoachImg = 教練相片
    req.body.classCoachLicense1 = 教練證照1
    req.body.classCoachLicense2 = 教練證照2
    req.body.classCoachLicense3 = 教練證照3

    預計傳送回去的資料
    [
        status = 狀態碼 201=新增成功 400=資料缺失 401=尚未登入 409=資料重複 412=資料驗證失敗
        msg = 說明訊息
        id = 新增的教練編號
    ]
*/

router.post('/seller/coach',upload.single('classCoachImg'),(req,res)=>{
    const data = {
        'status':412,
        'msg':'資料驗證失敗'
    }
    switch(true){
        case !req.session.seller_id:
            data.status = 401
            data.msg = '尚未登入'
            res.json(data)
            break
        case !req.body.classCoachName :
            data.status = 400
            data.msg = '資料缺失'
            res.json(data)
            break
        case !req.body.classCoachLicense1 && !req.body.classCoachLicense2 && !req.body.classCoachLicense3:
            data.status = 400
            data.msg = '資料缺失'
            res.json(data)
            break
        case (/(^\s*$)/g).test(req.body.classCoachName):
            data.msg='教練名稱不可為空白';
            res.json(data);
            break;
        case req.body.classCoachName.length > 10 :
            data.msg='教練名稱過長';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.classCoachLicense1):
            data.msg='教練證照不可為空白';
            res.json(data)
            break;
        case req.body.classCoachLicense1.length > 20:
            data.msg='教練證照過長';
            res.json(data)
            break;
        case req.body.classCoachLicense2 && (/(^\s*$)/g).test(req.body.classCoachLicense2):
            data.msg='教練證照不可為空白';
            res.json(data)
            break;
        case req.body.classCoachLicense2 && req.body.classCoachLicense2.length > 20:
            data.msg='教練證照過長';
            res.json(data)
            break;
        case req.body.classCoachLicense3 && (/(^\s*$)/g).test(req.body.classCoachLicense3):
            data.msg='教練證照不可為空白';
            res.json(data)
            break;
        case req.body.classCoachLicense3 && req.body.classCoachLicense3.length > 20:
            data.msg='教練證照過長';
            res.json(data)
            break;
        default:
            data.status='202'
    }

    const sql = `INSERT INTO \`class_coach\`
                (\`seller_id\`, \`classCoachName\`, \`classCoachImg\`, \`classCoachLicense1\`, \`classCoachLicense2\`, \`classCoachLicense3\`) 
                VALUES ( ?, ?, ?, ?, ?, ?)`

    let classCoachImg = 'noAvatar.jpg'
    
    if ( req.file && req.file.originalname ) {
        classCoachImg = 'SC' + moment(new Date()).format('YYYYMMDDHHmmss') + "." +req.file.originalname.split('.')[1]
        fs.rename(req.file.path, './public/images/coachImg/'+ classCoachImg,()=>{}) 
    }

    const sqlStmt = [
        req.session.seller_id,
        req.body.classCoachName,
        classCoachImg,
        req.body.classCoachLicense1,
        req.body.classCoachLicense2 || '',
        req.body.classCoachLicense3 || '',
    ]

    db.queryAsync(sql,sqlStmt)
    .then(result=>{
        if ( result.affectedRows>0 ) {
            data.status = 201
            data.msg = '新增成功'
            data.id = result.insertId
            res.json(data)
        } else {
            data.status = 500
            data.msg = '新增失敗'
            res.json(data)
        }
    })
})

//賣家編輯一筆教練資訊
/*
    預計從前台接收的資訊

    PUT /seller/coach/:id

    req.session.seller_id = 賣家編號(驗證用)
    req.body.classCoachName = 教練姓名
    req.body.classCoachImg = 教練相片
    req.body.classCoachLicense1 = 教練證照1
    req.body.classCoachLicense2 = 教練證照2
    req.body.classCoachLicense3 = 教練證照3

    預計傳送回去的資料
    [
        status = 狀態碼 201=新增成功 400=資料缺失 401=尚未登入 409=資料重複 412=資料驗證失敗
        msg = 說明訊息
    ]
*/

router.put('/seller/coach/:id',upload.single('classCoachImg'),(req,res)=>{
    const data = {
        'status':412,
        'msg':'資料驗證失敗'
    }
    switch(true){
        case !req.session.seller_id:
            data.status = 401
            data.msg = '尚未登入'
            res.json(data)
            break
        case !req.body.classCoachName :
            data.status = 400
            data.msg = '資料缺失'
            res.json(data)
            break
        case !req.body.classCoachLicense1 && !req.body.classCoachLicense2 && !req.body.classCoachLicense3:
            data.status = 400
            data.msg = '資料缺失'
            res.json(data)
            break
        case (/(^\s*$)/g).test(req.body.classCoachName):
            data.msg='教練名稱不可為空白';
            res.json(data);
            break;
        case req.body.classCoachName.length > 10 :
            data.msg='教練名稱過長';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.classCoachLicense1):
            data.msg='教練證照不可為空白';
            res.json(data)
            break;
        case req.body.classCoachLicense1.length > 20:
            data.msg='教練證照過長';
            res.json(data)
            break;
        case req.body.classCoachLicense2 && (/(^\s*$)/g).test(req.body.classCoachLicense2):
            data.msg='教練證照不可為空白';
            res.json(data)
            break;
        case req.body.classCoachLicense2 && req.body.classCoachLicense2.length > 20:
            data.msg='教練證照過長';
            res.json(data)
            break;
        case req.body.classCoachLicense3 && (/(^\s*$)/g).test(req.body.classCoachLicense3):
            data.msg='教練證照不可為空白';
            res.json(data)
            break;
        case req.body.classCoachLicense3 && req.body.classCoachLicense3.length > 20:
            data.msg='教練證照過長';
            res.json(data)
            break;
        default:
            data.status='202'
    }

    
    const classCoachImg = req.file && req.file.originalname ? ',\`classCoachImg\`= ?' : ''
    const sql = `UPDATE \`class_coach\` 
                SET \`classCoachName\`= ?,\`classCoachLicense1\`= ? ,
                    \`classCoachLicense2\`= ? ,\`classCoachLicense3\`= ? ${classCoachImg}
                WHERE \`id\` = '${req.params.id}' AND \`seller_id\` = '${req.session.seller_id}'`
    const sqlStmt = [
        req.body.classCoachName,
        req.body.classCoachLicense1,
        req.body.classCoachLicense2 || '',
        req.body.classCoachLicense3 || '',
    ]

    if ( req.file && req.file.originalname ) {
        ImgFileName = 'SC' + moment(new Date()).format('YYYYMMDDHHmmss') + "." +req.file.originalname.split('.')[1]
        fs.rename(req.file.path, './public/images/coachImg/'+ImgFileName,()=>{})
        sqlStmt.push(ImgFileName)
        db.query(`SELECT \`classCoachImg\` FROM \`class_coach\` WHERE \`id\` = '${req.params.id}'`,(error,result)=>{
            if ( result[0].classCoachImg !== 'noAvatar.jpg' && result[0].classCoachImg !== undefined ){
                fs.unlink(`./public/images/coachImg/${result[0].classCoachImg}`,(error)=>{
                    if (error) throw error
                    console.log('successfully deleted');
                })
            }
        })
    }

    db.queryAsync(sql,sqlStmt)
    .then(result=>{
        if ( result.affectedRows>0 ) {
            data.status = 201
            data.msg = '修改成功'
            res.json(data)
        } else {
            data.status = 500
            data.msg = '修改失敗'
            res.json(data)
        }
    })
})

//賣家刪除一筆教練資訊
/*
    預計從前台接收的資料
    DELETE /seller/coach/:id

    req.session.seller_id = 賣家編號(驗證用)

    預計傳送回去的資料
    {
        status = 狀態碼 201=刪除成功 401=尚未登入
        msg = 說明訊息
    }
*/

router.delete('/seller/coach/:id',upload.none(),(req,res)=>{
    const data = {
        'status':401,
        'msg':'尚未登入'
    }
    if ( !req.session.seller_id ) {
        res.json(data)
    } else {
        const sql = `DELETE FROM\`class_coach\` WHERE \`id\` = '${req.params.id}' AND \`seller_id\` = '${req.session.seller_id}'`
        db.queryAsync(`SELECT \`classCoachImg\` FROM \`class_coach\` WHERE \`id\` = '${req.params.id}' AND \`seller_id\` = '${req.session.seller_id}'`)
        .then(result=>{
            if ( result[0].classCoachImg !== 'noAvatar.jpg' && result[0].classCoachImg !== undefined ){
                fs.unlink(`./public/images/coachImg/${result[0].classCoachImg}`,(error)=>{
                    if (error) throw error
                    console.log('successfully deleted');
                })
            }
            return db.queryAsync(sql)
        })
        .then(result=>{
            if ( result.affectedRows>0 ) {
                data.status = 201;
                data.msg = `編號${req.params.id} 刪除成功`
                res.json(data);
            } else {
                data.status = 500;
                data.msg = '刪除失敗'
                res.json(data);
            }
        })
    }
})

//賣家指派課程給教練
/*
    預計從前台接收的資料
    PATCH /seller/coach/status/:id

    req.session.seller_id = 賣家編號(驗證用)
    req.body.classId = 要被指派的課程編號

    預計傳送回去的資料
    {
        status = 狀態碼 201=指派成功 401=尚未登入 409=資料重複 404=查無課程資料
        msg = 說明訊息
    }
*/

router.patch('/seller/coach/status/:id',upload.none(),(req,res)=>{
    const data = {
        'status':404,
        'msg':'查無課程資料'
    }
    if ( !req.session.seller_id ) {
        data.status = 401
        data.msg = '尚未登入'
        res.json(data)
    } else {
        //檢查課程存不存在 如果搜尋無結果就是沒有資料
        const checkClassDataSql = `SELECT \`classId\` FROM \`class_data\` WHERE \`classId\` = '${req.body.classId}'`
        //檢查是否已重複指派 如果搜尋有結果就是重複指派
        const checkCoachDataSql = `SELECT \`classId\` FROM \`class_coach_status\` WHERE \`classId\` = '${req.body.classId}' AND \`coachId\` = ${req.params.id}`
        //新增指派狀態到資料表
        const sql = `INSERT INTO \`class_coach_status\`(\`seller_id\`, \`classId\`, \`coachId\`) 
                    VALUES (? , ? , ?)`
        const sqlStmt = [
            req.session.seller_id,
            req.body.classId,
            req.params.id
        ]
        db.queryAsync(checkCoachDataSql)
        .then(result=>{
            if ( !result.length>0 ) {
                db.queryAsync(checkClassDataSql)
                .then(result=>{
                    if ( result.length>0 ) {
                        db.queryAsync(sql,sqlStmt)
                        .then(result=>{
                            if ( result.affectedRows>0 ) {
                                data.status = 201
                                data.msg = '指派成功'
                                res.json(data)
                            } else {
                                data.status = 500
                                data.msg = '指派失敗'
                                res.json(data)
                            }
                        })
                    } else {
                        data.status = 404
                        data.msg = '查無課程資料'
                        res.json(data)
                    }
                })
            } else {
                data.status = 409
                data.msg = '重複指派'
                res.json(data)
            }
        })
    }
})

//賣家取消指派課程給教練
/*
    預計從前台接收的資料
    PATCH /seller/coach/:id

    req.session.seller_id = 賣家編號(驗證用)
    req.body.classId = 要被取消的課程編號

    預計傳送回去的資料
    {
        status = 狀態碼 201=取消成功 401=尚未登入 404=查無指派資料
        msg = 說明訊息
    }
*/

router.delete('/seller/coach/status/:id',upload.none(),(req,res)=>{
    const data = {
        'status':404,
        'msg':'查無指派資料'
    }
    if ( !req.session.seller_id ) {
        data.status = 401
        data.msg = '尚未登入'
        res.json(data)
    } else {
        const sql = `DELETE FROM \`class_coach_status\` WHERE \`classId\` = '${req.body.classId}' AND \`coachId\` = '${req.params.id}' AND \`seller_id\` = '${req.session.seller_id}'`
        const checkCoachDataSql = `SELECT \`classId\` FROM \`class_coach_status\` WHERE \`classId\` = '${req.body.classId}' AND \`coachId\` = '${req.params.id}'`
        db.queryAsync(checkCoachDataSql)
        .then(result=>{
            if ( result.length>0 ) {
                db.queryAsync(sql)
                .then(result=>{
                    if ( result.affectedRows>0 ) {
                        data.status = 201
                        data.msg = '取消成功'
                        res.json(data)
                    } else {
                        data.status = 500
                        data.msg = '取消失敗'
                        res.json(data)
                    }
                })
            } else {
                res.json(data)
            }
        })
    }
})

module.exports = router;
