//Dependencies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = 3000;

//Set up Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Start server listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


