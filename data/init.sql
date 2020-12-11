
DROP DATABASE IF EXISTS dev_eshop;
CREATE DATABASE dev_eshop;
USE dev_eshop;


DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS orders;

CREATE TABLE products(
    productID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    pic TEXT,
    descr TEXT,
    price FLOAT NOT NULL,
    numAvailable INT NOT NULL 
);


CREATE TABLE customers(
    customerID INT AUTO_INCREMENT PRIMARY KEY, 
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    addrStreet VARCHAR(30) NOT NULL,
    addrCity VARCHAR(30) NOT NULL,
    addrCountry VARCHAR(30) NOT NULL,
    addrZIP INT NOT NULL
);


CREATE TABLE orders(
    orderID INT AUTO_INCREMENT PRIMARY KEY, 
    products json DEFAULT NULL,
    customerID INT NOT NULL,
    state VARCHAR(20) NOT NULL,
    FOREIGN KEY (customerID) REFERENCES customers(customerID)
);

CREATE TABLE counters(
    counterID INT AUTO_INCREMENT PRIMARY KEY, 
    num INT NOT NULL
);

INSERT INTO products(title, pic, descr, price, numAvailable) VALUES (
    'Ushanka',
    'https://upload.wikimedia.org/wikipedia/commons/d/df/Ushanka_of_Soldier_of_Soviet_Army-1.jpg',
    'Very comfortable ushanka that provides you with warmth throughout the whole Russian winter.',
    17.09,
    55
);
INSERT INTO products(title, pic, descr, price, numAvailable) VALUES (
    'Kermit the frog',
    'https://cdn.pixabay.com/photo/2016/09/07/20/56/kermit-1652598_960_720.jpg',
    'Famous toy for your kid to play with.',
    6.96,
    666
); 
INSERT INTO products(title, pic, descr, price, numAvailable) VALUES (
    'Buzz Lightyear toy',
    'https://cdn.pixabay.com/photo/2015/04/11/06/59/buzz-lightyear-717315_960_720.jpg',
    'Famous toy for your kid to play with.',
    17.09,
    55
);

INSERT INTO counters(num) VALUES (0)

/*

Creative Commons Attribution-Share Alike 4.0 International, 3.0 Unported, 2.5 Generic, 2.0 Generic and 1.0 Generic license
https://upload.wikimedia.org/wikipedia/commons/d/df/Ushanka_of_Soldier_of_Soviet_Army-1.jpg

Pixabay License - no attribution required
https://cdn.pixabay.com/photo/2016/09/07/20/56/kermit-1652598_960_720.jpg

Pixabay License - no attribution required
https://cdn.pixabay.com/photo/2015/04/11/06/59/buzz-lightyear-717315_960_720.jpg

CREATE TABLE IF NOT EXISTS clickCounter(

);*/