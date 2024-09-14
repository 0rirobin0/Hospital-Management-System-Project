const mysql = require('mysql2');

// Create a MySQL connection pool
const db = mysql.createConnection({
    host: 'localhost', // Your database host (e.g., localhost)
    user: 'robin', // Your database user
    password: 'robinhood', // Your database password
    database: 'hms', // Your database name
  });

db.connect((err) => {
  if (err) throw err;
  console.log('Database Connected...');
});

module.exports = db;
