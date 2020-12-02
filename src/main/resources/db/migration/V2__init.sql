DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  content varchar(250) NOT NULL,
    user_id bigint,
    FOREIGN KEY(user_id) REFERENCES users(id)
);