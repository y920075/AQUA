const mysql = require('mysql');
const config = require('../config/dev_config');
const bluebird = require('bluebird');


const db = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  multipleStatements: true

});

// db.on('error',(event)=>{
//     //透過這個on事件捕捉錯誤處理
//     //假設db連線crush掉,讓其他的部分也能運作
//     console.log(event);
// });




db.connect(err=>{
    if(err) {
        console.log('connecting error');
    }else {
        console.log('connecting success');
      }
});

bluebird.promisifyAll(db);
module.exports = db;