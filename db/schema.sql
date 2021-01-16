CREATE DATABASE burgers_db;

USE burgers_db;

drop table burgers;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(150) NOT NULL,
    devoured BOOLEAN, 
    PRIMARY KEY (id)
);