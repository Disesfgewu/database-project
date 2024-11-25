const mysql = require('mysql2/promise');

// 创建数据库连接
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',       
  database: 'project', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = {
  pool,
  execute: (sql, params) => pool.execute(sql, params), 
  close: () => pool.end() 
};
