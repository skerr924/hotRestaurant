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

var waitlist = []; 

var visitors = 0; 


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
app.get("/api/tables", function(req, res) {  
  res.json(data.reservations);
});


//Pulling waitlist from the database 
app.get("/api/waitlist", function(req, res) {  
  res.json(data.waitlist);
});

app.get("/api/", function(req, res){
  res.json(data); 
}); 

app.get("/api/visitors", function(req, res){ 
  res.json(visitors); 
})


// Get new table data entry from POST
app.post("/api/new", function(req, res) {
  var newRes = req.body;
  console.log(newRes);
  if (newRes && newRes.name) {
  	newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
  }
  console.log(newRes);

  if (data.reservations.length < 5) {
  	data.reservations.push(newRes);
  } else {
  	data.waitlist.push(newRes);
  }
  
  res.json(newRes);
});
