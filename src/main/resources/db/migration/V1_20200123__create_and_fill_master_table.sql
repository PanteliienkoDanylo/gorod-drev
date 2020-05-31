CREATE TABLE masters (
  id           INT         NOT NULL AUTO_INCREMENT,
  name         VARCHAR(64) NOT NULL,
  surname      VARCHAR(64) NOT NULL,
  phone_number VARCHAR(64),
  PRIMARY KEY (id)
);

INSERT INTO masters (name, surname) VALUES ('Дмитрий', 'Питизин');
INSERT INTO masters (name, surname) VALUES ('Сергей', 'Питизин');