// Inside the burgers_controller.js file, import the following:
// Express
var express = require("express");
// burger.js
var burger = require("../models/burger.js");
// Create the router for the app, and export the router at the end of your file.
var router = express.Router();
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
