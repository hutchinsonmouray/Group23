const express = require("express");
var addon = require('bindings')('parser');

const functionRoutes = express.Router();

functionRoutes.route('/hello').get(function (req, res) {
    res.send('hello');
  });
  
functionRoutes.route('/make-cards').post( function (req, res) {
    console.log(req.body.transcript);
    res.send(addon.parseIntoCardsFromAudio(req.body.transcript));
  });

module.exports = functionRoutes;