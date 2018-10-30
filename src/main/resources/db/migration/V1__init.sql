DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  content varchar(250) NOT NULL
);

CREATE TABLE users (
  id bigserial PRIMARY KEY,
  email varchar (80) NOT NULL,
  password varchar (12) NOT NULL,
  name varchar (20) NOT NULL
);