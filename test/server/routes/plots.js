'use strict';

var _express = require('express');

var _auth = require('./../auth');

var router = _express.Router();

var plot = require('../../database/plots');

router.route('/', _auth.checkUser).get(function (req, res) {
  // res.send('in route /plots GET');
  //var user = req.body.user.username;

  var user = 'Oliver';
  plot.find(user, function(data){
    res.send(data);
  });

  console.log('in route /plots GET');
}).post(function (req, res) {
  //var user = req.body.user.username;
  //var plot = req.body.plot;
  //calls database and save a plot to a user

  var user = 'Oliver';
  var name = 'Garden';
  var length = 2;
  var width = 6;

  plot.add(user, name, length, width, function(data){
    res.send(data);
  });

  console.log('in route /plots POST');
}).put(function (req, res) {
  // var user = req.body.user.username;
  // var plot = req.body.plot;
  var id = '56a95a1cde3f91ee07acaeb9';
  plot.update(id, ["patio", , , ], function(data) {
    res.send(data);
  });
  //calls database and modifies a plot
  console.log('in route /plots PUT');
}).delete(function (req, res) {
  // var user = req.body.user.username;
  // var plotName = req.body.plot.name;
  var id = req.body.id;
  plot.remove(id, function(data) {
    res.send(data);
  });
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
