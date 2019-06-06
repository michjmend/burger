// Inside the burgers_controller.js file, import the following: this is our router controller and will identify our end points
// Express
var express = require("express");
// Create the router for the app, and export the router at the end of your file.
var router = express.Router();
// burger.js
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("click")
  burger.insertOne(
    req.body.burger_name,
    function(result) {
      // parse the json here
      res.redirect("/")
    });
  });

router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, req.body.devoured, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

    // router.delete("/api/burgers/:id", function(req, res) {
    //   var condition = "id = " + req.params.id;

    //   burger.deleteOne(condition, function(result) {
    //     if (result.changedRows === 0) {
    //       return res.status(404).end();
    //     } else {
    //       res.status(200).end();
    //     }
    //   });
    // });

// console.log(deleteOne);

    // Export routes for server.js to use.
module.exports = router;
