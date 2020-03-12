const express = require('express')
const db =      require(__dirname + '/db_connect')
const router = express.Router();

//查詢區鄉鎮資料
/*
    GET /dist?city=城市名稱

    回傳的資料範例
    result = [
        "中正區",
        "大同區",
        ....
        "南港區",
        "文山區"
    ]
*/
router.get('/dist',(req,res)=>{
    const sql = `SELECT \`id\`,\`cityName\`,\`distName\` 
                FROM \`dist\` 
                WHERE \`cityName\` = '${req.query.city}'`
    db.queryAsync(sql)
    .then(result=>{
        let arrDist = []
        result.forEach(value=>{
            arrDist.push(value['distName'])
        })
        res.json(arrDist)
    })
})

//查詢城市資料
/*
    GET /city
    
    回傳的資料範例，result陣列最後一個值是只有名稱的陣列
    result = [
    {
        "id": 1,
        "name": "臺北市"
    },
    ....
    {
        "id": 24,
        "name": "花蓮縣"
    },
    [
        "臺北市",
        "基隆市",
        ....
        "臺東縣",
        "花蓮縣"
    ]
]
*/

router.get('/city',(req,res)=>{
    const sql = `SELECT \`id\`,\`name\` FROM \`city\` `
    db.queryAsync(sql)
    .then(result=>{
        let arrCity = []
        result.forEach(value=>{
            arrCity.push(value['name'])
        })
        result.push(arrCity)
        res.json(result)
    })
})


module.exports = router
