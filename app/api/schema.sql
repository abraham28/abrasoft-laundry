CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

ALTER TABLE IF EXISTS public.users
    ALTER COLUMN user_id SET DEFAULT uuid_generate_v4();

-- Companies Table
CREATE TABLE Companies (
  company_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  company_name VARCHAR(255),
  company_address TEXT,
  company_logo VARCHAR(255)
);

-- Users Table
CREATE TABLE Users (
  user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_first_name VARCHAR(255),
  user_last_name VARCHAR(255),
  user_contact_number VARCHAR(20),
  user_email VARCHAR(255),
  user_address TEXT,
  user_birthday DATE,
  user_password VARCHAR(255) NOT NULL
);

-- Roles Table
CREATE TABLE Roles (
  role_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  role_name VARCHAR(255),
  company_id UUID REFERENCES Companies(company_id)
);

-- User_Role Table (Many-to-Many relationship between Users and Roles)
CREATE TABLE User_Role (
  user_id UUID REFERENCES Users(user_id),
  role_id UUID REFERENCES Roles(role_id),
  PRIMARY KEY (user_id, role_id)
);

-- Permissions Table
CREATE TABLE Permissions (
  permission_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  permission_name VARCHAR(255),
  company_id UUID REFERENCES Companies(company_id)
);

-- Role_Permissions Table (Many-to-Many relationship between Roles and Permissions)
CREATE TABLE Role_Permissions (
  role_id UUID REFERENCES Roles(role_id),
  permission_id UUID REFERENCES Permissions(permission_id),
  PRIMARY KEY (role_id, permission_id)
);

-- Categories Table
CREATE TABLE Categories (
  category_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  category_name VARCHAR(255),
  category_class VARCHAR(255),
  company_id UUID REFERENCES Companies(company_id)
);

-- Expenses Table
CREATE TABLE Expenses (
  expense_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  expense_notes TEXT,
  category_id UUID REFERENCES Categories(category_id),
  company_id UUID REFERENCES Companies(company_id)
);

-- Payments Table
CREATE TABLE Payments (
  payment_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  payment_amount DECIMAL(10, 2),
  payment_mode VARCHAR(50),
  company_id UUID REFERENCES Companies(company_id)
);

-- Expense_Payment Table (Many-to-Many relationship between Expenses and Payments)
CREATE TABLE Expense_Payment (
  expense_id UUID REFERENCES Expenses(expense_id),
  payment_id UUID REFERENCES Payments(payment_id),
  PRIMARY KEY (expense_id, payment_id)
);

-- Products Table
CREATE TABLE Products (
  product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  company_id UUID REFERENCES Companies(company_id),
  product_name VARCHAR(255),
  product_category UUID REFERENCES Categories(category_id),
  product_description TEXT,
  product_image_url TEXT,
  variant_of UUID REFERENCES Products(product_id)
);

-- Product_Purchase Table
CREATE TABLE Product_Purchase (
  product_id UUID REFERENCES Products(product_id),
  purchase_id UUID REFERENCES Purchases(purchase_id),
  product_purchase_quantity INT,
  product_purchase_amount DECIMAL(10, 2),
  PRIMARY KEY (product_id, purchase_id)
);

-- Purchases Table
CREATE TABLE Purchases (
  purchase_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  company_id UUID REFERENCES Companies(company_id),
  purchase_notes TEXT
);

-- Purchase_Payment Table
CREATE TABLE Purchase_Payment (
  purchase_id UUID REFERENCES Purchases(purchase_id),
  payment_id UUID REFERENCES Payments(payment_id),
  PRIMARY KEY (purchase_id, payment_id)
);

-- Orders Table
CREATE TABLE Orders (
  order_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  company_id UUID REFERENCES Companies(company_id),
  order_notes TEXT,
  order_customer_id UUID REFERENCES Users(user_id),
  order_updated_by UUID REFERENCES Users(user_id)
);

-- Order_Product Table
CREATE TABLE Order_Product (
  order_id UUID REFERENCES Orders(order_id),
  product_id UUID REFERENCES Products(product_id),
  PRIMARY KEY (order_id, product_id)
);

-- Laundries Table
CREATE TABLE Laundries (
  laundry_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES Orders(order_id),
  laundry_contents TEXT,
  laundry_status VARCHAR(255)
);

-- Order_Payment Table (Many-to-Many relationship between Orders and Payments)
CREATE TABLE Order_Payment (
  order_id UUID REFERENCES Orders(order_id),
  payment_id UUID REFERENCES Payments(payment_id),
  PRIMARY KEY (order_id, payment_id)
);
