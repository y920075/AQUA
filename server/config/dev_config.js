require('dotenv').config()

module.exports = {
  mysql: {
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
    // socketPath: '/opt/lampp/var/mysql/mysql.sock'
  }
}