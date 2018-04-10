// Require/import the express module
var express = require("express");

// Use the Express package to create our server.
var app = express();

// PORT 1
var PORT = 7000;

// PORT 2
var PORT2 = 7500;

app.get("*", function(req, res) {
  //
  res.send("Server Hit" + req.url);
});

// Start our server so that it can begin listening to client requests.

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("You look nice http://localhost:" + PORT);
  res.send("you look nice" + req.url);
});

app.listen(PORT2, function() {
  // Log (server-side) when our server has started
  console.log("You dont look nice: http://localhost:" + PORT2);
  res.send("pish tosh" + req.url);
});
