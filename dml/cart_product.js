const db = require('./database');

const CartProduct = {
  create: async (data) => {
    const sql = 'INSERT INTO CART_PRODUCT (Cart_ID, Product_ID, Quantity) VALUES (?, ?, ?)';
    const params = [data.Cart_ID, data.Product_ID, data.Quantity];
    return await db.execute(sql, params);
  },
  read: async (Cart_ID, Product_ID) => {
    const sql = 'SELECT * FROM CART_PRODUCT WHERE Cart_ID = ? AND Product_ID = ?';
    const [rows] = await db.execute(sql, [Cart_ID, Product_ID]);
    return rows[0];
  },
  update: async (Cart_ID, Product_ID, data) => {
    const sql = 'UPDATE CART_PRODUCT SET Quantity = ? WHERE Cart_ID = ? AND Product_ID = ?';
    const params = [data.Quantity, Cart_ID, Product_ID];
    return await db.execute(sql, params);
  },
  delete: async (Cart_ID, Product_ID) => {
    const sql = 'DELETE FROM CART_PRODUCT WHERE Cart_ID = ? AND Product_ID = ?';
    return await db.execute(sql, [Cart_ID, Product_ID]);
  }
};

module.exports = CartProduct;
