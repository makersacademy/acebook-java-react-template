DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  content varchar(250) NOT NULL,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);