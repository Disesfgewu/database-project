const Member = require('./dml/member');
const Customer = require('./dml/customer');
const Product = require('./dml/product');
const db = require( './dml/database')

async function runDemo() {
  try {
    // 1. 新增會員
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
    console.log('會員新增成功');

    // 2. 讀取會員資料
    const member = await Member.read(1);
    console.log('讀取到的會員資料:', member);

    // 3. 更新會員資料
    await Member.update(1, {
      Name: 'Jane Doe',
      Email: 'jane@example.com',
      Password: 'newpassword123',
      Phone: '0987654321',
      Birthday: '1990-01-01',
      Register_date: '2024-11-06',
      Last_login: new Date()
    });
    console.log('會員資料更新成功');

    // 4. 刪除會員資料
    // await Member.delete(1);
    // console.log('會員刪除成功');

    // 同樣的流程適用於其他表格，例如 CUSTOMER 和 PRODUCT
  } catch (error) {
    console.error('操作失敗:', error);
  } finally {
    await db.close();
    console.log('連線池已關閉');
    process.exit();
  }
}

// 執行 demo 函式
runDemo();