const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "@dldhfsu0109",
    database: "cctv"
});

module.exports = db;