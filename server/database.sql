CREATE DATABASE albumdb;

CREATE TABLE artist(
    artist_id SERIAL PRIMARY KEY,
    artist_name varchar(40)
)

CREATE TABLE album(
    album_id SERIAL PRIMARY KEY,
    album_title varchar(40),
    album_artist varchar(40),
    album_description text,
    album_duration varchar(5),
    album_date varchar(255)
)