const db = require('./database');

const Member = {
  create: async (data) => {
    const sql = 'INSERT INTO MEMBER (Member_ID, Name, Email, Password, Phone, Birthday, Register_date, Last_login) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const params = [data.Member_ID, data.Name, data.Email, data.Password, data.Phone, data.Birthday, data.Register_date, data.Last_login];
    return await db.execute(sql, params);
  },
  read: async (Member_ID) => {
    const sql = 'SELECT * FROM MEMBER WHERE Member_ID = ?';
    const [rows] = await db.execute(sql, [Member_ID]);
    return rows[0];
  },
  update: async (Member_ID, data) => {
    const sql = 'UPDATE MEMBER SET Name = ?, Email = ?, Password = ?, Phone = ?, Birthday = ?, Register_date = ?, Last_login = ? WHERE Member_ID = ?';
    const params = [data.Name, data.Email, data.Password, data.Phone, data.Birthday, data.Register_date, data.Last_login, Member_ID];
    return await db.execute(sql, params);
  },
  delete: async (Member_ID) => {
    const sql = 'DELETE FROM MEMBER WHERE Member_ID = ?';
    return await db.execute(sql, [Member_ID]);
  }
};

module.exports = Member;
