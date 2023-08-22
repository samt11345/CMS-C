DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;

USE cms_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
  
);

CREATE TABLE role (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(30) ,

     salary DECIMAL ,

     department_id INT );

     CREATE TABLE employee (
        id INT  AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INT,
        manager_id INT
     );
