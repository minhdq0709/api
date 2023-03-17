const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "192.168.23.22",
  user: "FacebookDb_2_207",
  password: "h5T8jPiwF72kQfPenka7",
  database: "FacebookDb",
  connectionLimit: 10,
  port: 3306
});

module.exports = pool;
