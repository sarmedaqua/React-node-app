const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yourpass1@#',
  database: 'employees'
});


module.exports = connection;
