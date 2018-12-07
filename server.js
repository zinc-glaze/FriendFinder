//Dependencies
var express = require("express");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Point to Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start server listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


