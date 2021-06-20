DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    post TEXT NOT NULL,
    user_id INT NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);