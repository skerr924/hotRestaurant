// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations (DATA)
// =============================================================
var reservations = [
  {
    name: "Sarah",
    email: "sarah.kerr93@gmail.com",
    phone: "6143651843",
    id: "sarahkerr"
  }
];

var waitingList = []; 


// Routes
// =============================================================


//displays homepage 
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//displays tables page 
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

//displays reserve page 
app.get("/reserve", function(req, res) {
  res.sendFile(path.join (__dirname, "reserve.html")); 
});


// Pulling the list of reservations from the database 
app.get("api/reservations", function(req, res) {   //come back to this! 
  var data = req.params;
  console.log(data);

  for (var i = 0; i < data.length; i++) {
      return res.json(data.name);
  }

  return res.json(false);
});


// Create new reservation - takes in JSON input
app.post("/api/reservations", function(req, res) { //how to link this to front-end form 
  var newReservation = req.name;
  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);


});

//Pulling waitlist from the database 
app.get("api/waitlist", function(req, res) {   //come back to this! 
  var data = req.params;
  console.log(data);

  for (var i = 0; i < data.length; i++) {
      return res.json(data.name);
  }

  return res.json(false);
});


// Create new waitlist member 
app.post("/api/waitlist", function(req, res) { //how to link this to front-end form 
  var newWaitList = req.name;
  console.log(newWaitList);
  reservations.push(newWaitList);
  res.json(newWaitList);


});