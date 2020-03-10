const express =     require('express');
const bodyParser =  require('body-parser')
const moment =      require('moment-timezone');
const multer =      require('multer');
const fs =          require('fs')
const db =          require(__dirname + '/../db_connect')
const axios =       require('axios')
const upload =      multer({dest:'tmp_uploads/'})
const getWeatherData = require(__dirname+ '/../weather')
const router = express.Router();

/*
    2020-03-10 注意事項
    取得經緯度的Google API key還沒輸入
    要使用時 用API KEY 取代 'GOOGLE的APIKEY放這裡' 這段字
*/


//Top LeveL Middleware
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json()); 


const autoUpdateWeatherData = ()=>{
    const del = `DELETE FROM \`weather_data\` WHERE \`eventStartDate\` < DATE_FORMAT(NOW(),'%Y-%m-%d')`
    const sql = `SELECT * FROM \`weather_data\` WHERE DATE_FORMAT(\`weatherData_updated_at\`,'%Y-%m-%d')< DATE_FORMAT(NOW(),'%Y-%m-%d')`
    const nowDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    setTimeout( async ()=>{
        console.log(`----------------------------------------------`)
        console.log(`${nowDate} 自動更新天氣資訊`)
        console.log(`${nowDate} 刪除已過活動日期資料中...`)
        await db.queryAsync(del).then(result=>{
            if(result.affectedRows>0){
                console.log(`${nowDate} 刪除完成`)
            } else {
                console.log(`${nowDate} 沒有未過期資料`)
            }
        })
        console.log(`${nowDate} 搜索過期天氣資料中...`)
        await db.queryAsync(sql)
            .then( async result=>{
                if ( result.length>0 ) {
                    console.log(`${nowDate} 搜索完成，啟動更新程序`)
                    for ( let i=0 ; i<result.length ; i++ ) {
                        const id = result[i].eventId
                        const lat = parseFloat(result[i].location_lat)
                        const lng = parseFloat(result[i].location_lng)
                        let dataArr = await getWeatherData(lat,lng)
                        const update = `UPDATE \`weather_data\`
                                    SET \`1day\`='${JSON.stringify(dataArr[0])}', \`2day\`='${JSON.stringify(dataArr[1])}', 
                                    \`3day\`='${JSON.stringify(dataArr[2])}', \`4day\`='${JSON.stringify(dataArr[3])}', 
                                    \`5day\`='${JSON.stringify(dataArr[4])}', \`6day\`='${JSON.stringify(dataArr[5])}',
                                    \`weatherData_updated_at\` = '${moment(new Date()).format('YYYY-MM-DD')}'
                                    WHERE \`eventId\` = '${id}'`
                        await db.queryAsync(update).then(result=>console.log(`${nowDate} 編號 : ${id} 更新完成`))
                    }
                } else {
                    console.log(`${nowDate} 沒有未過期資料`)
                }
            })
        await autoUpdateWeatherData()
    },10000)
}
 //autoUpdateWeatherData()

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
    if ( req.query.q && !req.query.type ) {
        searchKeyword = ` WHERE \`event_data\`.\`eventName\` LIKE '%${req.query.q}%' `
    } else if ( req.query.q && req.query.type ) {
        searchKeyword = ` AND \`event_data\`.\`eventName\` LIKE '%${req.query.q}%' `
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

//查詢單一筆活動資料
/*
    預計從前台接收的資料

    GET /event/:eventId

    eventId = 活動編號

    預計傳送回去的資料
    {
        status =        狀態碼 200=請求成功 404=查無資料
        msg =           說明訊息
        weather_data : [
            {
                eventId = 活動編號
                location_lng =  經度
                location_lat = 緯度
                1day = 第1天資料
                2day = 第2天資料
                3day = 第3天資料
                4day = 第4天資料
                5day = 第5天資料
                6day = 第6天資料
                weatherData_updated_at = 更新日期
            }
        ]
        eventData : [
            {
                eventId =               活動編號
                eventName =             活動名稱
                eventType =             活動類型
                eventFullLocation =     活動地點(完整)
                eventSponsor =          活動發起人編號
                loginId =               活動發起人帳號
                eventStartDate =        活動日期
                eventEndDate =          報名截止日期
                eventDesc =             活動說明
                eventNeedPeople =       徵求人數
                eventNowPeople =        現在人數
                eventImg =              活動圖片
            }
        ]
    }
*/

router.get('/event/:eventId',(req,res)=>{
    const eventId = req.params.eventId;
    const data = {
        'status' : 404,
        'msg' :　'查無資料',
        'weather_data' : '',
        'eventData' : ''
    }
    const weatherDataSql = `SELECT \`id\`, \`eventId\`, \`location_lng\`, \`location_lat\`, 
                            \`1day\`, \`2day\`, \`3day\`, \`4day\`, \`5day\`, \`6day\`,\`weatherData_updated_at\` 
                            FROM \`weather_data\` 
                            WHERE \`eventId\` = '${eventId}'`

    const sql = `SELECT \`event_data\`.\`eventId\`,\`event_data\`.\`eventName\`,\`event_data\`.\`eventType\`,
                        \`event_data\`.\`eventFullLocation\`,\`event_data\`.\`eventSponsor\`,
                        \`event_data\`.\`eventStartDate\`,\`event_data\`.\`eventEndDate\`,\`event_data\`.\`eventDesc\`,
                        \`event_data\`.\`eventNeedPeople\`,\`event_data\`.\`eventNowPeople\`,
                        \`event_data\`.\`eventImg\`,\`my_member\`.\`loginId\`
                FROM \`event_data\` 
                LEFT JOIN \`my_member\`
                ON \`event_data\`.\`eventSponsor\` = \`my_member\`.\`memberId\`
                WHERE \`eventId\` =  '${eventId}'`
    db.queryAsync(sql)
    .then(result=>{
        if ( result.length>0 ) {
            data.eventData = result;
            db.queryAsync(weatherDataSql)
            .then(result=>{
                if( result.length>0 ){
                    result[0]['1day'] = JSON.parse(result[0]['1day'])
                    result[0]['2day'] = JSON.parse(result[0]['2day'])
                    result[0]['3day'] = JSON.parse(result[0]['3day'])
                    result[0]['4day'] = JSON.parse(result[0]['4day'])
                    result[0]['5day'] = JSON.parse(result[0]['5day'])
                    result[0]['6day'] = JSON.parse(result[0]['6day'])
                    data.weather_data = result
                    data.status = 200
                    data.msg = '請求成功'
                    res.json(data)
                } else {
                    data.status = 200
                    data.msg = '請求成功，但天氣資料遺失'
                    res.json(data)
                }
            })
        } else {
            res.json(data)
        }
    })
});

//會員新增一筆活動資訊
/*
    預計從前台接收的資訊

    POST /member/event

    活動編號由後台產生後自動存入
    現在人數由後台預設為0
    經緯度由eventFullLocation透過Google API取得後存入

    req.body.eventName =            活動名稱
    req.body.eventTypeId =          活動類別編號
    req.body.eventLocation =        活動地點(縣市)
    req.body.eventFullLocation =    活動地點(完整)
    req.session.member =            活動發起人編號
    req.body.eventStartDate =       活動日期
    req.body.eventEndDate =         報名截止日期
    req.body.eventDesc =            活動說明
    req.body.eventNeedPeople =      徵求人數
    req.body.eventImg =             活動圖片(png,jpg,gif)

    預計傳送回去的資料
    {
        status =        狀態碼 201=新增成功 400=資料缺失 401=尚未登入 409=資料重複 412=資料驗證失敗
        msg =           說明訊息
        location = /event/活動編號
    }
*/

router.post('/member/event',upload.single('eventImg'),(req,res)=>{
    req.session.memberId = 'M20010002'
    const data = {
        'status' : 412,
        'msg' : '資料驗證失敗'
    }
    switch(true){
        case !req.session.memberId:
            data.status='401'
            data.msg='尚未登入'
            res.json(data)
            break
        case !req.body.eventName||!req.body.eventTypeId||!req.body.eventLocation||!req.body.eventFullLocation
            ||!req.body.eventStartDate||!req.body.eventEndDate||!req.body.eventDesc||!req.body.eventNeedPeople :
            data.status='400'
            data.msg='資料缺失'
            res.json(data)
            break
        case (/(^\s*$)/g).test(req.body.eventName):
            data.msg='活動名稱不可為空白';
            res.json(data);
            break;
        case req.body.eventName.length > 50 :
            data.msg='活動名稱過長';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.eventLocation) :
            data.msg='地點不可為空白'
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.eventStartDate) :
            data.msg='活動日期不可為空白';
            res.json(data);
            break;
        case moment(req.body.eventStartDate).format('YYYY-MM-DD HH:mm') <= moment(new Date()).format('YYYY-MM-DD HH:mm'):
            data.msg='活動日期不可小於現在日期';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.eventEndDate) :
            data.msg='報名截止日期不可為空白';
            res.json(data);
            break;
        case moment(req.body.eventEndDate).format('YYYY-MM-DD HH:mm') <= moment(new Date()).format('YYYY-MM-DD HH:mm'):
            data.msg='報名截止日期不可小於現在日期';
            res.json(data);
            break;
        case moment(req.body.eventEndDate).format('YYYY-MM-DD HH:mm') >= moment(req.body.eventStartDate).format('YYYY-MM-DD HH:mm'):
            data.msg='報名截止日期不可大於活動日期';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.eventDesc):
            data.msg='活動說明不可為空白';
            res.json(data)
            break;
        case req.body.eventDesc.length > 3000:
            data.msg='活動說明過長';
            res.json(data)
            break;
        case (/(^\s*$)/g).test(req.body.eventNeedPeople):
            data.msg='徵求人數不可為空白'
            res.json(data);
            break;
        case !req.body.eventNeedPeople.match(/^\d{1,3}$/g):
            data.msg='徵求人數不可超過3位數';
            res.json(data);
            break;
        default:
            data.status='202'
    }

    const sql = `INSERT INTO \`event_data\`
                (\`maxId\`, \`eventId\`, \`eventName\`, \`eventType\`, \`eventLocation\`, \`eventFullLocation\`,
                \`eventLocation_lat\`,\`eventLocation_lng\`, \`eventSponsor\`,\`eventStartDate\`, \`eventEndDate\`,
                \`eventDesc\`, \`eventNeedPeople\`,\`eventNowPeople\`, \`eventImg\`)
                VALUES (? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?)`

    const sqlMAX = `SELECT MAX(\`maxId\`) AS \`maxId\`
                FROM \`event_data\` 
                WHERE DATE_FORMAT(\`created_at\`,'%Y-%m') = '${moment(new Date()).format('YYYY-MM')}'`;

    const sqlType = `SELECT \`eventTypeName\`
                    FROM \`event_type\`
                    WHERE \`eventTypeId\`='${req.body.eventTypeId}'`

    let maxId = '';
    let eventType = '';
    let eventId = '';
    let eventImg = '';

    if ( data.status==='202' ) {
        db.query(sqlType,(error,result)=>{
            if( result[0] ){
                eventType = result[0].eventTypeName
            } else {
                eventType = '查無資料'
            }
            db.query(sqlMAX,(error,result)=>{
                if ( req.file && req.file.originalname ) {
                    eventImg = 'E' + moment(new Date()).format('YYYYMMDDHHmmss') + "." +req.file.originalname.split('.')[1]
                    fs.rename(req.file.path, './public/images/eventImg/'+ eventImg,()=>{}) 
                } else {
                    eventImg = 'noImg.jpg'
                }
        
                if ( !result[0].maxId ) {
                    maxId = '1';
                    eventId = `E${moment(new Date()).format('YYMM')}${maxId.padStart(4,'0')}`;
                } else {
                    maxId = `${result[0].maxId+1}`;
                    eventId = `E${moment(new Date()).format('YYMM')}${maxId.padStart(4,'0')}`;
                }

                const url = encodeURI(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.eventFullLocation}&key=GOOGLE的APIKEY放這裡`
                )
                axios.get(url)
                .then(response=>{
                    const eventLocationLat = response.data.results[0].geometry.location.lat
                    const eventLocationLng = response.data.results[0].geometry.location.lng
                    const sqlStmt = [
                        maxId,
                        eventId,
                        req.body.eventName,
                        eventType,
                        req.body.eventLocation,
                        req.body.eventFullLocation,
                        eventLocationLat,
                        eventLocationLng,
                        req.session.memberId,
                        req.body.eventStartDate,
                        req.body.eventEndDate,
                        req.body.eventDesc,
                        req.body.eventNeedPeople,
                        0,
                        eventImg
                    ]
                    db.query(sql,sqlStmt,(error,result)=>{
                        if (error) throw error
                        if ( result.affectedRows>0 ) {
                            const weatherSql = `INSERT INTO \`weather_data\`(\`eventId\`, \`location_lng\`, \`location_lat\`,\`eventStartDate\`,\`weatherData_updated_at\`) 
                                                VALUES (?,?,?,?,?)`
                            const weatherSqlStmt  = [
                                eventId,
                                eventLocationLng,
                                eventLocationLat,
                                req.body.eventStartDate,
                                '1970-01-01'
                            ]
                            db.query(weatherSql,weatherSqlStmt,(error)=>{
                                if(error) throw error
                                if ( result.affectedRows>0 ) {
                                    data.status = 201;
                                    data.msg = '新增成功'
                                    data.location = '/event/'+eventId
                                    res.json(data)
                                }
                            })
                        } else {
                            data.status = 500;
                            data.msg = '新增失敗'
                            res.json(data);
                        }
                    })
                })
            })
        })
    }
})

