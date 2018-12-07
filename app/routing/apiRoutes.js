//require friends array
var allFriends = require("../data/friends");

module.exports = function(app) {
  //API Routes
  //GET requests
  app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });

  //POST requests
  app.post("/api/friends", function(req, res) {
    allFriends.push(req.body);
  });
};

//add logic for compatibility


