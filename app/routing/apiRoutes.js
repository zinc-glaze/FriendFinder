//require friends array
var allFriends = require("../data/friends");
var smallestDifference = 1000;
var totalDifference = 0;
var bestMatch;

module.exports = function(app) {
  //API Routes
  //GET requests
  app.get("/api/friends", function(req, res) {
    //responds with JSON of all friends
    res.json(allFriends);
  });

  //POST requests
  app.post("/api/friends", function(req, res) {


    //add compatibility logic here

    //req.body is the newFriend object just submitted
    
    //allFriends is the (not yet updated) array of allFriends

    var newFriend = req.body;

    for (var i = 0; i < allFriends.length; i++) {
      
      for (var j = 0; j < 10; j++) {
        totalDifference += Math.abs(allFriends[i].scores[j] - newFriend.scores[j]);
      }
      console.log(allFriends[i].name + ": " + totalDifference);
      if (totalDifference < smallestDifference) {
        smallestDifference = totalDifference;
        bestMatch = allFriends[i];
        totalDifference = 0;
      }
      totalDifference = 0;


    }
    smallestDifference = 1000;
    //update allFriends array (server data)by adding newFriend
    allFriends.push(newFriend);
    res.json(bestMatch);
  });
};



