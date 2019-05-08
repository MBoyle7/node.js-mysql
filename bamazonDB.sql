CREATE DATABASE bamazonDB;
USE bamazonDB;
CREATE TABLE Products (itemId integer auto_increment not null, productName varchar(99) NOT NULL, categoryName varchar(50) NOT NULL, price integer(10,4) NOT NULL, productQuantity integer(10) NOT NULL, PRIMARY KEY(itemId) );
describe Products;
select * from Products;
INSERT INTO Products (productName, categoryName, price, productQuantity) VALUES ("2007 Jeep Grand Cherokee", "Automobiles", 30000.00, 5);
INSERT INTO Products (productName, categoryName, price, productQuantity) VALUES ("2015 Chevrolet Tahoe", "Automobiles", 42000.00, 7);
INSERT INTO Products (productName, categoryName, price, productQuantity) VALUES ("2017 Porsche 911 Turbo", "Automobiles", 95000.00, 3);
INSERT INTO Products (productName, categoryName, price, productQuantity) VALUES ("Nike Sweatpants", "Clothing", 65.00, 25);
INSERT INTO Products (productName, categoryName, price, productQuantity) VALUES ("Adidas Hoodie", "Clothing", 75.00, 15);
INSERT INTO Products (productName, categoryName, price, productQuantity) VALUES ("Puma Hat", "Clothing", 35.00, 23);
INSERT INTO Products (productName, categoryName, price, productQuantity) VALUES ("Samsung Television", "Electronics", 1000.00, 10);
INSERT INTO Products (productName, categoryName, price, productQuantity) VALUES ("XBOX One S", "Electronics", 350.00, 21);
INSERT INTO Products (productName, categoryName, price, productQuantity) VALUES ("Macbook Air", "Electronics", 999.99, 13);
INSERT INTO Products (ProductName, categoryName, Price, StockQuantity) VALUES ("IKEA Table", "Furniture", 349.99, 26);

select * from Products;