//require friends array
var allFriends = require("../data/friends");

module.exports = function(app) {
  //API Routes
  //GET requests
  app.get("/api/friends", function(req, res) {
    //responds with JSON of all friends
    res.json(allFriends);
  });

  //POST requests
  app.post("/api/friends", function(req, res) {
    //responds by pushing request(form data from client) to allFriends array (server data)
    allFriends.push(req.body);
  });
};



