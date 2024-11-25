const db = require('./database');

const Customer = {
  create: async (data) => {
    const sql = 'INSERT INTO CUSTOMER (Customer_ID, Member_ID) VALUES (?, ?)';
    const params = [data.Customer_ID, data.Member_ID];
    return await db.execute(sql, params);
  },
  read: async (Customer_ID) => {
    const sql = 'SELECT * FROM CUSTOMER WHERE Customer_ID = ?';
    const [rows] = await db.execute(sql, [Customer_ID]);
    return rows[0];
  },
  update: async (Customer_ID, data) => {
    const sql = 'UPDATE CUSTOMER SET Member_ID = ? WHERE Customer_ID = ?';
    const params = [data.Member_ID, Customer_ID];
    return await db.execute(sql, params);
  },
  delete: async (Customer_ID) => {
    const sql = 'DELETE FROM CUSTOMER WHERE Customer_ID = ?';
    return await db.execute(sql, [Customer_ID]);
  }
};

module.exports = Customer;
