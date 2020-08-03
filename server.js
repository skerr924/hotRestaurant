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