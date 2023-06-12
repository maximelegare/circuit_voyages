// get the client
const mysql = require("mysql2");
require("dotenv").config();
// Create the connection pool. The pool-specific settings are the defaults
export const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    waitForConnections: true,
    connectionLimit: 10
  })
  .promise();
