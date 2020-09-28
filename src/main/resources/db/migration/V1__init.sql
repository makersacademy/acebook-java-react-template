DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  name varchar(100) NOT NULL,
  content varchar(250) NOT NULL,
  post_time varchar(100) NOT NULL
);
