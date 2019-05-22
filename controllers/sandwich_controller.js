var express = require("express");

var sandwich = require("../models/sandwich.js");

var router = express.Router();
// Create routes and set up logic where required.
router.get("/", function (req, res) {
    sandwich.selectAll(function(data) {
        var handlebarsObject = {
            sandwich: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});
// Add new sandwich.
router.post("/api/sandwich", function (req, res) {
    sandwich.insertOne(["sandwich_name", "devoured"], [req.body.sandwich_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});
// update sandwich to consumed.
router.put("/api/sandwich/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    sandwich.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
//delete sandwich from DB
router.delete("/api/sandwich/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    sandwich.deleteOne(condition, function(result) {
    
            res.status(200).end();
    });
});