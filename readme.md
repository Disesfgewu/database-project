## 專案結構

```plaintext
project-root/
│
├── dml/
│   ├── database.js           # 管理資料庫連線
│   ├── member.js             # MEMBER 表的操作函式
│   ├── customer.js           # CUSTOMER 表的操作函式
│   ├── administrator.js      # ADMINISTRATOR 表的操作函式
│   ├── vendor.js             # VENDOR 表的操作函式
│   ├── product.js            # PRODUCT 表的操作函式
│   ├── book_category.js      # BOOK_CATEGORY 表的操作函式
│   ├── product_category.js   # PRODUCT_CATEGORY 表的操作函式
│   ├── shopping_cart.js      # SHOPPING_CART 表的操作函式
│   ├── cart_product.js       # CART_PRODUCT 表的操作函式
│   ├── coupon.js             # COUPON 表的操作函式
│   ├── order.js              # ORDER_ 表的操作函式
│   └── order_product.js      # ORDER_PRODUCT 表的操作函式
│
├── CREATE_DATABASE_project.sql
├── app.js                  
└── README.md                
```

### 1. 匯入模組

在您要使用的檔案中，匯入您需要的模組。例如，要對 `MEMBER` 表進行操作，可以這樣匯入：

```javascript
const Member = require('./dml/member');
```

### 2. 基本 CRUD 操作示例

以下是每個表的 CRUD 操作說明。請確保每個函式都在異步函式中呼叫，並使用 `await` 等待其執行完成。

---

#### MEMBER 表

```javascript
// 創建新會員
await Member.create({
  Member_ID: 1,
  Name: 'John Doe',
  Email: 'john@example.com',
  Password: 'password123',
  Phone: '1234567890',
  Birthday: '1989-12-31',
  Register_date: '2024-11-05',
  Last_login: new Date()
});

// 讀取會員資料
const member = await Member.read(1);
console.log('會員資料:', member);

// 更新會員資料
await Member.update(1, {
  Name: 'Jane Doe',
  Email: 'jane@example.com',
  Password: 'newpassword123',
  Phone: '0987654321',
  Birthday: '1990-01-01',
  Register_date: '2024-11-06',
  Last_login: new Date()
});

// 刪除會員
await Member.delete(1);
```

---

#### CUSTOMER 表

```javascript
// 創建新顧客
await Customer.create({
  Customer_ID: 1,
  Member_ID: 1
});

// 讀取顧客資料
const customer = await Customer.read(1);
console.log('顧客資料:', customer);

// 更新顧客資料
await Customer.update(1, { Member_ID: 2 });

// 刪除顧客
await Customer.delete(1);
```

---

#### PRODUCT 表

```javascript
// 創建新產品
await Product.create({
  Product_ID: 101,
  Product_name: 'Product 1',
  Description: 'Product description',
  Author: 'Author Name',
  Price: 100.0,
  Stock: 50,
  Status: 'Available',
  New_arrival_date: '2024-11-01',
  Product_image: 'image1.jpg',
  Seller_ID: 1
});

// 讀取產品資料
const product = await Product.read(101);
console.log('產品資料:', product);

// 更新產品資料
await Product.update(101, {
  Product_name: 'Updated Product',
  Description: 'Updated description',
  Author: 'New Author',
  Price: 150.0,
  Stock: 30,
  Status: 'Unavailable',
  New_arrival_date: '2024-12-01',
  Product_image: 'image2.jpg',
  Seller_ID: 2
});

// 刪除產品
await Product.delete(101);
```

（其他表格的 CRUD 操作類似於上述範例，依需求參考對應模組）

---

## 簡單 Demo 範例程式

### 執行 Demo

在命令提示字元中運行以下指令來執行 `app.js` 程式：

```bash
node app.js
```

### 注意事項

1. **異步操作**：每個操作函式都使用 `async`/`await`。請確保在異步函式中呼叫這些函式。
2. **錯誤處理**：使用 `try...catch` 來處理可能的錯誤。
3. **資料庫連線池**：`db.js` 使用連線池來管理資料庫連線，因此不需要手動開啟或關閉連線。

## 結語

這些模組和範例程式使得資料庫的 CRUD 操作更加模組化且易於維護。每個表格的操作都獨立在各自的模組中，使得程式碼結構清晰且可重用。希望這份說明文件能夠幫助您順利使用這些模組進行資料操作。