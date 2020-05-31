CREATE TABLE warehouse_product_info (
  warehouse_id       INT,
  product_id         VARCHAR(64),
  total_count        INT,
  booked_count       INT,
  left_count         INT,
  last_delivery_date DATE,
  PRIMARY KEY (warehouse_id, product_id)
);

INSERT INTO warehouse_product_info(warehouse_id, product_id, total_count, booked_count, left_count, last_delivery_date) VALUES (1, 'a.111', 10, 0, 10, CURDATE());
INSERT INTO warehouse_product_info(warehouse_id, product_id, total_count, booked_count, left_count, last_delivery_date) VALUES (1, 'a.112', 15, 0, 15, CURDATE());
INSERT INTO warehouse_product_info(warehouse_id, product_id, total_count, booked_count, left_count, last_delivery_date) VALUES (1, 'a.113', 19, 1, 18, CURDATE());