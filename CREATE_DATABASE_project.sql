CREATE DATABASE project;
USE project;

CREATE TABLE MEMBER (
    Member_ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Password VARCHAR(255),
    Phone VARCHAR(20),
    Birthday DATE,
    Register_date DATE,
    Last_login TIMESTAMP
);

-- CUSTOMER 表
CREATE TABLE CUSTOMER (
    Customer_ID INT PRIMARY KEY,
    Member_ID INT,
    FOREIGN KEY (Member_ID) REFERENCES MEMBER(Member_ID)
);

-- ADMINISTRATOR 表
CREATE TABLE ADMINISTRATOR (
    Admin_ID INT PRIMARY KEY,
    Member_ID INT,
    FOREIGN KEY (Member_ID) REFERENCES MEMBER(Member_ID)
);

-- VENDOR 表
CREATE TABLE VENDOR (
    Vendor_ID INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE PRODUCT (
    Product_ID INT PRIMARY KEY,
    Product_name VARCHAR(255),
    Description TEXT,
    Author VARCHAR(100),
    Price DECIMAL(10, 2),
    Stock INT,
    Status VARCHAR(50),
    New_arrival_date DATE,
    Product_image VARCHAR(255),
    Seller_ID INT,
    FOREIGN KEY (Seller_ID) REFERENCES VENDOR(Vendor_ID)
);

CREATE TABLE BOOK_CATEGORY (
    Category_ID INT PRIMARY KEY,
    Category_name VARCHAR(100)
);

CREATE TABLE PRODUCT_CATEGORY (
    Product_ID INT,
    Category_ID INT,
    PRIMARY KEY (Product_ID, Category_ID),
    FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID),
    FOREIGN KEY (Category_ID) REFERENCES BOOK_CATEGORY(Category_ID)
);

CREATE TABLE SHOPPING_CART (
    Cart_ID INT PRIMARY KEY,
    Member_ID INT,
    Total_price DECIMAL(10, 2),
    FOREIGN KEY (Member_ID) REFERENCES MEMBER(Member_ID)
);

CREATE TABLE CART_PRODUCT (
    Cart_ID INT,
    Product_ID INT,
    Quantity INT,
    PRIMARY KEY (Cart_ID, Product_ID),
    FOREIGN KEY (Cart_ID) REFERENCES SHOPPING_CART(Cart_ID),
    FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID)
);

CREATE TABLE COUPON (
    Coupon_ID INT PRIMARY KEY,
    Low_money DECIMAL(10, 2),
    Start_date DATE,
    End_date DATE,
    Detail TEXT,
    Type VARCHAR(50),
    Owner_ID INT,
    Sender_ID INT,
    FOREIGN KEY (Owner_ID) REFERENCES CUSTOMER(Customer_ID),
    FOREIGN KEY (Sender_ID) REFERENCES ADMINISTRATOR(Admin_ID)
);

CREATE TABLE ORDER_ (
    Order_ID INT PRIMARY KEY,
    Order_time TIMESTAMP,
    Status VARCHAR(50),
    Status_update_time TIMESTAMP,
    Package_method VARCHAR(50),
    Payment_method VARCHAR(50),
    Address VARCHAR(255),
    Notes TEXT,
    Buyer_ID INT,
    Seller_ID INT,
    Coupon_used_ID INT,
    FOREIGN KEY (Buyer_ID) REFERENCES CUSTOMER(Customer_ID),
    FOREIGN KEY (Seller_ID) REFERENCES VENDOR(Vendor_ID),
    FOREIGN KEY (Coupon_used_ID) REFERENCES COUPON(Coupon_ID)
);

CREATE TABLE ORDER_PRODUCT (
    Order_ID INT,
    Product_ID INT,
    Quantity INT,
    PRIMARY KEY (Order_ID, Product_ID),
    FOREIGN KEY (Order_ID) REFERENCES ORDER_(Order_ID),
    FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID)
);

show tables;
