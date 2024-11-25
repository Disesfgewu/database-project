const db = require('./database');

const ProductCategory = {
  create: async (data) => {
    const sql = 'INSERT INTO PRODUCT_CATEGORY (Product_ID, Category_ID) VALUES (?, ?)';
    const params = [data.Product_ID, data.Category_ID];
    return await db.execute(sql, params);
  },
  read: async (Product_ID, Category_ID) => {
    const sql = 'SELECT * FROM PRODUCT_CATEGORY WHERE Product_ID = ? AND Category_ID = ?';
    const [rows] = await db.execute(sql, [Product_ID, Category_ID]);
    return rows[0];
  },
  update: async (Product_ID, Category_ID, data) => {
    const sql = 'UPDATE PRODUCT_CATEGORY SET Category_ID = ? WHERE Product_ID = ?';
    const params = [data.Category_ID, Product_ID];
    return await db.execute(sql, params);
  },
  delete: async (Product_ID, Category_ID) => {
    const sql = 'DELETE FROM PRODUCT_CATEGORY WHERE Product_ID = ? AND Category_ID = ?';
    return await db.execute(sql, [Product_ID, Category_ID]);
  }
};

module.exports = ProductCategory;
