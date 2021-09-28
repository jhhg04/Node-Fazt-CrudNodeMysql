-- creating database
CREATE DATABASE crudnodejsmysql;

-- using database
USE crudnodejsmysql;

-- create table
CREATE TABLE customer(
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15) 
);

-- using database
SHOW TABLES;

-- using database
DESCRIBE customer;
/*
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
flush privileges;
*/