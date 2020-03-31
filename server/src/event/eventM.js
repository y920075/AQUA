const db = require(__dirname + '/../db_connect')
const mysql = require('mysql');
const moment =      require('moment-timezone');


class event {
    constructor() {}
    //取得總筆數
    static getTotalData(req){
        let where = []
        if(req.query.type) where.push(`\`eventType\` = '${req.query.type}'`)
        if(req.query.q) where.push(`\`eventName\` LIKE '%${req.query.q}%'`)
        if (!req.query.expired) where.push(`\`event_data\`.\`eventStartDate\` >= NOW()`)
        if(req.session.memberId) where.push(`\`eventSponsor\` = '${req.session.memberId}'`)
        if(where.length>0){where = 'WHERE '+where.join(' AND ')}else{where=''}
        const sql = `SELECT COUNT(1) as 'rows' FROM \`event_data\` ${where}`
        return sql
    }
    //取得天氣資料
    static getWeatherData(eventId){
        const sql = `SELECT \`id\`, \`eventId\`, \`location_lng\`, \`location_lat\`, 
                     \`1day\`, \`2day\`, \`3day\`, \`4day\`, \`5day\`, \`6day\`,\`weatherData_updated_at\` 
                     FROM \`weather_data\` 
                     WHERE \`eventId\` = '${eventId}'`
        return sql
    }
    //取得活動類型
    static async getEventType(typeId){
        let eventType = null
        const sql =    `SELECT \`eventTypeName\`
                        FROM \`event_type\`
                        WHERE \`eventTypeId\`='${typeId}'`

        await db.queryAsync(sql).then(result=>{eventType = result[0] ? result[0].eventTypeName : '查無資料'})
        return eventType
    }
    //取得編號的目前最大值
    static async getMaxNumber(){
        let maxId = null
        const sql =    `SELECT MAX(\`maxId\`) AS \`maxId\`
                        FROM \`event_data\` 
                        WHERE DATE_FORMAT(\`created_at\`,'%Y-%m') = '${moment(new Date()).format('YYYY-MM')}'`;

        await db.queryAsync(sql).then(result=>{maxId = !result[0].maxId ? '1' : `${result[0].maxId+1}`})
        return maxId
    }
    //取得圖片名稱
    static getImgName(req){
        const sql = `SELECT \`eventImg\` FROM \`event_data\` 
                     WHERE \`eventId\` = '${req.params.eventId}' AND \`eventSponsor\` = '${req.session.memberId}'`
        return sql
    }
    //取得所有活動資料(地圖用)
    static getAllEventDataForMap(query){
        let where = []
        if(query.type) where.push(`\`event_data\`.\`eventType\` = '${query.type}'`)
        if(query.q) where.push(`\`event_data\`.\`eventName\` LIKE '%${query.q}%'`)
        if (!query.expired) where.push(`\`event_data\`.\`eventEndDate\` >= NOW()`)
        if(where.length>0){where = 'WHERE '+where.join(' AND ')}else{where=''}
        const sort = query.sort ? ` ORDER BY \`event_data\`.\`${query.sort.split(',')[0]}\` ${query.sort.split(',')[1]}` : ` ORDER BY \`event_data\`.\`created_at\` DESC, \`event_data\`.\`eventId\` DESC`

        let sql = ` SELECT  \`event_data\`.\`eventId\`,\`event_data\`.\`eventName\`,\`event_data\`.\`eventType\`,
                            \`event_data\`.\`eventLocation\`,\`event_data\`.\`eventLocation_lat\`,
                            \`event_data\`.\`eventLocation_lng\`,\`event_data\`.\`eventSponsor\`,
                            DATE_FORMAT(\`event_data\`.\`eventStartDate\`,'%Y-%m-%d') as eventStartDate,
                            DATE_FORMAT(\`event_data\`.\`eventEndDate\`,'%Y-%m-%d') as eventEndDate,
                            \`event_data\`.\`eventNeedPeople\`,\`event_data\`.\`eventNowPeople\`,
                            \`event_data\`.\`eventImg\`,\`my_member\`.\`loginId\`
                    FROM \`event_data\` 
                    LEFT JOIN \`my_member\`
                    ON \`event_data\`.\`eventSponsor\` = \`my_member\`.\`memberId\`
                    ${where}
                    ${sort}`
        return sql
    }
    //取得所有活動資料
    static getAllEventData(query,totalPages,perPage){
        let where = []
        if(query.type) where.push(`\`event_data\`.\`eventType\` = '${query.type}'`)
        if(query.q) where.push(`\`event_data\`.\`eventName\` LIKE '%${query.q}%'`)
        if (!query.expired) where.push(`\`event_data\`.\`eventEndDate\` >= "${moment(new Date()).format('YYYY-MM-DD hh:mm:ss')}"`)
        if(where.length>0){where = 'WHERE '+where.join(' AND ')}else{where=''}
        const sort = query.sort ? ` ORDER BY \`event_data\`.\`${query.sort.split(',')[0]}\` ${query.sort.split(',')[1]}` : ` ORDER BY \`event_data\`.\`created_at\` DESC, \`event_data\`.\`eventId\` DESC`

        let page = query.page ? parseInt(query.page) : 1
        if (page<1) page=1;
        if (page>totalPages) page=totalPages;

        let sql = ` SELECT  \`event_data\`.\`eventId\`,\`event_data\`.\`eventName\`,\`event_data\`.\`eventType\`,
                            \`event_data\`.\`eventLocation\`,\`event_data\`.\`eventLocation_lat\`,
                            \`event_data\`.\`eventLocation_lng\`,\`event_data\`.\`eventSponsor\`,
                            DATE_FORMAT(\`event_data\`.\`eventStartDate\`,'%Y-%m-%d') as eventStartDate,
                            DATE_FORMAT(\`event_data\`.\`eventEndDate\`,'%Y-%m-%d') as eventEndDate,
                            \`event_data\`.\`eventNeedPeople\`,\`event_data\`.\`eventNowPeople\`,
                            \`event_data\`.\`eventImg\`,\`my_member\`.\`loginId\`
                    FROM \`event_data\` 
                    LEFT JOIN \`my_member\`
                    ON \`event_data\`.\`eventSponsor\` = \`my_member\`.\`memberId\`
                    ${where}
                    ${sort}
                    LIMIT  ${(page-1)*perPage}, ${perPage}`
        return sql
    }
    //取得單一活動資料
    static getSingleEventData(Id){
        const sql = `SELECT \`event_data\`.\`eventId\`,\`event_data\`.\`eventName\`,\`event_data\`.\`eventType\`,
                            \`event_data\`.\`eventFullLocation\`,\`event_data\`.\`eventSponsor\`,
                            \`event_data\`.\`eventStartDate\`,\`event_data\`.\`eventEndDate\`,\`event_data\`.\`eventDesc\`,
                            \`event_data\`.\`eventNeedPeople\`,\`event_data\`.\`eventNowPeople\`,
                            \`event_data\`.\`eventImg\`,\`my_member\`.\`loginId\`,\`event_data\`.\`eventLocation_lat\`,\`event_data\`.\`eventLocation_lng\`
                     FROM \`event_data\` 
                     LEFT JOIN \`my_member\`
                     ON \`event_data\`.\`eventSponsor\` = \`my_member\`.\`memberId\`
                     WHERE \`eventId\` =  '${Id}'`
        return sql
    }
    //會員新增一筆活動
    static async memberAddEventData(sqlStmt,Id,lat,lng,startDate){
        let data = null
        const sql = `INSERT INTO \`event_data\`
                    (\`maxId\`, \`eventId\`, \`eventName\`, \`eventType\`, \`eventLocation\`, \`eventFullLocation\`,
                    \`eventLocation_lat\`,\`eventLocation_lng\`, \`eventSponsor\`,\`eventStartDate\`, \`eventEndDate\`,
                    \`eventDesc\`, \`eventNeedPeople\`,\`eventNowPeople\`, \`eventImg\`,\`eventTypeId\`)
                    VALUES (? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?, ?)`
        await db.queryAsync(sql,sqlStmt)
        .then(async result=>{
            if ( result.affectedRows>0 ) {
                const weatherSql = `INSERT INTO \`weather_data\`(\`eventId\`, \`location_lng\`, \`location_lat\`,\`eventStartDate\`,\`weatherData_updated_at\`) 
                                    VALUES (?,?,?,?,?)`
                const weatherSqlStmt  = [
                    Id,
                    lng,
                    lat,
                    startDate,
                    '1970-01-01'
                ]
                return db.queryAsync(weatherSql,weatherSqlStmt)
            }
        }).then( result => data = result)
        return data
    }
    //會員編輯一筆活動
    static async memberEditEventData(sqlStmt,req,lat,lng){
        let data = null
        let eventImg = !req.file ? '' : ',\`eventImg\` = ?'
        const sql =    `UPDATE \`event_data\`
                        SET \`eventName\`=?,\`eventTypeId\`=?,\`eventType\`=?,\`eventLocation\`=?,\`eventFullLocation\`=?,
                        \`eventLocation_lat\`=?,\`eventLocation_lng\`=?,\`eventStartDate\`=?,\`eventEndDate\`=?,
                        \`eventDesc\`=?,\`eventNeedPeople\`=?${eventImg}
                        WHERE \`eventId\` = '${req.params.eventId}' AND \`eventSponsor\` = '${req.session.memberId}'`

        await db.queryAsync(sql,sqlStmt).then(async result=>{
            if ( result.affectedRows>0 ) {
                const weatherSql = `UPDATE \`weather_data\`
                                    SET \`location_lng\`=?, \`location_lat\`=?,\`eventStartDate\`=?,\`weatherData_updated_at\`=?
                                    WHERE \`eventId\` = '${req.params.eventId}'`
                const weatherSqlStmt  = [
                    lng,
                    lat,
                    req.body.eventStartDate,
                    '1970-01-01'
                ]
                data = result 
                return db.queryAsync(weatherSql,weatherSqlStmt)
            }
        }).then( result => {})
        return data
    }
    //會員刪除一筆活動
    static async memberDelEventData(req){
        let data = {}

        const findEventDataSql = `SELECT * FROM \`event_data\` WHERE \`eventId\` = '${req.params.eventId}'`

        const sql =            `DELETE FROM\`event_data\` 
                                WHERE \`eventId\` = '${req.params.eventId}' AND \`eventSponsor\` = '${req.session.memberId}'`

        const delWeatherDataSql = `DELETE FROM \`weather_data\` 
                                WHERE \`eventId\` = '${req.params.eventId}'`


        const findEventData = await db.queryAsync(findEventDataSql)
        if ( findEventData.length<=0 ) {
            data.status = 404
            data.msg = '找不到活動資料'
            return data
        } else if ( findEventData[0].eventSponsor !== req.session.memberId ){
            data.status = 403
            data.msg = '不可以刪除不是自己的活動!'
            return data
        }

        await db.queryAsync(delWeatherDataSql)
        const delEventData = await db.queryAsync(sql)
        if (delEventData.affectedRows>0){
            const delEventMemberSql = `DELETE FROM\`event_memeber\` WHERE \`eventId\` = '${req.params.eventId}'`
            await db.queryAsync(delEventMemberSql)
            data.status = 201;
            data.msg = `編號${req.params.eventId} 刪除成功`
            return data
        } else {
            data.status = 500;
            data.msg = '刪除失敗'
            return data
        }
    }
    //會員查詢自己發起的所有活動資料
    static async memberGetAllEventData(req,perPage){
        let data = {}
        let where = []
        let totalPages = null
        let page = req.query.page ? parseInt(req.query.page) : 1
        const totalRows = await db.queryAsync(event.getTotalData(req))
        if ( totalRows[0].rows===0 ){return data}else{totalPages = Math.ceil(totalRows[0].rows/perPage)}
        const sort = req.query.sort ? ` ORDER BY \`event_data\`.\`${req.query.sort.split(',')[0]}\` ${req.query.sort.split(',')[1]}` : ` ORDER BY \`event_data\`.\`created_at\` DESC , \`eventId\` DESC`
        if (req.query.type) where.push(`\`event_data\`.\`eventType\` = '${req.query.type}'`)
        if (req.query.q) where.push(`\`event_data\`.\`eventName\` LIKE '%${req.query.q}%'`)
        if (req.session.memberId) where.push(`\`eventSponsor\` = '${req.session.memberId}'`)
        if (!req.query.expired) where.push(`\`eventStartDate\` >= NOW()`)
        if (where.length>0){where = 'WHERE '+where.join(' AND ')}else{where=''}
        if (page<1) page=1;
        if (page>totalPages) page=totalPages;

        const sql = `   SELECT \`eventId\`,\`eventName\`,\`eventType\`,\`eventLocation\`,\`eventLocation_lat\`,
                                \`eventLocation_lng\`,\`eventStartDate\`,\`eventEndDate\`,
                                \`eventNeedPeople\`,\`eventNowPeople\`,\`eventImg\`
                        FROM \`event_data\`
                        ${where}
                        ${sort}
                        LIMIT  ${(page-1)*perPage}, ${perPage}`
        data.totalPages = totalPages
        data.totalRows = totalRows[0].rows
        data.page = page
        data.eventData = await db.queryAsync(sql)
        return data
    }
    //會員查詢自己發起的單一活動資料(含參加者資料)
    static async memberGetSingleEnventData(req){
        let data = {}
        const findMemberData = `SELECT \`event_memeber\`.\`memberId\`,\`event_memeber\`.\`memberMemo\`,
                                \`my_member\`.\`loginId\`,\`my_member\`.\`gender\`,\`my_member\`.\`email\`,
                                \`my_member\`.\`mobileNumber\`,
                                \`my_member\`.\`avatar\`
                                FROM \`event_memeber\` 
                                LEFT JOIN \`my_member\`
                                ON \`event_memeber\`.\`memberId\` = \`my_member\`.\`memberId\`
                                WHERE \`event_memeber\`.\`eventId\` = '${req.params.eventId}'`

        const sql =            `SELECT \`eventId\`,\`eventName\`,\`eventTypeId\`,\`eventType\`,\`eventLocation\`,\`eventFullLocation\`,
                                DATE_FORMAT(\`eventStartDate\`, '%Y-%m-%dT%H:%i') as eventStartDate,
                                DATE_FORMAT(\`eventEndDate\`, '%Y-%m-%dT%H:%i') as eventEndDate,
                                \`eventDesc\`,\`eventNeedPeople\`,\`eventNowPeople\`,\`eventImg\`
                                FROM \`event_data\` 
                                WHERE \`eventId\` = '${req.params.eventId}' AND \`eventSponsor\` = '${req.session.memberId}'`

        const result = await db.queryAsync(sql)
        if ( result.length>0 ) {
            data.eventData = result
            data.eventMemberData = await db.queryAsync(findMemberData)
        }
        return data
    }
    //會員報名一筆課程
    static async memberJoinEvent(req){
        let data = {}
        const checkEventDataSql =  `SELECT \`eventNeedPeople\`,\`eventNowPeople\`,\`eventSponsor\`
                                    FROM \`event_data\` 
                                    WHERE \`eventId\` = '${req.params.eventId}'`

        const checkMemberDataSql = `SELECT \`eventId\`,\`memberId\`
                                    FROM \`event_memeber\`
                                    WHERE \`eventId\` = '${req.params.eventId}' AND \`memberId\` = '${req.session.memberId}'`

        const addDataSql =         `INSERT INTO \`event_memeber\` 
                                    (\`eventId\`, \`memberId\`, \`memberMemo\`) 
                                    VALUES (? ,? ,?)`

        const queryCountSql =      `SELECT COUNT(0) as eventCount 
                                    FROM \`event_memeber\` 
                                    WHERE \`eventId\` = '${req.params.eventId}'`

        const checkEventData = await db.queryAsync(checkEventDataSql)
        if (checkEventData.length===0) {
            data.status = 404
            data.msg = '查無課程資料'
            return data
        } else if ( checkEventData[0].eventNeedPeople === checkEventData[0].eventNowPeople ) {
            data.status = 400
            data.msg = '報名人數已滿'
            return data
        } else if ( checkEventData[0].eventSponsor === req.session.memberId ) {
            data.status = 409
            data.msg = '主辦者不可以報名自己的活動!'
            return data
        }
        const checkMemberData = await db.queryAsync(checkMemberDataSql)
        if (checkMemberData.length>0) {
            data.status = 409
            data.msg = '重複報名'
            return data
        }
        const sqlStmt = [
            req.params.eventId,
            req.session.memberId,
            req.body.memberMemo
        ]
        await db.queryAsync(addDataSql,sqlStmt)
        const queryCount = await db.queryAsync(queryCountSql)
        const updateNowPeopleDataSql = `UPDATE \`event_data\` 
                                        SET\`eventNowPeople\` = '${queryCount[0].eventCount}' 
                                        WHERE \`eventId\` = '${req.params.eventId}'`
        data.result = await db.queryAsync(updateNowPeopleDataSql)
        return data

    }
    //會員取消報名活動(自己不是活動發起人)
    static async memberUnjoinEvent(req){
        let data = {}
        const checkEventDataSql =  `SELECT \`eventNeedPeople\`,\`eventNowPeople\`
                                    FROM \`event_data\` 
                                    WHERE \`eventId\` = '${req.params.eventId}'`

        const checkMemberDataSql = `SELECT \`eventId\`,\`memberId\`
                                    FROM \`event_memeber\`

                                    WHERE \`eventId\` = '${req.params.eventId}' AND \`memberId\` = '${req.session.memberId}'`
        const delDataSql =         `DELETE FROM \`event_memeber\` 
                                    WHERE \`eventId\` = '${req.params.eventId}' AND \`memberId\` = '${req.session.memberId}'`

        const queryCountSql =      `SELECT COUNT(0) as eventCount 
                                    FROM \`event_memeber\` 
                                    WHERE \`eventId\` = '${req.params.eventId}'`
        
        const checkEventData = await db.queryAsync(checkEventDataSql)
        if (checkEventData.length===0) {
            data.status = 404
            data.msg = '查無課程資料'
            return data
        }
        const checkMemberData = await db.queryAsync(checkMemberDataSql)
        if (checkMemberData.length===0) {
            data.status = 404
            data.msg = '查無報名資料'
            return data
        }
        await db.queryAsync(delDataSql)
        const queryCount = await db.queryAsync(queryCountSql)
        const updateNowPeopleDataSql = `UPDATE \`event_data\` 
                                        SET\`eventNowPeople\` = '${queryCount[0].eventCount}' 
                                        WHERE \`eventId\` = '${req.params.eventId}'`
        data.result = await db.queryAsync(updateNowPeopleDataSql)
        return data
    }
    //會員取消其他人的報名(自己為活動發起人時)
    static async memberUnjoinOtherPeopleEvent(req){
        let data = {}
        const checkEventDataSql =  `SELECT \`eventNeedPeople\`,\`eventNowPeople\`
                                    FROM \`event_data\` 
                                    WHERE \`eventId\` = '${req.params.eventId}' AND \`eventSponsor\` = '${req.session.memberId}'`
    
        const delDataSql =         `DELETE FROM \`event_memeber\` 
                                    WHERE \`eventId\` = '${req.params.eventId}' AND \`memberId\` = '${req.body.memberId}'`

        const queryCountSql =      `SELECT COUNT(0) as eventCount 
                                    FROM \`event_memeber\` 
                                    WHERE \`eventId\` = '${req.params.eventId}'`

        const checkEventData = await db.queryAsync(checkEventDataSql)
        if (checkEventData.length===0) {
            data.status = 404
            data.msg = '查無課程資料'
            return data
        }
        await db.queryAsync(delDataSql)
        const queryCount = await db.queryAsync(queryCountSql)
        const updateNowPeopleDataSql = `UPDATE \`event_data\` 
                                        SET\`eventNowPeople\` = '${queryCount[0].eventCount}' 
                                        WHERE \`eventId\` = '${req.params.eventId}'`
        data.result = await db.queryAsync(updateNowPeopleDataSql)
        return data
    }
    //會員查詢自己報名的所有活動資料
    static async memberGetAllJoinEventData(req,perPage){
        let data = {}
        let where = []
        let totalPages = null
        let page = req.query.page ? parseInt(req.query.page) : 1

        const sort = req.query.sort ? ` ORDER BY \`event_data\`.\`${req.query.sort.split(',')[0]}\` ${req.query.sort.split(',')[1]}` : ` ORDER BY \`event_data\`.\`created_at\` DESC , \`eventId\` DESC`

        if (req.query.type) where.push(`\`event_data\`.\`eventType\` = '${req.query.type}'`)
        if (req.query.q) where.push(`\`event_data\`.\`eventName\` LIKE '%${req.query.q}%'`)
        if (req.session.memberId) where.push(`\`event_memeber\`.\`memberId\` = '${req.session.memberId}'`)
        if (!req.query.expired) where.push(`\`event_data\`.\`eventStartDate\` >= NOW()`)
        if (where.length>0){where = 'WHERE '+where.join(' AND ')}else{where=''}

        const totalRows = await db.queryAsync( `SELECT COUNT(1) as 'rows' 
                                                FROM \`event_data\`  
                                                INNER JOIN \`event_memeber\`
                                                ON \`event_data\`.\`eventId\` = \`event_memeber\`.\`eventId\`
                                                ${where}`)

        if ( totalRows[0].rows===0 ){return data}else{totalPages = Math.ceil(totalRows[0].rows/perPage)}

        if (page<1) page=1;
        if (page>totalPages) page=totalPages;

        const sql = `SELECT \`event_data\`.\`eventId\`,\`event_data\`.\`eventName\`,\`event_data\`.\`eventType\`,
                            \`event_data\`.\`eventLocation\`,\`event_data\`.\`eventLocation_lat\`,
                            \`event_data\`.\`eventLocation_lng\`,\`event_data\`.\`eventSponsor\`,
                            \`event_data\`.\`eventStartDate\`,\`event_data\`.\`eventEndDate\`,
                            \`event_data\`.\`eventNeedPeople\`,\`event_data\`.\`eventNowPeople\`,
                            \`event_data\`.\`eventImg\`,\`my_member\`.\`loginId\`
                     FROM \`event_data\` 
                     INNER JOIN \`event_memeber\`
                     ON \`event_memeber\`.\`eventId\` = \`event_data\`.\`eventId\`
                     LEFT JOIN \`my_member\`
                     ON \`event_data\`.\`eventSponsor\` = \`my_member\`.\`memberId\`
                     ${where}
                     ${sort}
                     LIMIT  ${(page-1)*perPage}, ${perPage}`
        
        data.totalPages = totalPages
        data.totalRows = totalRows[0].rows
        data.page = page
        data.eventData = await db.queryAsync(sql)
        return data
    }
    
}

module.exports = event