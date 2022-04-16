const express = require("express");
var addon = require('bindings')('parser');

const functionRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

functionRoutes.route('/get-set/:id').get( function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { number : req.params.id };
    db_connect
        .collection("records")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});
  
functionRoutes.route('/make-cards/:id').post( function (req, res) {
    let cardSet = addon.parseIntoCardsFromAudio(req.body.transcript);
    let db_connect = dbo.getDb();
    let myobj = {
        _id: ObjectId( parseInt(req.params.id) ),
        number: req.params.id,
        set: cardSet
    };
    db_connect.collection("records").insertOne(myobj, function (err, response) {
        if (err) throw err;
        res.json(response);
        //res.send("Successfully stored to ID to " + req.params.id);
    }); 
});

module.exports = functionRoutes;