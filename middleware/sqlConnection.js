const mysql = require('mysql2');

const connectDB = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root', // change username (but this one is default)
    password: '25452545',
    database: 'mtdb_database', // change database name  (up to you ja)
    port: 3306 // Default MySQL port
  });
};

module.exports = { connectDB };
