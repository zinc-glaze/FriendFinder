//require friends array
var allFriends = require("../data/friends");
//global variables
var leastDifference = 1000;
var totalDifference = 0;
var bestMatch;

module.exports = function(app) {
  //API Routes

  //GET request
  app.get("/api/friends", function(req, res) {
    //responds with JSON of all friends
    res.json(allFriends);
  });

  //POST request
  app.post("/api/friends", function(req, res) {

    //Compares newFriend to allFriends to find bestMatch
    var newFriend = req.body;

    for (var i = 0; i < allFriends.length; i++) {
      
      for (var j = 0; j < 10; j++) {
        totalDifference += Math.abs(allFriends[i].scores[j] - newFriend.scores[j]);
      }

      if (totalDifference < leastDifference) {
        leastDifference = totalDifference;
        bestMatch = allFriends[i];
      }

      totalDifference = 0;
    }

    leastDifference = 1000;
    //updates allFriends array (server data) by adding newFriend
    allFriends.push(newFriend);
    //Sends bestMatch to client
    res.json(bestMatch);
  });
};



