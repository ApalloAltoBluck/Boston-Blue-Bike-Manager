const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YOUR_PASSWORD',
  database: 'final_project'
})

connection.connect()

connection.query('select * from users', function (err, rows, fields) {
  if (err) throw err

  console.log(rows)

  app.get("/users", (req, res) => {
    res.json({ message: rows });
  });
})

connection.query('select * from bikes', function (err, rows, fields) {
  if (err) throw err

  console.log(rows)

  app.get("/bikes", (req, res) => {
    res.json({ message: rows });
  });
})

connection.query('select * from stations', function (err, rows, fields) {
  if (err) throw err

  console.log(rows)

  app.get("/stations", (req, res) => {
    res.json({ message: rows });
  });
})





app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});