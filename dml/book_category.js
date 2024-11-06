const db = require('./database');

const BookCategory = {
  create: async (data) => {
    const sql = 'INSERT INTO BOOK_CATEGORY (Category_ID, Category_name) VALUES (?, ?)';
    const params = [data.Category_ID, data.Category_name];
    return await db.execute(sql, params);
  },
  read: async (Category_ID) => {
    const sql = 'SELECT * FROM BOOK_CATEGORY WHERE Category_ID = ?';
    const [rows] = await db.execute(sql, [Category_ID]);
    return rows[0];
  },
  update: async (Category_ID, data) => {
    const sql = 'UPDATE BOOK_CATEGORY SET Category_name = ? WHERE Category_ID = ?';
    const params = [data.Category_name, Category_ID];
    return await db.execute(sql, params);
  },
  delete: async (Category_ID) => {
    const sql = 'DELETE FROM BOOK_CATEGORY WHERE Category_ID = ?';
    return await db.execute(sql, [Category_ID]);
  }
};

module.exports = BookCategory;
