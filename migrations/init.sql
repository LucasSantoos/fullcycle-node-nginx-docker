-- CREATE DATABASE IF NOT EXISTS nodedb;

USE nodedb;

CREATE TABLE IF NOT EXISTS people (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    primary key (id)
);