DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial PRIMARY KEY,
  password varchar(250) NOT NULL,
  user_name varchar(250) NOT NULL,
  roles varchar(250) NOT NULL,
  active boolean NOT NULL
);
