require("dotenv").config();

module.exports = {
  mysql: {
    port: process.env.PORT,
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
};
