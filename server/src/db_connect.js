const mysql = require("mysql");
const bluebird = require("bluebird");

const db = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST_IP,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  multipleStatements: true,
  dateStrings: true,
});

db.on("error", (event) => {});

db.connect((err) => {
  if (err) {
    console.log("----連線發生錯誤,錯誤訊息如下:");
    console.log(err.message);
    console.log("----連線發生錯誤,錯誤訊息到此結束");
  } else {
    console.log(
      `db 連線成功! host: ${process.env.DB_HOST_IP},port: ${process.env.DB_PORT}`
    );
  }
});

bluebird.promisifyAll(db);
module.exports = db;
