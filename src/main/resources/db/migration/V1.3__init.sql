DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id bigserial PRIMARY KEY,
  content varchar(250) NOT NULL,
  time_created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
