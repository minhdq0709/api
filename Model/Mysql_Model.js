const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "192.168.23.22",
  user: "minhdq",
  password: "wgy2FdMt0rXfcmCWGSqa",
  database: "FacebookDb",
  connectionLimit: 10,
});

module.exports = pool;
