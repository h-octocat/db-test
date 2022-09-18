var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql5.freesqldatabase.com",
  user: "sql5520596",
  password: "Byc3ypEUAh"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



