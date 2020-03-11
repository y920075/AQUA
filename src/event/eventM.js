const db = require(__dirname + '/../db_connect')
const moment =      require('moment-timezone');

class event {
    constructor() {}
    //取得總筆數
    static getTotalData(req){
        let where = []
        if(req.query.type) where.push(`\`eventType\` = '${req.query.type}'`)
        if(req.query.q) where.push(`\`eventName\` LIKE '%${req.query.q}%'`)
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
        const sql = `SELECT \`eventTypeName\`
                        FROM \`event_type\`
                        WHERE \`eventTypeId\`='${typeId}'`
        await db.queryAsync(sql).then(result=>{eventType = result[0] ? result[0].eventTypeName : '查無資料'})
        return eventType
    }
    //取得編號的目前最大值
    static async getMaxNumber(){
        let maxId = null
        const sql = `SELECT MAX(\`maxId\`) AS \`maxId\`
                        FROM \`event_data\` 
                        WHERE DATE_FORMAT(\`created_at\`,'%Y-%m') = '${moment(new Date()).format('YYYY-MM')}'`;
        await db.queryAsync(sql).then(result=>{maxId = !result[0].maxId ? '1' : `${result[0].maxId+1}`})
        return maxId
    }
    //取得圖片名稱
    static getImgName(req){
        const sql = `SELECT \`eventImg\` FROM \`event_data\` WHERE \`eventId\` = '${req.params.eventId}' AND \`eventSponsor\` = '${req.session.memberId}'`
        return sql
    }
    //取得所有活動資料
    static getAllEventData(query,totalPages,perPage){
        let where = []
        if(query.type) where.push(`\`event_data\`.\`eventType\` = '${query.type}'`)
        if(query.q) where.push(`\`event_data\`.\`eventName\` LIKE '%${query.q}%'`)
        if(where.length>0){where = 'WHERE '+where.join(' AND ')}else{where=''}
        const sort = query.sort ? ` ORDER BY \`event_data\`.\`${query.sort.split(',')[0]}\` ${query.sort.split(',')[1]}` : ` ORDER BY \`event_data\`.\`created_at\` DESC`

        let page = query.page ? parseInt(query.page) : 1
        if (page<1) page=1;
        if (page>totalPages) page=totalPages;
        let sql = ` SELECT  \`event_data\`.\`eventId\`,\`event_data\`.\`eventName\`,\`event_data\`.\`eventType\`,
                            \`event_data\`.\`eventLocation\`,\`event_data\`.\`eventLocation_lat\`,
                            \`event_data\`.\`eventLocation_lng\`,\`event_data\`.\`eventSponsor\`,
                            \`event_data\`.\`eventStartDate\`,\`event_data\`.\`eventEndDate\`,
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
                            \`event_data\`.\`eventImg\`,\`my_member\`.\`loginId\`
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
                    \`eventDesc\`, \`eventNeedPeople\`,\`eventNowPeople\`, \`eventImg\`)
                    VALUES (? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?)`
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
        let eventImg = !req.file && !req.file.originalname ? '' : ',\`eventImg\` = ?'
        const sql = `UPDATE \`event_data\`
                    SET \`eventName\`=?,\`eventType\`=?,\`eventLocation\`=?,\`eventFullLocation\`=?,
                        \`eventLocation_lat\`=?,\`eventLocation_lng\`=?,\`eventStartDate\`=?,\`eventEndDate\`=?,
                        \`eventDesc\`=?,\`eventNeedPeople\`=?${eventImg}
                    WHERE \`eventId\` = '${req.params.eventId}' AND \`eventSponsor\` = '${req.session.memberId}'`
        await db.queryAsync(sql,sqlStmt).then(result=>{
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
                return db.queryAsync(weatherSql,weatherSqlStmt)
            }
        }).then( result => data = result)
        return data
    }
    //會員刪除一筆活動
    static async memberDelEventData(req){
        let data = null
        const sql = `DELETE FROM\`event_data\` WHERE \`eventId\` = '${req.params.eventId}' AND \`eventSponsor\` = '${req.session.memberId}'`
        const delWeatherData = `DELETE FROM \`weather_data\` WHERE \`eventId\` = '${req.params.eventId}'`
        await db.queryAsync(sql).then(result=>{
            if(result.affectedRows>0){
                return db.queryAsync(delWeatherData)
            }
        })
        .then( result => data = result)
        return data
    }
    //會員查詢自己的所有活動資料
    static memberGetAllEventData(req,totalPages,perPage){
        const sort = req.query.sort ? ` ORDER BY \`event_data\`.\`${req.query.sort.split(',')[0]}\` ${req.query.sort.split(',')[1]}` : ` ORDER BY \`event_data\`.\`created_at\` DESC`
        let page = req.query.page ? parseInt(req.query.page) : 1
        let where = []
        if (req.query.type) where.push(`\`event_data\`.\`eventType\` = '${req.query.type}'`)
        if (req.query.q) where.push(`\`event_data\`.\`eventName\` LIKE '%${req.query.q}%'`)
        if (req.session.memberId) where.push(`\`eventSponsor\` = '${req.session.memberId}'`)
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
        return sql
    }
}

module.exports = event