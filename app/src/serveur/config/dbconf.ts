// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bdboutique',
  waitForConnections: true,
  connectionLimit: 10
}).promise();