//會員修改一筆活動資訊
/*
    預計從前台接收的資料
    PUT /member/event/活動編號

    活動編號由後台產生後自動存入
    現在人數由後台預設為0
    經緯度由eventFullLocation透過Google API取得後存入

    req.body.eventName =            活動名稱
    req.body.eventTypeId =          活動類別編號
    req.body.eventLocation =        活動地點(縣市)
    req.body.eventFullLocation =    活動地點(完整)
    req.session.member =            活動發起人編號
    req.body.eventStartDate =       活動日期
    req.body.eventEndDate =         報名截止日期
    req.body.eventDesc =            活動說明
    req.body.eventNeedPeople =      徵求人數
    req.body.eventImg =             活動圖片(png,jpg,gif)

    預計傳送回去的資料
    {
        status =        狀態碼 201=修改成功 400=資料缺失 401=尚未登入 409=資料重複 412=資料驗證失敗
        msg =           說明訊息
    }

*/

router.put('/member/event/:eventId',upload.single('eventImg'),(req,res)=>{
    req.session.memberId = 'M20010002'
    const data = {
        'status' : 412,
        'msg' : '資料驗證失敗'
    }

    switch(true){
        case !req.session.memberId:
            data.status='401'
            data.msg='尚未登入'
            res.json(data)
            break
        case !req.body.eventName||!req.body.eventTypeId||!req.body.eventLocation||!req.body.eventFullLocation
            ||!req.body.eventStartDate||!req.body.eventEndDate||!req.body.eventDesc||!req.body.eventNeedPeople :
            data.status='400'
            data.msg='資料缺失'
            res.json(data)
            break
        case (/(^\s*$)/g).test(req.body.eventName):
            data.msg='活動名稱不可為空白';
            res.json(data);
            break;
        case req.body.eventName.length > 50 :
            data.msg='活動名稱過長';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.eventLocation) :
            data.msg='地點不可為空白'
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.eventStartDate) :
            data.msg='活動日期不可為空白';
            res.json(data);
            break;
        case moment(req.body.eventStartDate).format('YYYY-MM-DD HH:mm') <= moment(new Date()).format('YYYY-MM-DD HH:mm'):
            data.msg='活動日期不可小於現在日期';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.eventEndDate) :
            data.msg='報名截止日期不可為空白';
            res.json(data);
            break;
        case moment(req.body.eventEndDate).format('YYYY-MM-DD HH:mm') <= moment(new Date()).format('YYYY-MM-DD HH:mm'):
            data.msg='報名截止日期不可小於現在日期';
            res.json(data);
            break;
        case moment(req.body.eventEndDate).format('YYYY-MM-DD HH:mm') >= moment(req.body.eventStartDate).format('YYYY-MM-DD HH:mm'):
            data.msg='報名截止日期不可大於活動日期';
            res.json(data);
            break;
        case (/(^\s*$)/g).test(req.body.eventDesc):
            data.msg='活動說明不可為空白';
            res.json(data)
            break;
        case req.body.eventDesc.length > 3000:
            data.msg='活動說明過長';
            res.json(data)
            break;
        case (/(^\s*$)/g).test(req.body.eventNeedPeople):
            data.msg='徵求人數不可為空白'
            res.json(data);
            break;
        case !req.body.eventNeedPeople.match(/^\d{1,3}$/g):
            data.msg='徵求人數不可超過3位數';
            res.json(data);
            break;
        default:
            data.status='202'
    }

    let eventImg = !req.file && !req.originalname ? '' : ',\`eventImg\` = ?'
    const sql = `UPDATE \`event_data\`
                SET \`eventName\`=?,\`eventType\`=?,\`eventLocation\`=?,\`eventFullLocation\`=?,
                    \`eventLocation_lat\`=?,\`eventLocation_lng\`=?,\`eventStartDate\`=?,\`eventEndDate\`=?,
                    \`eventDesc\`=?,\`eventNeedPeople\`=?${eventImg}
                WHERE \`eventId\` = '${req.params.eventId}' AND \`eventSponsor\` = '${req.session.memberId}'`

    const sqlType = `SELECT \`eventTypeName\`
                    FROM \`event_type\`
                    WHERE \`eventTypeId\`='${req.body.eventTypeId}'`

    if ( data.status==='202' ) {
        let eventType = '';
        let eventImgName = 'noImg.jpg';
        db.query(sqlType,(error,result)=>{
            if( result[0] ){
                eventType = result[0].eventTypeName
            } else {
                eventType = '查無資料'
            }

            const url = encodeURI(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.eventFullLocation}&key=GOOGLE的APIKEY放這裡`
            )
            axios.get(url)
            .then(response=>{
                const eventLocationLat = response.data.results[0].geometry.location.lat
                const eventLocationLng = response.data.results[0].geometry.location.lng
                const sqlStmt = [
                    req.body.eventName,
                    eventType,
                    req.body.eventLocation,
                    req.body.eventFullLocation,
                    eventLocationLat,
                    eventLocationLng,
                    req.body.eventStartDate,
                    req.body.eventEndDate,
                    req.body.eventDesc,
                    req.body.eventNeedPeople,
                ]
                if ( req.file && req.file.originalname ) {
                    eventImgName = 'E' + moment(new Date()).format('YYYYMMDDHHmmss') + "." +req.file.originalname.split('.')[1]
                    fs.rename(req.file.path, './public/images/eventImg/'+eventImgName,()=>{})
                    sqlStmt.push(eventImgName)
                    db.query(`SELECT \`eventImg\` FROM \`event_data\` WHERE \`eventId\` = '${req.params.eventId}'`,(error,result)=>{
                        if ( result[0].eventImg !== 'noImg.jpg' && result[0].eventImg !== undefined ){
                            fs.unlink(`./public/images/eventImg/${result[0].eventImg}`,(error)=>{
                                if (error) throw error
                                console.log('successfully deleted');
                            })
                        }
                    })
                }
                db.query(sql,sqlStmt,(error,result)=>{
                    if (error) throw error
                    if ( result.affectedRows>0 ) {
                        const weatherSql = `UPDATE \`weather_data\`
                                            SET \`location_lng\`=?, \`location_lat\`=?,\`eventStartDate\`=?,\`weatherData_updated_at\`=?
                                            WHERE \`eventId\` = '${req.params.eventId}'`
                        const weatherSqlStmt  = [
                            eventLocationLng,
                            eventLocationLat,
                            req.body.eventStartDate,
                            '1970-01-01'
                        ]
                        db.query(weatherSql,weatherSqlStmt,(error)=>{
                            if(error) throw error
                            if ( result.affectedRows>0 ) {
                                data.status = 201;
                                data.msg = '修改成功'
                                res.json(data)
                            }
                        })
                    } else {
                        data.status = 500;
                        data.msg = '修改失敗'
                        res.json(data);
                    }
                })
            })
        })
    }
})

module.exports = router