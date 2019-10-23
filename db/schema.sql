CREATE database `top_vehicle`;


CREATE database top_vehicle2;

USE top_vehicle2;




CREATE TABLE cars (
  id INT NOT NULL AUTO_INCREMENT,
  carId INT(11) NULL,
  make VARCHAR(100) NULL,
  model VARCHAR(100) NULL,
  photo VARCHAR(1000) NULL,
  fuelType1 VARCHAR(1000) NULL,
  VClass VARCHAR(100) NULL,
  trany VARCHAR(100) NULL,
  createdOn VARCHAR(100) NULL,
  fuelCost08 INT(100) NULL,
  PRIMARY KEY (id)
);


CREATE TABLE info (
  info_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comment VARCHAR(100) NULL,
  carId INT,
  FOREIGN KEY (carId) REFERENCES cars(id) ON DELETE CASCADE
);


CREATE TABLE user(
id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
username varchar(100) NOT NULL,
email varchar(100) NOT NULL,
password varchar(100) NOT NULL

)