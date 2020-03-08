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

const del = `DELETE FROM \`weather_data\` WHERE \`classStartDate\` < DATE_FORMAT(NOW(),'%Y-%m-%d')`
const sql = `SELECT * FROM \`weather_data\` WHERE \`updated_at\`< DATE_FORMAT(NOW(),'%Y-%m-%d')`
const autoUpdateWeatherData = ()=>{
    console.log('開始自動更新天氣資訊')
    setTimeout( async ()=>{
        console.log('刪除已過活動日期資料中...')
        //await db.queryAsync(del)
        console.log('搜索過期資料中...')
        await db.queryAsync(sql)
            .then( async result=>{
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
            })
        await autoUpdateWeatherData()
    },6000)
}
autoUpdateWeatherData()