const db = require('./database');

const Product = {
  create: async (data) => {
    const sql = 'INSERT INTO PRODUCT (Product_ID, Product_name, Description, Author, Price, Stock, Status, New_arrival_date, Product_image, Seller_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const params = [data.Product_ID, data.Product_name, data.Description, data.Author, data.Price, data.Stock, data.Status, data.New_arrival_date, data.Product_image, data.Seller_ID];
    return await db.execute(sql, params);
  },
  read: async (Product_ID) => {
    const sql = 'SELECT * FROM PRODUCT WHERE Product_ID = ?';
    const [rows] = await db.execute(sql, [Product_ID]);
    return rows[0];
  },
  update: async (Product_ID, data) => {
    const sql = 'UPDATE PRODUCT SET Product_name = ?, Description = ?, Author = ?, Price = ?, Stock = ?, Status = ?, New_arrival_date = ?, Product_image = ?, Seller_ID = ? WHERE Product_ID = ?';
    const params = [data.Product_name, data.Description, data.Author, data.Price, data.Stock, data.Status, data.New_arrival_date, data.Product_image, data.Seller_ID, Product_ID];
    return await db.execute(sql, params);
  },
  delete: async (Product_ID) => {
    const sql = 'DELETE FROM PRODUCT WHERE Product_ID = ?';
    return await db.execute(sql, [Product_ID]);
  }
};

module.exports = Product;
