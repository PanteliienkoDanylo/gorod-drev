CREATE TABLE products (
  id           VARCHAR(64),
  name         VARCHAR(128),
  sale_price   DECIMAL(4, 2),
  master_price DECIMAL(4, 2),
  master_id    INT,
  PRIMARY KEY (id),
  FOREIGN KEY (master_id) REFERENCES masters (id)
);

INSERT INTO products (id, name, sale_price, master_price, master_id) VALUES ('a.111', 'Тарелка', '23.05', '19.10', 1);
INSERT INTO products (id, name, sale_price, master_price, master_id) VALUES ('a.112', 'Доска', '33.55', '25.55', 1);
INSERT INTO products (id, name, sale_price, master_price, master_id) VALUES ('a.113', 'Ложка', '15.05', '10.22', 2);