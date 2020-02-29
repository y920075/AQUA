const express =     require('express');
const bodyParser =  require('body-parser')
const multer =      require('multer')
const fs =          require('fs')
const session =     require('express-session')
const cors =        require('cors')
const db =          require(__dirname + '/../db_connect')
const upload =      multer({dest:'tmp_uploads/'})
const router = express.Router();

//查詢資料
/*
    預計從前台接收的資料

    /class?type=課程類型&level=課程等級&sort=排序類型(類型,方法)&page=頁碼

    type =    課程類型
    level =   課程等級
    sort =    排序類型  (類型,方法) 
    page =    頁碼
    
    預計傳送回去的資料
    {
        status =        狀態碼 200=ok 404=查無資料
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

            const sql = `   SELECT \`classId\`,\`className\`,\`classType\`,\`classLevel\`,\`classLocation\`,\`classStartDate\`,\`classIntroduction\`,\`classImg\`,\`classPrice\`,\`classCoach\`
                            FROM \`class_data\`
                            ${searchType}${searchLevel}
                            ${sort}
                            LIMIT  ${(page-1)*perPage}, ${perPage}`
            return db.queryAsync(sql);
        }
    })
    .then(result=>{
        if ( result ) {
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

module.exports = router;