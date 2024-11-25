const db = require('./database');

const OrderProduct = {
  create: async (data) => {
    const sql = 'INSERT INTO ORDER_PRODUCT (Order_ID, Product_ID, Quantity) VALUES (?, ?, ?)';
    const params = [data.Order_ID, data.Product_ID, data.Quantity];
    return await db.execute(sql, params);
  },
  read: async (Order_ID, Product_ID) => {
    const sql = 'SELECT * FROM ORDER_PRODUCT WHERE Order_ID = ? AND Product_ID = ?';
    const [rows] = await db.execute(sql, [Order_ID, Product_ID]);
    return rows[0];
  },
  update: async (Order_ID, Product_ID, data) => {
    const sql = 'UPDATE ORDER_PRODUCT SET Quantity = ? WHERE Order_ID = ? AND Product_ID = ?';
    const params = [data.Quantity, Order_ID, Product_ID];
    return await db.execute(sql, params);
  },
  delete: async (Order_ID, Product_ID) => {
    const sql = 'DELETE FROM ORDER_PRODUCT WHERE Order_ID = ? AND Product_ID = ?';
    return await db.execute(sql, [Order_ID, Product_ID]);
  }
};

module.exports = OrderProduct;
