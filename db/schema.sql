
DROP DATABASE IF EXISTS sandwich_db;
CREATE DATABASE sandwich_db;
USE sandwich_db;

-- Create the table burgers.
CREATE TABLE sandwiches
(
    id INT NOT NULL AUTO_INCREMENT,
    sandwich_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)
