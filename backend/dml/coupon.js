const db = require('./database');

const Coupon = {
  create: async (data) => {
    const sql = 'INSERT INTO COUPON (Coupon_ID, Low_money, Start_date, End_date, Detail, Type, Owner_ID, Sender_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const params = [data.Coupon_ID, data.Low_money, data.Start_date, data.End_date, data.Detail, data.Type, data.Owner_ID, data.Sender_ID];
    return await db.execute(sql, params);
  },
  read: async (Coupon_ID) => {
    const sql = 'SELECT * FROM COUPON WHERE Coupon_ID = ?';
    const [rows] = await db.execute(sql, [Coupon_ID]);
    return rows[0];
  },
  update: async (Coupon_ID, data) => {
    const sql = 'UPDATE COUPON SET Low_money = ?, Start_date = ?, End_date = ?, Detail = ?, Type = ?, Owner_ID = ?, Sender_ID = ? WHERE Coupon_ID = ?';
    const params = [data.Low_money, data.Start_date, data.End_date, data.Detail, data.Type, data.Owner_ID, data.Sender_ID, Coupon_ID];
    return await db.execute(sql, params);
  },
  delete: async (Coupon_ID) => {
    const sql = 'DELETE FROM COUPON WHERE Coupon_ID = ?';
    return await db.execute(sql, [Coupon_ID]);
  }
};

module.exports = Coupon;
