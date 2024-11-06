const db = require('./database');

const Administrator = {
  create: async (data) => {
    const sql = 'INSERT INTO ADMINISTRATOR (Admin_ID, Member_ID) VALUES (?, ?)';
    const params = [data.Admin_ID, data.Member_ID];
    return await db.execute(sql, params);
  },
  read: async (Admin_ID) => {
    const sql = 'SELECT * FROM ADMINISTRATOR WHERE Admin_ID = ?';
    const [rows] = await db.execute(sql, [Admin_ID]);
    return rows[0];
  },
  update: async (Admin_ID, data) => {
    const sql = 'UPDATE ADMINISTRATOR SET Member_ID = ? WHERE Admin_ID = ?';
    const params = [data.Member_ID, Admin_ID];
    return await db.execute(sql, params);
  },
  delete: async (Admin_ID) => {
    const sql = 'DELETE FROM ADMINISTRATOR WHERE Admin_ID = ?';
    return await db.execute(sql, [Admin_ID]);
  }
};

module.exports = Administrator;
