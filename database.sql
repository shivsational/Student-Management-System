DROP DATABASE IF EXISTS student_management;

CREATE DATABASE student_management;

USE student_management;

CREATE TABLE students (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    rollNo VARCHAR(20) UNIQUE NOT NULL,

    course VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    phone VARCHAR(15) NOT NULL

);

CREATE TABLE admins (

    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(50) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL

);

-- Default Admin
-- Username : admin
-- Password : admin123

INSERT INTO admins (username, password)
VALUES (
    'admin',
    '$2b$10$9mqOrKdI/vwYWgFewroieeo2mHllD.OJNfOzhYJw.Kgxtx8yCOQ/q'
);