DROP TABLE IF EXISTS likes;

CREATE TABLE likes (
 id bigserial PRIMARY KEY,
 user_id BIGINT,
 FOREIGN KEY(user_id) REFERENCES users(id),
 post_id BIGINT,
 FOREIGN KEY(post_id) REFERENCES posts(id)
);
