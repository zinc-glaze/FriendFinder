//API Routes

app.get("/api/friends", function(req, res) {
  return res.json(allFriends);
});

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  friends.push(newFriend);
  res.json(newFriend);
});


