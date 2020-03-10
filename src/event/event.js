const express =     require('express');
const bodyParser =  require('body-parser')
const moment =      require('moment-timezone');
const multer =      require('multer');
const fs =          require('fs')
const db =          require(__dirname + '/../db_connect')
const upload =      multer({dest:'tmp_uploads/'})
const getWeatherData = require(__dirname+ '/../weather')
const router = express.Router();

//Top LeveL Middleware
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json()); 


const autoUpdateWeatherData = ()=>{
    const del = `DELETE FROM \`weather_data\` WHERE \`eventStartDate\` < DATE_FORMAT(NOW(),'%Y-%m-%d')`
    const sql = `SELECT * FROM \`weather_data\` WHERE DATE_FORMAT(\`updated_at\`,'%Y-%m-%d')< DATE_FORMAT(NOW(),'%Y-%m-%d')`
    console.log('自動更新天氣資訊...')
    setTimeout( async ()=>{
        console.log('刪除已過活動日期資料中...')
        await db.queryAsync(del)
        console.log('搜索過期資料中...')
        await db.queryAsync(sql)
            .then( async result=>{
                if ( result.length>0 ) {
                    console.log('搜索完成，啟動更新程序...')
                    for ( let i=0 ; i<result.length ; i++ ) {
                        const id = result[i].eventId
                        const lat = parseFloat(result[i].location_lat)
                        const lng = parseFloat(result[i].location_lng)
                        let dataArr = await getWeatherData(lat,lng)
                        const update = `UPDATE \`weather_data\`
                                    SET \`1day\`='${JSON.stringify(dataArr[0])}', \`2day\`='${JSON.stringify(dataArr[1])}', 
                                    \`3day\`='${JSON.stringify(dataArr[2])}', \`4day\`='${JSON.stringify(dataArr[3])}', 
                                    \`5day\`='${JSON.stringify(dataArr[4])}', \`6day\`='${JSON.stringify(dataArr[5])}'
                                    WHERE \`eventId\` = '${id}'`
                        await db.queryAsync(update).then(result=>console.log(`編號 : ${id} 更新完成`))
                    }
                } else {
                    console.log('沒有未過期資料...')
                }
            })
        await autoUpdateWeatherData()
    },10000)
}
// autoUpdateWeatherData()

//查詢所有活動列表
/*
    預計從前台接收的資料

    GET /event?type=活動類型&sort=排序類型(類型,方法)&page=頁碼&q=關鍵字

    type =    活動類型
    q =       關鍵字搜索
    sort =    排序類型  (類型,方法) 
    page =    頁碼

        預計傳送回去的資料
    {
        status =        狀態碼 200=請求成功 404=查無資料
        msg =           說明訊息
        searchType =      搜索的活動類型
        searchKeyword =   搜索的關鍵字
        sortType =      設定的排序類型 
        page =          目前頁碼
        totalRows =     總筆數
        totalPages =    總頁數
        result : [
            {
                eventId =               活動編號
                eventName =             活動名稱
                eventType =             活動類型
                eventLocation =         活動地點(僅縣市)
                eventLocation_lat =     活動地點(緯度)
                eventLocation_lng =     活動地點(經度)
                eventSponsor =          活動發起人編號
                loginId =               活動發起人帳號
                eventStartDate =        活動日期
                eventEndDate =          報名截止日期
                eventNeedPeople =       徵求人數
                eventNowPeople =        現在人數
                eventImg =              活動圖片
            }
        ]
    }
*/

router.get('/event',(req,res)=>{
    const perPage = 8
    let searchKeyword = ''
    switch(true){
        case req.query.q && !req.query.type:
            searchKeyword = ` WHERE \`event_data\`.\`eventType\` LIKE '%${req.query.q}%' `
            break;
        case req.query.q && req.query.type:
            searchKeyword = ` AND \`event_data\`.\`eventType\` LIKE '%${req.query.q}%' `
            break;
    }

    const searchType = req.query.type ? ` WHERE \`event_data\`.\`eventType\` = '${req.query.type}' ` : ''
    const sort = req.query.sort ? ` ORDER BY \`event_data\`.\`${req.query.sort.split(',')[0]}\` ${req.query.sort.split(',')[1]}` : ` ORDER BY \`event_data\`.\`created_at\` DESC`
    const total_sql = `SELECT COUNT(1) as 'rows' FROM \`event_data\` ${searchType}${searchKeyword}`
    let page = req.query.page ? parseInt(req.query.page) : 1
    let totalRows
    let totalPages

    db.queryAsync(total_sql)
    .then(result=>{
        totalRows = result[0].rows;
        if ( totalRows===0 ) {
            return false
        } else {
            totalPages = Math.ceil(totalRows/perPage);
            if (page<1) page=1;
            if (page>totalPages) page=totalPages;

            const sql = `   SELECT \`event_data\`.\`eventId\`,\`event_data\`.\`eventName\`,\`event_data\`.\`eventType\`,\`event_data\`.\`eventLocation\`,\`event_data\`.\`eventLocation_lat\`,
                                    \`event_data\`.\`eventLocation_lng\`,\`event_data\`.\`eventSponsor\`,\`event_data\`.\`eventStartDate\`,\`event_data\`.\`eventEndDate\`,
                                    \`event_data\`.\`eventNeedPeople\`,\`event_data\`.\`eventNowPeople\`,\`event_data\`.\`eventImg\`,\`my_member\`.\`loginId\`
                                    FROM \`event_data\` 
                                    LEFT JOIN \`my_member\`
                                    ON \`event_data\`.\`eventSponsor\` = \`my_member\`.\`memberId\`
                            ${searchType}${searchKeyword}
                            ${sort}
                            LIMIT  ${(page-1)*perPage}, ${perPage}`
            console.log(sql)
            return db.queryAsync(sql);
        }
    })
    .then(result=>{
        if ( result.length>0 ) {
            res.json({
                'status' :        200,
                'msg':            '請求成功',
                'searchType' :    req.query.type,
                'searchKeyword' :   req.query.q,
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
                'searchKeyword' :   req.query.q,
                'sortType' :      req.query.sort,
            })
        }
    })
})

module.exports = router