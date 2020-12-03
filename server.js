// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Array Variables (Table DATA)
// =============================================================
const tableData = [];

const waitData = []
//==============================================================

// Basic Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res){
  res.sendFile(path.join(__dirname, "reserve.html"));
})
//=======================================================


//API Routes
// Tablelist API routes
app.get("/api/tables", function(req, res) {
  return res.json(tableData);
});

app.get("/api/waitlist", function(req, res){
  return res.json(waitData);
});

//Come back if need be.
//app.post("api/clear", function(req, res){return res.json()})






// // Create New Characters - takes in JSON input
// app.post("/api/tables", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newReservation = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
