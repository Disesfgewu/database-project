const db = require('./database');

const Vendor = {
  create: async (data) => {
    const sql = 'INSERT INTO VENDOR (Vendor_ID, Name) VALUES (?, ?)';
    const params = [data.Vendor_ID, data.Name];
    return await db.execute(sql, params);
  },
  read: async (Vendor_ID) => {
    const sql = 'SELECT * FROM VENDOR WHERE Vendor_ID = ?';
    const [rows] = await db.execute(sql, [Vendor_ID]);
    return rows[0];
  },
  update: async (Vendor_ID, data) => {
    const sql = 'UPDATE VENDOR SET Name = ? WHERE Vendor_ID = ?';
    const params = [data.Name, Vendor_ID];
    return await db.execute(sql, params);
  },
  delete: async (Vendor_ID) => {
    const sql = 'DELETE FROM VENDOR WHERE Vendor_ID = ?';
    return await db.execute(sql, [Vendor_ID]);
  }
};

module.exports = Vendor;
