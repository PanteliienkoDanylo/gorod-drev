CREATE TABLE warehouses (
  id           INT NOT NULL AUTO_INCREMENT,
  name   VARCHAR(64),
  address  VARCHAR(128),
  PRIMARY KEY (id)
);

INSERT INTO warehouses (name, address) VALUES ('Sklad #1', 'Chernihiv');