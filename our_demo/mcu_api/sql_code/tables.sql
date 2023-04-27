DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INTEGER,
    affiliation VARCHAR,
    powered BOOLEAN DEFAULT 0,
    alias VARCHAR,
    popularity FLOAT(4, 2) -- 50.67, 506.7
);
