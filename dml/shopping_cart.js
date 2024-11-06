const db = require('./database');

const ShoppingCart = {
  create: async (data) => {
    const sql = 'INSERT INTO SHOPPING_CART (Cart_ID, Member_ID, Total_price) VALUES (?, ?, ?)';
    const params = [data.Cart_ID, data.Member_ID, data.Total_price];
    return await db.execute(sql, params);
  },
  read: async (Cart_ID) => {
    const sql = 'SELECT * FROM SHOPPING_CART WHERE Cart_ID = ?';
    const [rows] = await db.execute(sql, [Cart_ID]);
    return rows[0];
  },
  update: async (Cart_ID, data) => {
    const sql = 'UPDATE SHOPPING_CART SET Member_ID = ?, Total_price = ? WHERE Cart_ID = ?';
    const params = [data.Member_ID, data.Total_price, Cart_ID];
    return await db.execute(sql, params);
  },
  delete: async (Cart_ID) => {
    const sql = 'DELETE FROM SHOPPING_CART WHERE Cart_ID = ?';
    return await db.execute(sql, [Cart_ID]);
  }
};

module.exports = ShoppingCart;
