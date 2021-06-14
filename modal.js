const { createPool } = require('mysql');
const mysql = createPool({
    host: 'remotemysql.com',
    user: ' T6hUXULuBv',
    port: 3306,
    password: '',
    database: 'T6hUXULuBv',
    multipleStatements: true
})
module.exports = mysql;