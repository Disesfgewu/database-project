const db = require('./database');

const Order = {
  create: async (data) => {
    const sql = 'INSERT INTO ORDER_ (Order_ID, Order_time, Status, Status_update_time, Package_method, Payment_method, Address, Notes, Buyer_ID, Seller_ID, Coupon_used_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const params = [data.Order_ID, data.Order_time, data.Status, data.Status_update_time, data.Package_method, data.Payment_method, data.Address, data.Notes, data.Buyer_ID, data.Seller_ID, data.Coupon_used_ID];
    return await db.execute(sql, params);
  },
  read: async (Order_ID) => {
    const sql = 'SELECT * FROM ORDER_ WHERE Order_ID = ?';
    const [rows] = await db.execute(sql, [Order_ID]);
    return rows[0];
  },
  update: async (Order_ID, data) => {
    const sql = 'UPDATE ORDER_ SET Order_time = ?, Status = ?, Status_update_time = ?, Package_method = ?, Payment_method = ?, Address = ?, Notes = ?, Buyer_ID = ?, Seller_ID = ?, Coupon_used_ID = ? WHERE Order_ID = ?';
    const params = [data.Order_time, data.Status, data.Status_update_time, data.Package_method, data.Payment_method, data.Address, data.Notes, data.Buyer_ID, data.Seller_ID, data.Coupon_used_ID, Order_ID];
    return await db.execute(sql, params);
  },
  delete: async (Order_ID) => {
    const sql = 'DELETE FROM ORDER_ WHERE Order_ID = ?';
    return await db.execute(sql, [Order_ID]);
  }
};

module.exports = Order;
