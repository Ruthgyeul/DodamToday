-- Create the database
CREATE DATABASE DodamTodayDB;

-- Switch to the database
USE DodamTodayDB;

-- Create the users table
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    walletAddr VARCHAR(42) NOT NULL UNIQUE,
    username VARCHAR(100),
    amount INT DEFAULT 0,
    permission VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the events table
CREATE TABLE event (
    eventAddr VARCHAR(42) PRIMARY KEY, 
    eventName VARCHAR(255) NOT NULL,
    eventDescription TEXT
);

-- Create the user portfolio table
CREATE TABLE portfolio (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    userId BIGINT NOT NULL,
    eventAddr VARCHAR(42) NOT NULL,
    information TEXT,
    price BIGINT,
    amount INT DEFAULT 0,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (eventAddr) REFERENCES event(eventAddr) ON DELETE CASCADE
);