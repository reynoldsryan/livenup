'use strict';

var _express = require('express');

var _auth = require('./auth');

var router = _express.Router();

router.route('/', _auth.checkUser).get(function (req, res) {
  var params = req.body.search.params;
  //calls database and return list plants based on filter
}).post(function (req, res) {
  //calls database and saves a plant
}).put(function (req, res) {
  var plant = req.body.plant;
  //calls database and modifies a plant
}).delete(function (req, res) {
  var plantName = req.body.plant.name;
  //calls a database function that deletes the specified plant
});

module.exports = router;
