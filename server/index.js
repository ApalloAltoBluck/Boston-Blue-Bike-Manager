const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
var bodyParser = require("body-parser");

const app = express();
var jsonParser = bodyParser.json();

var mysql = require("mysql");

// ADD development.ENV file to create connection
var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.connect();

// find every user - findall
app.get("/users", (req, res) => {
  connection.query("select * from users", function (err, rows, fields) {
    if (err) throw err;

    res.json({ message: rows });
  });
});

// find user by specific ID
app.get("/users/:userID", function (req, res) {
  connection.query(
    "select * from users where userID=?",
    [req.params.userID],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

// find bike by user id
app.get("/bikes/user/:userID", function (req, res) {
  connection.query(
    "select * from bikes where user=?",
    [req.params.userID],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

// select all bikes - findall
app.get("/bikes", (req, res) => {
  connection.query("select * from bikes", function (err, rows, fields) {
    if (err) throw err;

    res.json({ message: rows });
  });
});

// select all stations - findall
app.get("/stations", (req, res) => {
  connection.query("select * from stations", function (err, rows, fields) {
    if (err) throw err;

    res.json({ message: rows });
  });
});

//edit a user for a specific ID
app.put("/users/edit/:id", jsonParser, function (req, res) {
  console.log(req);
  connection.query(
    "UPDATE `users` SET `firstName`=?,`lastName`=?, `username` =?, `password` =?,`email` =?,`dateOfBirth` =?,`membership` =? WHERE `userID`=?",
    [
      req.body.firstName,
      req.body.lastName,
      req.body.username,
      req.body.password,
      req.body.email,
      new Date(req.body.dateOfBirth).toISOString().slice(0, 10),
      req.body.membership,
      req.params.id,
    ],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

// add a new user to the users table
app.post("/users", jsonParser, function (req, res) {
  connection.query(
    "INSERT INTO users SET `firstName`=?,`lastName`=?, `username` =?, `password` =?,`email` =?,`dateOfBirth` =?,`membership` =?",
    [
      req.body.firstName,
      req.body.lastName,
      req.body.username,
      req.body.password,
      req.body.email,
      new Date(req.body.dateOfBirth).toISOString().slice(0, 10),
      req.body.membership,
    ],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

// create new bike
app.post("/bikes", jsonParser, function (req, res) {
  connection.query(
    "INSERT INTO bikes SET `inUse`=?,`user`=?, `station_id`=?",
    [req.body.inUse, req.body.user, req.body.station_id],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

// display a bike for a certain ID
app.get("/bikes/:bikeID", function (req, res) {
  connection.query(
    "select * from bikes where bikeID=?",
    [req.params.bikeID],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

// BIKES
// UPDATE A BIKE for an ID
app.put("/bikes/edit/:id", jsonParser, function (req, res) {
  connection.query(
    "UPDATE `bikes` SET `inUse`=?,`user`=?, `station_id` =? WHERE `bikeID`=?",
    [req.body.inUse, req.body.user, req.body.station_id, req.params.id],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

// delete bike for a certain ID
app.delete("/bikes/:id", jsonParser, function (req, res) {
  connection.query(
    "DELETE FROM `bikes` WHERE `bikeID`=?",
    [parseInt(req.params.id)],
    function (error, results, fields) {
      console.log(req);
      if (error) throw error;
      console.log(results);
      res.redirect("/");
      res.end("Record has been deleted!");
    }
  );
});

// delete user for specific ID
app.delete("/users/:id", jsonParser, function (req, res) {
  console.log(req.body);
  connection.query(
    "DELETE FROM `users` WHERE `userID`=?",
    [parseInt(req.params.id)],
    function (error, results, fields) {
      console.log(req);
      if (error) throw error;
      console.log(results);
      res.redirect("/");
      res.end("Record has been deleted!");
    }
  );
});

// STATION

// find station by specific ID
app.get("/stations/:station_id", function (req, res) {
  connection.query(
    "select * from stations where station_id=?",
    [req.params.station_id],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

// delete a station for a specific ID
app.delete("/stations/:station_id", jsonParser, function (req, res) {
  connection.query(
    "DELETE FROM `stations` WHERE `station_id`=?",
    [parseInt(req.params.station_id)],
    function (error, results, fields) {
      console.log(req);
      if (error) throw error;
      console.log(results);
      res.redirect("/");
      res.end("Record has been deleted!");
    }
  );
});

//update a station for a specific ID
app.put("/stations/edit/:id", jsonParser, function (req, res) {
  console.log(req);

  connection.query(
    "UPDATE `stations` SET `external_id`=?,`name_`=?, `short_name` =?, `capacity`=?,`lat`=?, `lon` =?, `rental_url`=?,`station_id`=?, `station_type` =?, `electric_bike_surcharge_waiver`=?,`eightd_has_key_dispenser`=?, `region_id` =?, `has_kiosk` =? WHERE `station_id`=?",
    [
      req.body.external_id,
      req.body.name_,
      req.body.short_name,
      req.body.capacity,
      req.body.lat,
      req.body.lon,
      req.body.rental_url,
      req.body.station_id,
      req.body.station_type,
      req.body.electric_bike_surcharge_waiver,
      req.body.eightd_has_key_dispenser,
      req.body.region_id,
      req.body.has_kiosk,
      req.params.id,
    ],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

//create a station for a specific ID
app.post("/stations", jsonParser, function (req, res) {
  console.log(req);

  connection.query(
    "INSERT INTO stations SET `external_id`=?,`name_`=?, `short_name` =?, `capacity`=?,`lat`=?, `lon` =?, `rental_url`=?,`station_id`=?, `station_type` =?, `electric_bike_surcharge_waiver`=?,`eightd_has_key_dispenser`=?, `region_id` =?, `has_kiosk` =?",
    [
      req.body.external_id,
      req.body.name_,
      req.body.short_name,
      req.body.capacity,
      req.body.lat,
      req.body.lon,
      req.body.rental_url,
      req.body.station_id,
      req.body.station_type,
      req.body.electric_bike_surcharge_waiver,
      req.body.eightd_has_key_dispenser,
      req.body.region_id,
      req.body.has_kiosk,
      req.body.station_id,
    ],
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
