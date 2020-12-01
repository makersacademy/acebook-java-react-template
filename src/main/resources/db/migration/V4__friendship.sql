CREATE TABLE friends (
    id bigserial PRIMARY KEY,
    person_id BIGINT NOT NULL,
    friend_id BIGINT NOT NULL,
    FOREIGN KEY(person_id) REFERENCES users(id),
    FOREIGN KEY(friend_id) REFERENCES users(id)
    );
