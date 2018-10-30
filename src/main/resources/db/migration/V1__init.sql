DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;


CREATE TABLE users (
  id bigserial PRIMARY KEY,
  email varchar (80) NOT NULL,
  password varchar (12) NOT NULL,
  name varchar (20) NOT NULL
);

CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  content_post varchar(250) NOT NULL,
  user_id  integer references users(id),
  post_date_time timestamp
);

CREATE TABLE comments (
  id bigserial PRIMARY KEY,
  user_id  integer references users(id),
  post_id integer references posts(id),
  content_comment varchar(250) NOT NULL,
  comment_date_time timestamp
);

CREATE TABLE likes (
  id bigserial PRIMARY KEY,
  user_id  integer references users(id),
  post_id integer references posts(id),
);