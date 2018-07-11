DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id bigserial PRIMARY KEY,
  firstname varchar(60) NOT NULL,
  lastname varchar(60) NOT NULL,
  username varchar(30) NOT NULL,
  email varchar(320) NOT NULL,
  password varchar(64) NOT NULL,
  token varchar(120)
);
