// Dependencies
var mysql = require("mysql");

// Creates mySQL connection using Mysql, the empty string in the third argument spot is our password.
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "baby22732864",
  database: "burgers_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("id: " + connection.threadId)
})

module.exports = connection;