'use strict';

var _express = require('express');

var _auth = require('./../auth');

var router = _express.Router();

router.route('/', _auth.checkUser).get(function (req, res) {
  res.send('in route /plots GET');
  var user = req.body.user.username;
  //calls database and return list of plots and plants based on user
  console.log('in route /plots GET');
}).post(function (req, res) {
  var user = req.body.user.username;
  var plot = req.body.plot;
  //calls database and save a plot to a user
  console.log('in route /plots POST');
}).put(function (req, res) {
  var user = req.body.user.username;
  var plot = req.body.plot;
  //calls database and modifies a plot
  console.log('in route /plots PUT');
}).delete(function (req, res) {
  var user = req.body.user.username;
  var plotName = req.body.plot.name;
  //calls a database function that deletes the specified plot
  console.log('in route /plots DELETE');
});

router.route('/plant', _auth.checkUser).get(function (req, res) {
  var plant = req.body.plant;
  //calls database function to return info on plant;
  res.send('in route /plots/plants GET');
  console.log('in route /plots/plants GET');
}).post(function (req, res) {
  var plant = req.body.plant;
  //calls a database function to save a plant
  console.log('in route /plots/plants POST');
}).put(function (req, res) {
  var plant = req.body.plant;
  //calls a database function to edit a plant
  console.log('in route /plots/plants PUT');
}).delete(function (req, res) {
  var plant = req.body.plant;
  //calls a database function that deletes the specified plant
  console.log('in route /plots/plants DELETE');
});

module.exports = router;
