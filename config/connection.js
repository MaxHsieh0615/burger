// Dependencies
var mysql = require("mysql");
require('dotenv').config();

// Creates mySQL connection using Mysql, the empty string in the third argument spot is our password.
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.password,
    database: "burgers_db"
  });
};
connection.connect(function (err) {
  if (err) throw err;
  console.log("id: " + connection.threadId)
});

module.exports = connection;